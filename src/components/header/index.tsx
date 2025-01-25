"use client";

import { useState } from "react";
import { DesktopMenu, MobileMenu } from "./components";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex fixed top-0 w-full z-50 gap-4 sm:top-3 sm:px-2 sm:pl-8">
        <DesktopMenu onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onOpenMobileMenu={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
