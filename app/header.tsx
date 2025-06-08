"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";
import Link from "next/link";

export function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowSearch(false);
    }
  };

  return (
    <header className="flex mb-5 md:mb-10 items-center">
      <Logo />

      <nav className="font-mono text-xs grow justify-end items-center flex gap-1 md:gap-3">
        <ThemeToggle />

        <Link
          href="/about"
          className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
        >
          About
        </Link>
        
        {/* Search toggle button */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap -mr-2"
          aria-label="Search"
        >
          <SearchIcon />
        </button>
        
        {/* Search input field */}
        {showSearch && (
          <form 
            onSubmit={handleSearch}
            className="absolute top-16 right-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md shadow-lg z-10"
          >
            <div className="flex items-center px-2 py-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts..."
                autoFocus
                className="bg-transparent outline-none px-2 py-1 text-sm w-40 md:w-56"
              />
              <button 
                type="submit"
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
        )}
      </nav>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
