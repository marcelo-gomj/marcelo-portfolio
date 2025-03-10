import moment from "moment";
import "moment/locale/pt-BR";

import { fetchRepository } from "@/service/github";
import { fetchContentful, getImageUrlByLink } from "@/service/contentful";
import Image from "next/image";
import Link from "next/link";
import ContentBlog from "@/components/ContentBlog";

const ProjectPage = async (
  { params }: { params: Promise<{ project: string }> }
) => {
  const { project } = await params;
  const projectDetails = await fetchRepository(project);
  const { result, errors } = await fetchContentful({ 
    linkBy: ['projectName', project],
    select: ["title", "projectName", "banner", "content"], 
    cache: "force-cache"
  })
  
  if (
    !projectDetails || 
    errors || 
    !result ||
    result.items.length === 0 
  ) return "not found";
  
  const [{ fields }] = result.items;
  const banner = getImageUrlByLink(
    fields.banner.sys.id, 
    result.includes
  );
  
  const details = {
    banner: "https:" + banner?.fields.file.url,
    bannerAlt: banner?.fields.title || "image alt",
    lastUpdated : moment(projectDetails.updated_at).format("LL")  
  }
  
  return (
    <div
      className="px-36 py-20 ml:px-20 mm:px-10 sl:px-2"
    >
      <div
        className="text-[1.1rem] text-neutral-400 hover:text-neutral-50 mb-10"
      >
        <Link href={'/'}>Página Inicial</Link>
      </div>

      <header
        className="mb-10 space-y-20"
      >      
        <div
          className="flex items-center justify-between ms:flex-col ms:space-y-10 ms:items-start ms:justify-normal"
        >
          <h1
            className="shrink jetbrains-mono text-5xl font-bold ml:text-3xl ms:text-2xl"
          >
            {"Master Engine Project Major Master World"}
          </h1>
          
          <div
            className="shrink-0"
          >
            <Link
              href={projectDetails.html_url}
              target="_blank"
              className="px-12 py-3 border-2 border-green-500 rounded-full"
            >
              Ver no Github
            </Link>
          </div>
          
        </div>
        
        <div
          className="flex text-neutral-400 gap-4"
        >
          <div>          
            Ultima atualização: {details.lastUpdated}
          </div>  
        </div>
        
        <div>
          {banner ? <Image
            className=""
            alt={details.bannerAlt}
            width={600}
            height={300}
            src={details.banner} 
          /> : null}
        </div>
      </header>
      
      <ContentBlog 
        content={fields.content}
      />
      
      <ul className="flex gap-4 text-neutral-400 my-5">
        {projectDetails.topics.map((topic, index) => (
          <li
            key={index}
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectPage;