"use client";

import items from "@/mocks/sidebar_links";
import {
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  Sidebar,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenu,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { usePathname } from "next/navigation";
import { Archivo_Black } from "next/font/google";
import clsx from "clsx";
import CircularFlag from "@/components/custom/CircularFlag";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-center gap-2 pt-8">
          <CircularFlag />
          <h1 className={clsx(archivoBlack.className, "text-xl text-stone-700 text-center")}>AURORA</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {items.map((item) => (
            <SidebarGroupContent key={item.label}>
              <SidebarGroupLabel>{item.label}</SidebarGroupLabel>
              <SidebarMenu>
              {item.links.map((link) => (
                <SidebarMenuItem key={link.title} className={clsx(pathname === link.url && "bg-stone-200 font-semibold not:hover:bg-stone-500 rounded-md")}>
                  <SidebarMenuButton asChild>
                    <a href={link.url}>
                      <link.icon />
                      <span>{link.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              </SidebarMenu>
            </SidebarGroupContent>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3 justify-center text-stone-500 text-xl py-2">
          <IoLogoFacebook />
          <IoLogoInstagram />
          <FaXTwitter />
          <IoLogoWhatsapp />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
