import { ProjectFields, QueryProjects } from "@/types/contentful-types";
import { createClient, EntryField } from "contentful";

const contentful = createClient({
  space: String(process.env.CONTENTFUL_SPACE),
  accessToken: String(process.env.CONTENTFUL_ACCESS_TOKEN),
})

const queryProjects = (
  
) : Promise<QueryProjects> => {
  return contentful.getEntries({
    content_type: "myProjects",
    select: [
      "fields.title",
      "fields.projectName",
      "fields.description",
      "fields.cover"
    ],
    limit: 4
  })
}

export { queryProjects };