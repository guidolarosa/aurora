import { PowerIcon } from "lucide-react";

import { buttonVariants } from "../ui/button";
import { Button } from "../ui/button";
import clsx from "clsx";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const SignOutButton = () => {
  const supabase = createClient();
  return (
    <form
      action={async () => {
        "use server"
        await supabase.auth.signOut();
        redirect('/login')
      }}
    >
      <Button className={clsx(buttonVariants({ variant: "destructive" }), 'cursor-pointer')}>
        <PowerIcon className="w-6" />
        <div className="hidden md:block">Cerrar Sesión</div>
      </Button>
    </form>
  );
};

export default SignOutButton;
