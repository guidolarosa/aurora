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
import efemeridesPeronistas from "@/mocks/ephemeris";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

const AppSidebar = () => {
  const pathname = usePathname();

  const getTodayEphemeris = () => {
    const today = new Date();
    const todayDay = String(today.getDay() + 1);
    const todayMonth = String(today.getMonth() + 1);

    const filteredEphemeris = efemeridesPeronistas.filter((ephemeris) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, month, day] = ephemeris.fecha.split('-');
      if (todayDay === day && todayMonth === month) {
        return ephemeris
      }
    });

    return filteredEphemeris;
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-center gap-2 pt-4 flex-col text-center">
          <div className="flex items-center gap-2">
            <CircularFlag />
            <h1 className={clsx(archivoBlack.className, "text-xl text-white text-center")}>AURORA</h1>
          </div>
          <span className="text-xs text-white/70">Movimiento Nacional Justicialista</span>
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
                      {link.title === 'Chat' && (
                        <span className="ml-auto px-1 py-0.5 min-w-8 text-center bg-amber-400 rounded-full text-amber-900 font-semibold text-xs">1</span>
                      )}
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
        <ul className="flex flex-col gap-2">
          {getTodayEphemeris().map((ephemeris) => (
            <li key={ephemeris.titulo} className="bg-blue-50 rounded-lg py-2 px-3 text-blue-950 shadow pb-3">
              <span className="text-stone-500 text-xs leading-5 block">{ephemeris.fecha}</span>
              <span className="text-stone-950 text-sm mb-1 leading-5 inline-block font-medium">{ephemeris.titulo}</span>
              <span className="text-xs block text-stone-600">{ephemeris.descripcion}</span>
            </li>
          ))}
        </ul>
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
