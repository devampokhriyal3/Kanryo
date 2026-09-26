"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { ContactModal } from "@/components/ContactModal";

type Ctx = {
  open: boolean;
  talk: () => void;
  close: () => void;
};

const ContactContext = createContext<Ctx | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({
      open,
      talk: () => setOpen(true),
      close: () => setOpen(false),
    }),
    [open],
  );

  return (
    <ContactContext.Provider value={value}>
      {children}
      <ContactModal />
    </ContactContext.Provider>
  );
}

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact must be used within ContactProvider");
  return ctx;
}
