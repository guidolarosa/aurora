import clsx from "clsx";
import CircularFlag from "@/components/custom/CircularFlag";
import { Archivo_Black } from "next/font/google";
import { Suspense } from "react";
import LoginForm from "@/components/custom/Forms/LoginForm";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function LoginPage() {
  return (
    <main className="h-screen w-full">
      <div className="grid grid-cols-2 h-screen w-full">
        <div className="bg-blue-500 h-screen w-full">
          <div className="flex items-center gap-2 justify-center h-screen">
            <CircularFlag className="scale-200 -translate-x-6" />
            <h1
              className={clsx(
                archivoBlack.className,
                "text-6xl text-white text-center"
              )}
            >
              AURORA
            </h1>
          </div>
        </div>
        <div className="bg-secondary-500 h-screen w-full">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
