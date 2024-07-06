"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

function CryptoListItem({ item }) {
  const { slug } = useParams();

  return (
    <li className="flex flex-col items-center justify-between">
      <Link
        className={`h-full uppercase tracking-wider ${
          slug === item.href
            ? "text-primary hover:text-white transition-colors"
            : "text-white hover:text-primary transition-colors"
        }`}
        href={item.href}
      >
        {item.title}
      </Link>
    </li>
  );
}

export default CryptoListItem;
