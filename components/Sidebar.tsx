"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Compass, Library, History, PlaySquare, Clock, ThumbsUp, Film, Gamepad, Newspaper, Trophy, Lightbulb, Flame, Music2 } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link href="/explore">
              <Button variant="ghost" className="w-full justify-start">
                <Compass className="mr-2 h-4 w-4" />
                Explore
              </Button>
            </Link>
            <Link href="/subscriptions">
              <Button variant="ghost" className="w-full justify-start">
                <Library className="mr-2 h-4 w-4" />
                Subscriptions
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Link href="/history">
              <Button variant="ghost" className="w-full justify-start">
                <History className="mr-2 h-4 w-4" />
                History
              </Button>
            </Link>
            <Link href="/your-videos">
              <Button variant="ghost" className="w-full justify-start">
                <PlaySquare className="mr-2 h-4 w-4" />
                Your Videos
              </Button>
            </Link>
            <Link href="/watch-later">
              <Button variant="ghost" className="w-full justify-start">
                <Clock className="mr-2 h-4 w-4" />
                Watch Later
              </Button>
            </Link>
            <Link href="/liked-videos">
              <Button variant="ghost" className="w-full justify-start">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Liked Videos
              </Button>
            </Link>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Explore
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              <Link href="/trending">
                <Button variant="ghost" className="w-full justify-start">
                  <Flame className="mr-2 h-4 w-4" />
                  Trending
                </Button>
              </Link>
              <Link href="/music">
                <Button variant="ghost" className="w-full justify-start">
                  <Music2 className="mr-2 h-4 w-4" />
                  Music
                </Button>
              </Link>
              <Link href="/movies">
                <Button variant="ghost" className="w-full justify-start">
                  <Film className="mr-2 h-4 w-4" />
                  Movies
                </Button>
              </Link>
              <Link href="/gaming">
                <Button variant="ghost" className="w-full justify-start">
                  <Gamepad className="mr-2 h-4 w-4" />
                  Gaming
                </Button>
              </Link>
              <Link href="/news">
                <Button variant="ghost" className="w-full justify-start">
                  <Newspaper className="mr-2 h-4 w-4" />
                  News
                </Button>
              </Link>
              <Link href="/sports">
                <Button variant="ghost" className="w-full justify-start">
                  <Trophy className="mr-2 h-4 w-4" />
                  Sports
                </Button>
              </Link>
              <Link href="/learning">
                <Button variant="ghost" className="w-full justify-start">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Learning
                </Button>
              </Link>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;