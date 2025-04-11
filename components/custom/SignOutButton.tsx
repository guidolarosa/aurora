'use client'

import { PowerIcon } from "lucide-react";

import { buttonVariants } from "../ui/button";
import { Button } from "../ui/button";
import clsx from "clsx";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const SignOutButton = () => {
  const supabase = createClient();
  const logout = () => {
    supabase.auth.signOut();
    redirect("/login");
  };
  return (
    <Button
      className={clsx(
        buttonVariants({ variant: "destructive" }),
        "cursor-pointer"
      )}
      onClick={logout}
    >
      <PowerIcon className="w-6" />
      <div className="hidden md:block">Cerrar Sesión</div>
    </Button>
  );
};

export default SignOutButton;
