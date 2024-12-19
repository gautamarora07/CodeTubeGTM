"use client";

import { Search, Bell, Upload, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import ModeToggle from "./mode-toggle";
import { videos } from "../constants/videos";
import Link from "next/link";

export default function Header() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(videos);

  const handleSearch = (query: string) => {
    setSearch(query);
    if (query.trim() === "") {
      setSearchResults(videos); // Reset to all videos when search is cleared
    } else {
      const results = videos.filter((video) =>
        video.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <header className="sticky top-0 z-50 py-3 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 ">
      <div className="container flex h-10 items-center justify-between px-2 lg:px-4">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          {/* Sidebar Menu for Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-base md:text-xl">CodeTube</span>
          </Link>
        </div>

        {/* Center Section: Search Bar */}
        <div className="hidden md:flex flex-1 items-center justify-center px-4">
          <form
            className="flex w-full max-w-[600px] items-center space-x-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="search"
              placeholder="Search videos..."
              className="flex-1 !outline-none"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Button type="submit" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1 md:gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4 md:h-6 md:w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Upload className="h-4 w-4 md:h-6 md:w-6" />
          </Button>
          <Button
            variant="default"
            size="sm"
            className="hidden md:flex text-sm px-4 py-1"
          >
            Sign in
          </Button>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div className="flex md:hidden px-2 py-3">
        <form
          className="flex w-full items-center space-x-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="search"
            placeholder="Search videos..."
            className="flex-1 !outline-none"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Button type="submit" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </form>
      </div>

      {/* Search Results */}
      {search.trim() && (
        <div className="container mt-4 px-4">
          <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.length > 0 ? (
              searchResults.map((video) => (
                <Link href={`/watch/${video.id}`} key={video.id}>
                  <div
                    className="flex flex-col items-start  rounded-lg bg-white/10 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                    <h3 className="text-sm font-semibold px-2">{video.title}</h3>
                    <div className="flex items-center mt-2 px-2 pb-1 gap-2 marker:space-x-2">
                      <img
                        src={video.channel.avatar}
                        alt={video.channel.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-xs font-medium">
                          {video.channel.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {video.channel.subscribers} subscribers
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No results found for "{search}"</p>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
