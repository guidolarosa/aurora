import AppSidebar from "@/components/custom/Sidebar";
import { CardContent } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import chatUserList from "../../mocks/chat_user_list";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import peronistChat from "@/mocks/chat";
import clsx from "clsx";
import { SendHorizontal } from "lucide-react";
export const metadata: Metadata = {
  title: "Aurora | Chat",
};

const ChatPage = () => {
  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex ml-64 p-10 flex-col gap-4 h-screen">
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
                            className="rounded-full"
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
                                <span className="text-xs bg-blue-500 min-w-5 rounded-full px-2 py-0.5 text-white text-center font-semibold">
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
            <div className="col-span-8 bg-white border border-l-0 rounded-r-md flex flex-col">
              <div className="flex p-4 border-b items-center gap-2">
                <div className="w-12 aspect-square relative">
                  <Image
                    src="https://i.pravatar.cc/150"
                    alt="juan"
                    fill
                    className="rounded-full"
                  />
                </div>
                <h2>Juan Pérez</h2>
              </div>
              <div className="flex flex-grow">
                <ul className="flex flex-col p-4 gap-3">
                  {peronistChat.messages.map((message) => (
                    <li
                      key={message.id}
                      className={clsx(
                        "flex flex-col",
                        message.sender.id === "1" ? "items-end " : "items-start"
                      )}
                    >
                      <div
                        className={clsx(
                          "flex items-center gap-2 px-3 py-2 rounded-lg max-w-2/3 relative",
                          message.sender.id === "1"
                            ? "flex-row-reverse bg-blue-50 text-stone-800"
                            : "flex-row bg-blue-500 text-white"
                        )}
                      >
                        <div
                          className={clsx(
                            "w-3 h-3 absolute  bg-amber-200 rotate-45",
                            message.sender.id === "1"
                              ? "right-3 bg-blue-50 -bottom-1.5"
                              : "left-4 bg-blue-500 -top-1.5"
                          )}
                        ></div>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <div className="flex items-center gap-2 relative">
                  <SendHorizontal className="w-6 h-6 absolute right-4 text-stone-500" />
                  <Input
                    className="border-0 border-t rounded-none h-12"
                    placeholder="Escribe un mensaje..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ChatPage;
