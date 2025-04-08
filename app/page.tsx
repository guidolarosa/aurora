import CircularFlag from "@/components/custom/CircularFlag";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LandingPage = async () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col gap-8 bg-stone-100">
      <div className="flex items-center gap-2">
        <CircularFlag />
        <h1>AURORA</h1>
      </div>
      <Link
        href="/dashboard"
        className={buttonVariants({ variant: "outline" })}
      >
        Ingresar
        <ArrowRight />
      </Link>
    </div>
  );
};

export default LandingPage;
