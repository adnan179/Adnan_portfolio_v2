"use client";

import { NavProvider } from "@/context/NavContext";

export default function NavProviderWrapper({ children }) {
  return <NavProvider>{children}</NavProvider>;
}
