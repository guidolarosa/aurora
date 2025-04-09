import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ARTICLES, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { Article, Category } from "@/types/sanity";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CategorySelect from "@/components/custom/CategorySelect";
import ArticleThumbnail from "@/components/custom/ArticleThumbnail";

export const metadata: Metadata = {
  title: "Aurora | Noticias",
  description: "Noticias de la comunidad",
};

export default async function NewsPage(props) {

  const categories = await sanityFetch<Category[]>({
    query: CATEGORIES_QUERY,
  });

  const searchParams = await props.searchParams;
  console.log(searchParams);

  const articles = await sanityFetch<Article[]>({
    query: ARTICLES,
    params: {
      trim_start: 0,
      trim_end: 6,
      editorial: null,
      author: null,
      dateFrom: null,
      dateTo: null,
      searchParam: null,
      category: await searchParams.category || null
    },
  });

  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex ml-64 p-10 flex-col gap-4">
          <div className="grid grid-cols-4 w-full gap-8">
            <div className="col-span-4 bg-white rounded-lg flex">
              <h1>Últimas noticias</h1>
              <div className="gap-4 flex ml-auto">
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Buscar artículos..."
                    required
                    minLength={6}
                    className="pl-10"
                  />
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                <CategorySelect categories={categories} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 col-span-4">
              <div className="col-span-2">
                <ArticleThumbnail article={articles[0]} />
              </div>
              <div className="col-span-1 flex flex-col gap-4">
                {articles.slice(1,4).map((article) => (
                  <ArticleThumbnail article={article} key={article._id}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
