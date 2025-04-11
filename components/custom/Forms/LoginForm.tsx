"use client";

import { AtSignIcon, KeyIcon, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "../../ui/input";
import Link from "next/link";
import { login } from "@/app/lib/actions";

export default function LoginForm() {

  return (
    <form
      className="h-screen flex items-center justify-center"
    >
      <div className="flex-1 rounded-lg px-6 pb-4 pt-8 max-w-md">
        <h1 className={`mb-3 text-2xl text-center`}>
          Ingresá tus credenciales
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <Input
                className="pl-10"
                id="email"
                type="email"
                name="email"
                placeholder="Ingresá tu email..."
                required
              />
              <AtSignIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Contraseña
            </label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Ingresá tu contraseña..."
                required
                minLength={6}
                className="pl-10"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-8">
          <Button formAction={login}>
            Ingresar <ArrowRight className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
          <Link className={buttonVariants({ variant: "link" })} href="/sign-up">
            {" "}
            Aún no estoy registrado
          </Link>
        </div>
      </div>
    </form>
  );
}
