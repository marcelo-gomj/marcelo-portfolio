import { RichText } from "@/types/contentful-types";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

type ContentBlogProps = {
  content: RichText
}

const ContentBlog = (
  { content } : ContentBlogProps
) => {
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
    <article
      className="text-[1.075rem] ms:text-[0.9rem]"
    >
      {
        documentToReactComponents(
          content, 
          contentModel
        )
      }
    </article>
  )
}

export default ContentBlog;