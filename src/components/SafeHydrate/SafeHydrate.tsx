import type { ReactNode } from "react";

const SafeHydrate = ({ children }: { children: ReactNode }) => {
  return (
    // <div suppressHydrationWarning>
    <>
      {typeof document === "undefined" || typeof window === "undefined"
        ? null
        : children}
    </>
    // </div>
  );
};

export { SafeHydrate };
