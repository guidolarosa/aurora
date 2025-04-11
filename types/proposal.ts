export interface Proposal {
  id: number,
  status: string,
  category: string,
  title: string,
  created_at: string,
  description: string,
  positive_votes: number,
  negative_votes: number,
}