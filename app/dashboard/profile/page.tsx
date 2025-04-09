import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import SignOutButton from "@/components/custom/SignOutButton";
import ProfileForm from "@/components/custom/ProfileForm";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { FullUser } from "@/types/user";
import Image from "next/image";

const ProfilePage = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <SessionProvider>
      <SidebarProvider>
        <div className="font-[family-name:var(--font-geist-sans)] flex w-full bg-stone-50">
          <AppSidebar />
          <div className="flex flex-col w-full bg-white mx-auto border mt-12 rounded-lg max-w-3xl h-fit">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <div className="relative w-12 aspect-square">
                  <Image src={session.user.avatar_url} alt="Avatar" fill className="rounded-full"/>
                </div>
                <h1 className="text-xl font-bold">Tu Perfil</h1>
              </div>
              <SignOutButton />
            </div>
            <div className="gap-8 w-full">
              <ProfileForm userData={session.user as FullUser} />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </SessionProvider>
  );
};

export default ProfilePage;
