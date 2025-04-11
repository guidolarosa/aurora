export interface PageProps {
  params: {
    [slug: string]: string | string[] | undefined
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}