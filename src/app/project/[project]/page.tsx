import { fetchRepository } from "@/service/github";
import { fetchContentful } from "@/service/contentful";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

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
  
  const { fields } = result.items[0];
  const contentModel: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <div
          className="py-4 leading-7 text-neutral-200"
        >
          {children}
        </div>
      ) 
    }
  }
  
  return (
    <div
      className="px-48 py-20"
    >
      <header>
        <h1
          className="jetbrains-mono text-6xl font-bold mb-20"
        >{fields.title}</h1>
      </header>
      <article
        className="text-[1.075rem]"
      >
        {documentToReactComponents(
          fields.content, 
          contentModel
        )}
      </article>
    </div>
  )
}

export default ProjectPage;