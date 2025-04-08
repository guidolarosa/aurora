import { PowerIcon } from "lucide-react";

import { signOut } from "@/auth";

import { buttonVariants } from "../ui/button";
import { Button } from "../ui/button";
import clsx from "clsx";

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/" });
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
