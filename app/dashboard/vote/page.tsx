import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";
import ProposalCard from "@/components/custom/ProposalCard";
import { Plus } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Aurora | Votaciones",
  description: "Votaciones de la comunidad",
};

const VotePage = async () => {
  const supabase = await createClient()
  const { data: votes } = await supabase.from("votes").select("*");

  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex  ml-64 p-10 flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Votaciones</h1>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/dashboard/vote/create-vote"
            >
              <Plus />
              Crear Votación
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-full gap-4 pb-6">
            {votes?.map((vote) => (
              <ProposalCard proposal={vote} key={vote.id} />
            ))}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default VotePage;
