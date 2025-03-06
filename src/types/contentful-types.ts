export type RichText = {
  nodeType: string;
  data: Record<string, any>;
  content: RichTextContent[];
};

type RichTextContent = {
  nodeType: string;
  value?: string;
  marks?: RichTextMark[];
  data: Record<string, any>;
  content?: RichTextContent[];
};

type RichTextMark = {
  type: string;
};

type Details = {
  size:  number;
  image: Image;
}

type Image = {
  width:  number;
  height: number;
}

type AssetFile = {
  url:         string;
  details:     Details;
  fileName:    string;
  contentType: string;
}

type AssetFields = {
  title:       string;
  description: string;
  file:        AssetFile;
}

export type Asset = {
  metadata: Metadata;
  sys:      AssetSys;
  fields:   AssetFields;
}

export type IncludesAssets = {
  Asset: Asset[];
}

export type Entries = {
  sys:      MainSys;
  total:    number;
  skip:     number;
  limit:    number;
  items:   EntriesResult[];
  includes: IncludesAssets;
}

type Metadata = {
  tags:     any[];
  concepts: any[];
}

type AssetSys = {
  space:            AssetsInfo;
  id:               string;
  type:             FluffyType;
  createdAt:        Date;
  updatedAt:        Date;
  environment:      AssetsInfo;
  publishedVersion: number;
  revision:         number;
  locale:           string;
  contentType?:     AssetsInfo;
}

type AssetsInfo = {
  sys: {
  id:       string;
  type:     PurpleType;
  linkType: LinkType;
}}

enum LinkType {
  Asset = "Asset",
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

enum PurpleType {
  Link = "Link",
}

enum FluffyType {
  Asset = "Asset",
  Entry = "Entry",
}

export type EntriesResult = {
  metadata: Metadata;
  sys:      AssetSys;
  fields:   ItemFields;
}

export type ItemFields = {
  title:       string;
  projectName: string;
  banner:      AssetsInfo;
  cover:       AssetsInfo;
  description: string;
  content: RichText
}

type MainSys = {
  type: string;
}
