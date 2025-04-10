export const getArticlePageParams = (currentPage: number) => {
  const trim_start =
    currentPage == 1
      ? 0
      : (currentPage - 1) *
        parseInt(process.env.NEXT_PUBLIC_DEFAULT_PAGE_SIZE as string);
  const trim_end =
    currentPage == 1
      ? parseInt(process.env.NEXT_PUBLIC_DEFAULT_PAGE_SIZE as string)
      : currentPage *
        parseInt(process.env.NEXT_PUBLIC_DEFAULT_PAGE_SIZE as string);

  return {
    trim_start: trim_start,
    trim_end: trim_end,
  };
};

export const getTotalPages = (allArticles: number) => {
  return Math.ceil(
    allArticles / parseInt(process.env.NEXT_PUBLIC_DEFAULT_PAGE_SIZE as string)
  );
};

export const formatDate = (date: string, locale: string) => {
  return new Date(date).toLocaleString(locale, { dateStyle: "short" });
};

export const  calculatePercentage = (yes: number, no: number) => {
  const total = yes + no;
  if (total === 0) return 0;
  return Math.round((yes / total) * 100);
};
