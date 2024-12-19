"use client";

import { Search, Bell, Upload, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">ViewTube</span>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-center px-4">
          <form className="flex w-full max-w-[600px] items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="search"
              placeholder="Search videos..."
              className="flex-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Upload className="h-5 w-5" />
          </Button>
          <Button variant="default" size="sm" className="hidden md:flex">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
}