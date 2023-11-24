"use client";

import { ReactNode } from "react";
import CartContextProvider from "./CartProvider";
import SessionContextProvider from "./SessionProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartContextProvider>
      <SessionContextProvider>{children}</SessionContextProvider>
    </CartContextProvider>
  );
}
