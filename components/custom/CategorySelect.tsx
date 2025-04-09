"use client";

import { Category } from "@/types/sanity";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const CategorySelect = ({ categories }: { categories: Category[] }) => {
  const { push } = useRouter();
  return (
    <Select
      onValueChange={(category) => {
        if (category == "todas") {
          push(`/dashboard/news`)
          return;
        };

        push(`/dashboard/news?category=${category}`);

      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Ver por categoría" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categorías</SelectLabel>
          {categories.map((category) => (
            <SelectItem
              key={category.slug.current}
              value={category.slug.current}
            >
              {category.name}
            </SelectItem>
          ))}
          <SelectItem key={"todas"} value={"todas"}>
            Todas
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default CategorySelect;
