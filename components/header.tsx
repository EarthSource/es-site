"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/logo-white.svg" alt="Logo" width={24} height={24} />
        <span className="font-bold text-lg">EarthSource.ai</span>
      </div>
      <nav className="hidden sm:flex items-center gap-6">
        <Link href="/book-meeting" className="hover:text-gray-300 transition-colors">
          Book Meeting
        </Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">
          About
        </Link>
      </nav>
    </header>
  );
}