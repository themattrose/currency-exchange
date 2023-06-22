import { type ReactNode, useEffect, useState } from "react";
import { Header } from "@/components/Header";

export function Layout({ children }: { children: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
