"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navList = [
  { title: "Dashboard", href: "/" },
  { title: "Admin", href: "/admin" },
];

function Header() {
  const pathname = usePathname();
  return (
    <header className="lg:my-10 lg:mx-32 bg-black/50 p-5 rounded-full flex items-center justify-between gap-5">
      <Link href="/">
        <Image
          src="/brand-logo.png"
          alt="brand logo"
          width={54}
          height={54}
          className="transition-all duration-500 hover:scale-105 hover:grayscale"
        />
      </Link>
      <nav>
        <ul className="w-full flex items-center justify-end gap-8">
          {navList.map((navItem) => (
            <li key={navItem.title}>
              <Link
                href={navItem.href}
                className={`text-xl font-lg tracking-wide uppercase transition-colors duration-300 p-3 rounded-3xl ${
                  pathname === navItem.href
                    ? "text-white/90 bg-primary drop-shadow-custom"
                    : "text-black/90 bg-white/50 hover:drop-shadow-custom hover:text-white/90 hover:bg-primary"
                }`}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
