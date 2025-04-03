"use client";

import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import newsItems from "../../mocks/news";

export default function NewsPage() {
  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex ml-64 p-10 flex-col gap-4">
          <h1 className="text-2xl font-bold">Noticias</h1>
          
          <div className="grid grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <Link href={`/news/${news.id}`} key={news.id}>
                <Card className="hover:shadow-lg transition-shadow py-0">
                  <CardContent className="p-4">
                    <div className="relative w-full aspect-video mb-4">
                      <Image
                        src={'https://comunidad.pami.org.ar/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-07-at-2.39.15-PM-1.jpeg'}
                        alt={news.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h2 className="font-semibold text-lg mb-2">{news.title}</h2>
                    <p className="text-sm text-stone-600 line-clamp-2">
                      {news.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="relative w-8 h-8">
                        <Image
                          src={'https://i.pravatar.cc/150?img=1'}
                          alt={news.author.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">{news.author.name}</p>
                        <p className="text-stone-500">{news.author.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
