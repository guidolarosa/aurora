import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import SignOutButton from "@/components/custom/SignOutButton";
import ProfileForm from "@/components/custom/ProfileForm";

const ProfilePage = () => {
  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] flex w-full">
        <AppSidebar />
        <div className="flex h-screen p-10 flex-col w-full bg-white">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold mb-6 w">Tu Perfil</h1>
            <SignOutButton />
          </div>
          <div className="gap-8 w-full ">
            <ProfileForm />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ProfilePage;
