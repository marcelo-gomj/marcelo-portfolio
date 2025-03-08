import { Entries, IncludesAssets, ItemFields } from "@/types/contentful-types";
import { find, join, map } from "ramda";

type ConfigFetchContentful = {
  linkBy?: [keyof ItemFields, string],
  select ?: (keyof ItemFields)[],
  limit ?: number
} & RequestInit

export type ContentfulResult = {
  result ?: Entries,
  errors ?: any
}

const fetchContentful = async ({
    linkBy,
    select,
    limit,
    ...httpOptions
  } : ConfigFetchContentful = {}
) : Promise<ContentfulResult> => {
  const API_LINK = "https://cdn.contentful.com";
  const space = `/spaces/${String(process.env.CONTENTFUL_SPACE)}/entries`;
  
  const params = join("",
    ([
      ["access_token", String(process.env.CONTENTFUL_ACCESS_TOKEN)],
      ["content_type", "myProjects"], 
      ["select",  select ? join(",", map(field => ( "fields." + field ), select)) : null],
      ["limit", limit],
      ["fields." + linkBy?.[0] + "[in]",  linkBy?.[1]]
    ]).map(
      ([prop, value], index) => value ? (index !== 0 ? "&" : "") + (prop + "=" + value) : "", 
    )
  );
  
  const res = await fetch(`${API_LINK}${space}?${params}`, httpOptions);

  const entries = await res.json();

  return { [entries?.items ? "result" : "errors"]: entries }
}

const getImageUrlByLink = (
  id: string, 
  assets: IncludesAssets
) => {
  return find(
    asset => asset.sys.id === id, 
    assets.Asset
  )
}

export { fetchContentful, getImageUrlByLink };