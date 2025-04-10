import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import proposalData from "@/mocks/proposals";
import { Metadata } from "next";
import ProposalCard from "@/components/custom/ProposalCard";
import { Plus } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Aurora | Votaciones",
  description: "Votaciones de la comunidad",
};

const VotePage = () => {
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full h-full gap-4 pb-6">
            {proposalData.map((proposal) => (
              <ProposalCard proposal={proposal} key={proposal.id} />
            ))}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default VotePage;
