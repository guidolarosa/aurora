"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Star } from "lucide-react";
import Link from "next/link";
import ForumEntryListItem from "@/components/custom/ForumEntryListItem";
import { useState } from "react";
import clsx from "clsx";
import categories from "../../mocks/categories";
import activeMembers from "../../mocks/active_members";
import forumItems from "../../mocks/entries_featured";
import recentForumItems from "../../mocks/entries_latest";
import React from "react";

export default function Home() {
  const [currentEntries, setCurrentEntries] = useState("featured");
  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex ml-64 p-10 flex-col gap-4">
          <div className="grid grid-cols-4 gap-8 w-full">
            <div className="col-span-1 sticky top-0 flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="flex items-center gap-1 w-full">
                      Categorías
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-4">
                    {categories.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`/forum/category/${item.id}`}
                          className="flex justify-between w-full items-center"
                        >
                          <div className="flex items-center gap-3 font-semibold text-sm">
                            <div className="w-8 aspect-square rounded-lg bg-stone-200 flex items-center justify-center">
                              {React.createElement(item.icon, {
                                className: "w-4",
                              })}
                            </div>
                            {item.name}
                          </div>
                          <div className="text-xs text-stone-500 bg-stone-100 rounded-full px-2 py-1">
                            {item.totalEntries}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="flex items-center gap-1 w-full">
                      Miembros Activos
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex w-full">
                  <ul className="flex justify-between w-full">
                    {activeMembers.map((item) => (
                      <li key={item.id}>
                        <Link href={`/forum/category/${item.id}`}>
                          <div className="flex items-center gap-3">
                            <div className="w-8 aspect-square rounded-lg bg-stone-200"></div>
                          </div>
                        </Link>
                      </li>
                    ))}
                    <li key={10}>
                      <Link href={`/forum/active-users/`}>
                        <div className="flex items-center gap-3">
                          <div className="w-8 aspect-square rounded-lg bg-stone-200 text-xs justify-center items-center flex">
                            10+
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-3 flex flex-col gap-4 max-h-[calc(100vh-2.5rem)] overflow-y-auto pb-8">
              <h1 className="text-2xl font-bold">Entradas</h1>
              <ul className="flex items-center gap-4 w-full">
                <li>
                  <button
                    onClick={() => setCurrentEntries("featured")}
                    className="flex gap-1 cursor-pointer"
                  >
                    <span
                      className={clsx(
                        "flex items-center gap-1 w-full text-sm text-stone-500",
                        currentEntries === "featured" &&
                          "font-bold text-stone-800"
                      )}
                    >
                      <Star className="w-3" />
                      Destacadas
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentEntries("recent")}
                    className="flex gap-1 cursor-pointer"
                  >
                    <span
                      className={clsx(
                        "flex items-center gap-1 w-full text-sm text-stone-500",
                        currentEntries === "recent" &&
                          "font-bold text-stone-800"
                      )}
                    >
                      <Clock className="w-3" />
                      Recientes
                    </span>
                  </button>
                </li>
              </ul>
              <div className="w-full">
                {currentEntries === "featured" && (
                  <ul className="flex flex-col gap-3">
                    {forumItems.map((item) => (
                      <ForumEntryListItem key={item.id} item={item} />
                    ))}
                  </ul>
                )}
                {currentEntries === "recent" && (
                  <ul className="flex flex-col gap-3">
                    {recentForumItems.map((item) => (
                      <ForumEntryListItem key={item.id} item={item} />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
