"use client";

import PasswordGate from "@/components/PasswordGate";

export default function StephenDetailLayout({ children }: { children: React.ReactNode }) {
  return <PasswordGate>{children}</PasswordGate>;
}
