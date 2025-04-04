import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import categories from "../../mocks/categories";
import Link from "next/link";
import React from "react";

const CategoryCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="flex items-center gap-1 w-full">Categorías</span>
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
                  <div className="w-8 aspect-square rounded-lg bg-blue-100 flex items-center justify-center text-blue-500">
                    {React.createElement(item.icon, {
                      className: "w-4",
                    })}
                  </div>
                  {item.name}
                </div>
                <div className="text-xs text-orange-00 bg-orange-100 rounded-full px-2 py-1">
                  {item.totalEntries}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
