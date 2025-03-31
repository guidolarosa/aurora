import AppSidebar from "@/components/custom/Sidebar";
import { CardContent } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import chatUserList from "../../mocks/chat_user_list";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurora | Chat",
};

const ChatPage = () => {
  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex bg-stone-100 ml-64 p-10 flex-col gap-4 h-screen">
          <div className="grid grid-cols-12 w-full h-full">
            <div className="col-span-4 flex flex-col gap-4 h-full bg-stone-100">
              <div className="h-full border rounded-l-md overflow-hidden">
                <ul className="flex flex-col bg-white">
                  {chatUserList.map((user) => (
                    <li
                      key={user.id}
                      className="hover:bg-stone-50 flex justify-between w-full items-center p-4 transition-all duration-150 cursor-pointer border-b"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex gap-3 font-semibold text-sm min-w-12 h-12 relative">
                          <Image
                            src={user.image}
                            alt={user.name}
                            fill
                            className="rounded-xl"
                          />
                        </div>
                        <div className="flex justify-between w-full">
                          <div className="flex flex-col text-left">
                            <strong className="text-sm">{user.name}</strong>
                            <span className="text-xs text-stone-500  line-clamp-1">
                              {user.lastMessage}
                            </span>
                          </div>
                          <div className="flex flex-col text-right max-w-24 text-ellipsis overflow-hidden gap-1 ">
                            <span className="text-xs text-stone-500 truncate ">
                              {formatDistanceToNow(
                                new Date(user.lastMessageDate),
                                {
                                  addSuffix: true,
                                  locale: es,
                                }
                              )}
                            </span>
                            {user.unreadMessages > 0 && (
                              <div className="flex items-center gap-2 ml-auto">
                                <span className="text-xs bg-blue-500 min-w-8 rounded-lg px-2 py-0.5 text-white text-center font-semibold">
                                  {user.unreadMessages}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <CardContent></CardContent>
              </div>
            </div>
            <div className="col-span-8 bg-white border border-l-0 rounded-r-md"></div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ChatPage;
