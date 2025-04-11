import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Proposal } from "@/types/proposal";
import { calculatePercentage } from "@/utils/utils";
import { Progress } from "@/components/ui/progress";
import { PortableText } from "next-sanity";

const ProposalCard = ({ proposal }: { proposal: Proposal }) => {
  return (
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
            Activo
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
            {formatDistanceToNow(new Date(proposal.created_at), {
              addSuffix: true,
              locale: es,
            })}
          </span>
          {/* <span className="text-xs truncate">
            Termina{" "}
            {formatDistanceToNow(new Date(proposal.endsAt), {
              addSuffix: true,
              locale: es,
            })}
          </span> */}
        </CardDescription>
      </CardHeader>
      <CardContent className="min-h-unset">
        <div className="flex flex-col gap-4">
          <div className="text-sm text-stone-500 line-clamp-3 min-h-16">
            <PortableText value={JSON.parse(proposal.description)} />
          </div>
        </div>
        <div className="space-y-2 mt-4 border-t border-b -mx-6 px-6 py-4">
          <div className="flex justify-between text-sm">
            <span>Yes: {proposal.positive_votes}</span>
            <span>No: {proposal.negative_votes}</span>
          </div>
          <Progress
            value={calculatePercentage(
              proposal.positive_votes,
              proposal.negative_votes
            )}
            className="h-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>
              {calculatePercentage(
                proposal.positive_votes,
                proposal.negative_votes
              )}
              %
            </span>
            <span>
              Total votes: {proposal.positive_votes + proposal.negative_votes}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Ver Propuesta</Button>
      </CardFooter>
    </Card>
  );
};

export default ProposalCard;
