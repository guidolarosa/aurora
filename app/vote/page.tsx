import AppSidebar from "@/components/custom/Sidebar";
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import proposalData from "@/mocks/proposals";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const VotePage = () => {
  const calculatePercentage = (yes: number, no: number) => {
    const total = yes + no;
    if (total === 0) return 0;
    return Math.round((yes / total) * 100);
  };

  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex  ml-64 p-10 flex-col gap-4 h-screen">
        <h1 className="text-2xl font-bold">Votaciones</h1>
          <div className="grid grid-cols-4 w-full h-full gap-4">
            {proposalData.map((proposal) => (
              <Card className="h-fit" key={proposal.id}>
                <CardHeader>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <div
                      className={clsx(
                        "rounded-full px-2 py-0.5 flex items-center capitalize",
                        proposal.status === "active"
                          ? "bg-blue-500 text-blue-50"
                          : "bg-stone-200"
                      )}
                    >
                      {proposal.status}
                    </div>
                    <div
                      className={clsx(
                        "rounded-full px-2 py-0.5 flex items-center bg-white border"
                      )}
                    >
                      {proposal.category}
                    </div>
                  </div>
                  <CardTitle className="truncate">{proposal.title}</CardTitle>
                  <CardDescription className="flex justify-between truncate">
                    <span className="text-xs truncate">
                      Creada{" "}
                      {formatDistanceToNow(new Date(proposal.createdAt), {
                        addSuffix: true,
                        locale: es,
                      })}
                    </span>
                    <span className="text-xs truncate">
                      Termina{" "}
                      {formatDistanceToNow(new Date(proposal.endsAt), {
                        addSuffix: true,
                        locale: es,
                      })}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="min-h-unset">
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-stone-500 line-clamp-3">
                      {proposal.description}
                    </p>
                  </div>
                  <div className="space-y-2 mt-4 border-t border-b -mx-6 px-6 py-4">
                    <div className="flex justify-between text-sm">
                      <span>Yes: {proposal.votes.yes}</span>
                      <span>No: {proposal.votes.no}</span>
                    </div>
                    <Progress
                      value={calculatePercentage(
                        proposal.votes.yes,
                        proposal.votes.no
                      )}
                      className="h-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        {calculatePercentage(
                          proposal.votes.yes,
                          proposal.votes.no
                        )}
                        %
                      </span>
                      <span>
                        Total votes: {proposal.votes.yes + proposal.votes.no}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver Propuesta</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default VotePage;
