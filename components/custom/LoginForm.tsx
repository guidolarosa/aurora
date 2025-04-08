'use client';
 
import {
  AtSignIcon,
  KeyIcon,
  FileWarning,
  ArrowRight
} from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
import { Input } from '../ui/input';
import Link from 'next/link';
 
export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
 
  return (
    <form action={formAction} className="h-screen flex items-center justify-center">
      <div className="flex-1 rounded-lg px-6 pb-4 pt-8 max-w-md">
        <h1 className={`mb-3 text-2xl`}>
          Por favor ingresá tus credenciales
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
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Ingresá tu contraseña..."
                required
                minLength={6}
                className='pl-10'
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <div className="flex justify-between items-center w-full mt-8">
          <Button aria-disabled={isPending}>
            Log in <ArrowRight className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
          <Link className={buttonVariants({variant: "link"})} href="/sign-up"> Aún no estoy registrado</Link>
         
        </div>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <FileWarning className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}