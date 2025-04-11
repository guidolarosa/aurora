"use client";

import { ProgressProvider } from "@bprogress/next/app";
import { ReactNode } from "react";
import colors from "tailwindcss/colors"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProgressProvider
      height="3px"
      color={colors.amber[500]}
      options={{ showSpinner: true }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default Providers;
