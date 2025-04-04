"use client";

import { Clock, Star } from "lucide-react";
import ForumEntryListItem from "@/components/custom/ForumEntryListItem";
import { useState } from "react";
import clsx from "clsx";
import forumItems from "../../mocks/entries_featured";
import recentForumItems from "../../mocks/entries_latest";

const EntryList = () => {
  const [currentEntries, setCurrentEntries] = useState("featured");

  return (
    <>
      <ul className="flex items-center gap-4 w-full">
        <li>
          <button
            onClick={() => setCurrentEntries("featured")}
            className="flex gap-1 cursor-pointer"
          >
            <span
              className={clsx(
                "flex items-center gap-1 w-full text-sm text-stone-500",
                currentEntries === "featured" && "font-bold text-stone-800"
              )}
            >
              <Star className="w-3" />
              Destacadas
            </span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentEntries("recent")}
            className="flex gap-1 cursor-pointer"
          >
            <span
              className={clsx(
                "flex items-center gap-1 w-full text-sm text-stone-500",
                currentEntries === "recent" && "font-bold text-stone-800"
              )}
            >
              <Clock className="w-3" />
              Recientes
            </span>
          </button>
        </li>
      </ul>
      <div className="w-full">
        {currentEntries === "featured" && (
          <ul className="flex flex-col gap-3">
            {forumItems.map((item) => (
              <ForumEntryListItem key={item.id} item={item} />
            ))}
          </ul>
        )}
        {currentEntries === "recent" && (
          <ul className="flex flex-col gap-3">
            {recentForumItems.map((item) => (
              <ForumEntryListItem key={item.id} item={item} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default EntryList;
