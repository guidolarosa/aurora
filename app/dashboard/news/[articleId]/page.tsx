import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ARTICLE } from "@/sanity/lib/queries";
import { PageProps } from "@/types/page";
import { Article } from "@/types/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

const ArticlePage = async (pageProps : PageProps) => {
  const cParams = await pageProps.params;
  console.log(cParams)
  const article = await sanityFetch<Article>({
    query: ARTICLE,
    params: {
      slug: cParams.articleId
    }
  });

  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex ml-64 p-10 flex-col gap-4">
          {article && (
            <div className="max-w-3xl mx-auto flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <div className="aspect-video relative rounded-lg overflow-hidden w-full">
                  <Image
                    fill
                    src={article.mainImage}
                    alt=""
                    />
                </div>
                <h1>{article.title}</h1>
              </div>
              <div>
                <PortableText value={article.content} />
              </div>
            </div>
          )}
        </div>
      </div>
    </SidebarProvider>
  )
};

export default ArticlePage;