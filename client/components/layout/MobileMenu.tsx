"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";

interface MobileMenuProps {
  onClose?: () => void;
}

export default function MobileMenu({
  onClose
}: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <nav
      className="mobile-menu"
      aria-label="Mobile navigation"
    >
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={
            pathname === item.href ? "page" : undefined
          }
          className={
            pathname === item.href ? "nav-active" : ""
          }
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}