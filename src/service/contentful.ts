import { Entries, IncludesAssets, ItemFields } from "@/types/contentful-types";
import { find, join, map } from "ramda";

type ConfigFetchContentful = {
  select ?: (keyof ItemFields)[],
  limit ?: number
} & RequestInit

export type ContentfulResult = {
  result ?: Entries,
  errors ?: any
}

const fetchContentful = async ({
    select,
    limit,
    ...httpOptions
  } : ConfigFetchContentful = {}
) : Promise<ContentfulResult> => {
  const API_LINK = "https://cdn.contentful.com";
  const space = `/spaces/${String(process.env.CONTENTFUL_SPACE)}/entries`;
  const params = join("&", [
    `access_token=${String(process.env.CONTENTFUL_ACCESS_TOKEN)}`,
    select ? join(",", map(field => ( "fields." + field ), select)) : "",
    limit ? ("limit=" + limit) : ""
  ]);
  
  const res = await fetch(`${API_LINK}${space}?${params}`, httpOptions);

  const entries = await res.json();

  return { [entries?.items ? "result" : "errors"]: entries }
}

const getImageUrlByLink = (id: string, assets: IncludesAssets) => {
  return find(asset => asset.sys.id === id, assets.Asset)
}

export { fetchContentful, getImageUrlByLink };