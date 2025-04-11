import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Aurora | Compañeros",
  description: "Votaciones de la comunidad",
};

const CompanionsPage = async () => {
  const supabase = await createClient();
  const { data: profiles } = await supabase.from("profiles").select("*");

  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex  ml-64 p-10 flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Compañeros</h1>
          </div>
          <div className="">
            {profiles?.map((profile) => (
              <div
                key={profile.id}
                className="p-4 border flex justify-between items-center first:rounded-t-lg last:rounded-b-lg border-t-0 first:border-t"
              >
                <div className="flex gap-4 ">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <Image
                      fill
                      src={profile.avatar_url}
                      alt={profile.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <strong>
                      {profile.name} {profile.lastname}
                    </strong>
                    <span className="text-sm text-stone-600">
                      {profile.city}
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    className={buttonVariants({ variant: "outline" })}
                    href={`/dashboard/chat?user=${profile.id}`}
                  >
                    <MessageCircle />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CompanionsPage;
