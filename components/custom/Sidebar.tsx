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
        <div className="flex items-center justify-center gap-2 pt-4 flex-col text-center">
          <div className="flex items-center gap-2">
            <CircularFlag />
            <h1 className={clsx(archivoBlack.className, "text-xl text-white text-center")}>AURORA</h1>
          </div>
          <span className="text-xs text-white/70">Principios y Valores</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {items.map((item) => (
            <SidebarGroupContent key={item.label}>
              <SidebarGroupLabel>{item.label}</SidebarGroupLabel>
              <SidebarMenu>
              {item.links.map((link) => (
                <SidebarMenuItem key={link.title} className={clsx(pathname === link.url && "bg-blue-600 font-semibold not:hover:bg-blue-900 rounded-md transition-all")}>
                  <SidebarMenuButton asChild className="transition-all">
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
        <div className="flex items-center gap-3 justify-center text-white text-xl py-2">
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
