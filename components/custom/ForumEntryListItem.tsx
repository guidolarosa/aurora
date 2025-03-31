
import { Eye, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import CircularFlag from "./CircularFlag";
const ForumEntryListItem = ({ item }: { item: any }) => {
  return (
    <Link href={`/forum/${item.id}`} className="block w-full">
      <Card key={item.id}>
        <CardHeader>
          <div className="flex gap-3 items-center">
          <CircularFlag />
            <div className="flex gap-0 flex-col justify-start">
              <h2>{item.title}</h2>
              <div className="flex gap-1 items-center">
                <span className="font-semibold text-stone-600 text-sm">
                  {item.author}
                </span>
                <span className="text-sm text-stone-500">•</span>
                <span className="text-xs text-stone-500">
                  {formatDistanceToNow(new Date(item.lastActivity), {
                    addSuffix: true,
                    locale: es
                  })}
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between w-full flex-col">
            <div className="flex items-left flex-col ">
              <span className="text-sm text-stone-500">{item.excerpt}</span>
            </div>
          </div>
          <div className="flex items-center gap-2"></div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2 justify-between w-full">
            <span className="text-sm text-stone-500 flex items-center gap-1">
              {item.messages} <MessageSquare className="w-4" />
            </span>
            <span className="text-sm text-stone-500 flex items-center gap-1">
              {item.views} <Eye className="w-4" />
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ForumEntryListItem;
