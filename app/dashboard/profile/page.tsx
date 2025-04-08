import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import SignOutButton from "@/components/custom/SignOutButton";
import ProfileForm from "@/components/custom/ProfileForm";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { FullUser } from "@/types/user";

const ProfilePage = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <SessionProvider>
      <SidebarProvider>
        <div className="font-[family-name:var(--font-geist-sans)] flex w-full">
          <AppSidebar />
          <div className="flex h-screen p-10 flex-col w-full bg-white">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Tu Perfil</h1>
              <SignOutButton />
            </div>
            <div className="gap-8 w-full ">
              <ProfileForm userData={session.user as FullUser} />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </SessionProvider>
  );
};

export default ProfilePage;
