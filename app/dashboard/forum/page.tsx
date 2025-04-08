import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/Sidebar";
import React from "react";
import CategoryCard from "@/components/custom/CategoryCard";
import ActiveMembersCard from "@/components/custom/ActiveMembersCard";
import EntryList from "@/components/custom/EntryList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurora | Foro",
  description: "Foro de la comunidad",
};

export default function Home() {
  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex ml-64 p-10 flex-col gap-4">
          <div className="grid grid-cols-4 gap-8 w-full">
            <div className="col-span-1 sticky top-0 flex flex-col gap-4">
              <CategoryCard />
              <ActiveMembersCard />
            </div>
            <div className="col-span-3 flex flex-col gap-4 max-h-[calc(100vh-2.5rem)] overflow-y-auto pb-8">
              <h1 className="text-2xl font-bold">Entradas</h1>
              <EntryList />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
