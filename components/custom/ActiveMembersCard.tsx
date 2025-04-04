import activeMembers from "@/mocks/active_members";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

const ActiveMembersCard = () => {
  return (
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
            <li key={item.id} className="relative">
              <div className="absolute -top-0.5 -right-0.5 w-2 aspect-square bg-green-500 rounded-lg z-10"></div>
              <Link href={`/forum/category/${item.id}`}>
                <div className="flex items-center gap-3">
                  <div className="w-8 aspect-square rounded-lg bg-stone-200 relative overflow-hidden">
                    <Image
                      src={`https://i.pravatar.cc/300?img=${item.id}`}
                      alt={item.name}
                      fill
                    />
                  </div>
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
  );
};

export default ActiveMembersCard;
