import Github from "@/contacts/github.svg";
import { QueryProjects } from "@/types/contentful-types";
import Image from "next/image";
import SectionHomeContainer from "./SectionHomeContainer";

type ViewProjectsProps = {
  projects: QueryProjects
}

const ViewProjects = (
  { 
    projects: { items, errors } 
  }: ViewProjectsProps
) => {
  return (
    <SectionHomeContainer
      title="Meus Projetos"
      Icon={Github}
    >      
      <div 
        className="space-y-20"
      >{
        items.map(({ fields : { 
          title, 
          cover, 
          description,
          projectName 
        }}) => (
          <article
            key={projectName}
            className="flex gap-10 border-[1.5px] border-neutral-500 p-12 rounded-lg hover:border-neutral-200 cursor-pointer ms:flex-col ms:p-8 sm:p-2"
          >
            <div
              className="space-y-8 w-[50%] ms:w-full"
            >
              <div
                className="flex gap-6 items-center"
              >
                <Github 
                  className="w-5 h-5"
                />
                
                <h3
                  className="text-xl font-medium"
                >
                  { title }
                </h3>
              </div>
  
              <p
                className="text-[0.86rem] line-clamp-[10] leading-6 tracking-wide text-neutral-400 sl:font-light sl:text-neutral-200"
              >
                { description }
              </p>
            </div>
  
            <div
              className="relative flex justify-end perspective-[1000px] w-[50%] ms:w-full"
            >
              <Image
                className="transform rotate-y-[5deg] rotate-x-[15deg] scale-105"
                width={400}
                height={600}
                src={"https:" + cover.fields.file.url}
                alt={title}
                quality={100}
              />
            </div>
          </article>
        ))
  
      }</div>
    </SectionHomeContainer>
  )
}

export default ViewProjects;