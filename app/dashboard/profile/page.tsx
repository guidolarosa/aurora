/* eslint-disable @typescript-eslint/no-explicit-any */
import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import SignOutButton from "@/components/custom/SignOutButton";
import ProfileForm from "@/components/custom/Forms/ProfileForm";
import { FullUser } from "@/types/user";
import Image from "next/image";
import { createClient } from '@/utils/supabase/server'

const ProfilePage = async () => {
  const supabase = await createClient();
  const { data: { user } } : any = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id) 
    .single();

  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full bg-stone-50 pl-64">
        <AppSidebar />
        <div className="flex h-screen p-10 flex-col w-full">
          {profile && (
            <div className="flex flex-col w-full bg-white mx-auto border rounded-lg max-w-xl h-fit">
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 aspect-square">
                    <Image
                      src={profile.avatar_url}
                      alt="Avatar"
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Tu Perfil</h1>
                </div>
                <SignOutButton />
              </div>
              <div className="gap-8 w-full">
                <ProfileForm userData={profile as FullUser} />
              </div>
            </div>
          )}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ProfilePage;
