export interface Proposal {
  id: number,
  status: string,
  category: string,
  title: string,
  createdAt: string,
  endsAt: string,
  description: string,
  votes: {
    yes: number,
    no: number,
  }
}