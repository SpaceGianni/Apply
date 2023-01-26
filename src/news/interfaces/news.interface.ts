export interface DirtyNews {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: Exhaustive;
  query: Query;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
  serverTimeMS: number;
}

export interface Exhaustive {
  nbHits: boolean;
  typo: boolean;
}

export interface Hit {
  created_at: string;
  title: null | string;
  url: null | string;
  author: string;
  points: number | null;
  story_text: null | string;
  comment_text: null | string;
  num_comments: number | null;
  story_id: number | null;
  story_title: null | string;
  story_url: null | string;
  parent_id: number | null;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface HighlightResult {
  title?: Author;
  url?: Author;
  author: Author;
  comment_text?: Author;
  story_title?: Author;
  story_url?: Author;
  story_text?: Author;
}

export interface Author {
  value: string;
  matchLevel: MatchLevel;
  matchedWords: Query[];
  fullyHighlighted?: boolean;
}

export enum MatchLevel {
  Full = 'full',
  None = 'none',
}

export enum Query {
  Nodejs = 'nodejs',
}

export interface ProcessingTimingsMS {
  afterFetch: AfterFetch;
  fetch: Fetch;
  request: Request;
  total: number;
}

export interface AfterFetch {
  format: Format;
  total: number;
}

export interface Format {
  total: number;
}

export interface Fetch {
  scanning: number;
  total: number;
}

export interface Request {
  roundTrip: number;
}
