export interface ApiStructure {
  articles: Article[]
  status: string
  totalResults: Number
}

export interface Article {
  author: string
  content: string
  description: string
  publishedAt: string
  source: { id: string; name: string }
  title: string
  url: string
  urlToImage: string
}
