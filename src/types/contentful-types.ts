import { EntryFields , EntrySkeletonType, EntryCollection } from "contentful"

export type ProjectFields = EntrySkeletonType<{
  title: EntryFields.Text,
  projectName: EntryFields.Text,
  description: EntryFields.Text,
  cover: EntryFields.AssetLink,
  banner: EntryFields.AssetLink,
  content: EntryFields.RichText
}>;


export type QueryProjects = EntryCollection<ProjectFields, 
  undefined, 
'en-US'
>
