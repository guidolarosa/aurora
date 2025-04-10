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
import { Progress } from '@/components/ui/progress'

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
          <p className="text-sm text-stone-500 line-clamp-3 min-h-16">
            {proposal.description}
          </p>
        </div>
        <div className="space-y-2 mt-4 border-t border-b -mx-6 px-6 py-4">
          <div className="flex justify-between text-sm">
            <span>Yes: {proposal.votes.yes}</span>
            <span>No: {proposal.votes.no}</span>
          </div>
          <Progress
            value={calculatePercentage(proposal.votes.yes, proposal.votes.no)}
            className="h-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>
              {calculatePercentage(proposal.votes.yes, proposal.votes.no)}%
            </span>
            <span>Total votes: {proposal.votes.yes + proposal.votes.no}</span>
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
