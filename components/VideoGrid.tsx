"use client";

import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { formatDistanceToNow } from "date-fns";
import {videos} from "@/constants/videos.js";
import Link from "next/link";

// const videos = [
//   {
//     id: 1,
//     title: "Building a Modern Web Application",
//     thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
//     channel: {
//       name: "TechPro",
//       avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=400&auto=format&fit=crop&q=60",
//     },
//     views: "120K",
//     timestamp: new Date("2024-03-15"),
//   },
//   {
//     id: 2,
//     title: "The Future of Artificial Intelligence",
//     thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
//     channel: {
//       name: "AI World",
//       avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60",
//     },
//     views: "89K",
//     timestamp: new Date("2024-03-14"),
//   },
//   {
//     id: 3,
//     title: "Learn React in 2024",
//     thumbnail: "https://images.unsplash.com/photo-1633185072510-7fa0f164d24b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     channel: {
//       name: "CodeMaster",
//       avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&auto=format&fit=crop&q=60",
//     },
//     views: "250K",
//     timestamp: new Date("2024-03-13"),
//   },
//   {
//     id: 4,
//     title: "Web Development Tips & Tricks",
//     thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60",
//     channel: {
//       name: "DevTips",
//       avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60",
//     },
//     views: "75K",
//     timestamp: new Date("2024-03-12"),
//   },
//   {
//     id: 5,
//     title: "Understanding JavaScript Closures",
//     thumbnail: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&auto=format&fit=crop&q=60",
//     channel: {
//       name: "JS Insights",
//       avatar: "https://images.unsplash.com/photo-1603415526960-f8f6d9b88b7d?w=400&auto=format&fit=crop&q=60",
//     },
//     views: "150K",
//     timestamp: new Date("2024-03-11"),
//   },
//   {
//     id: 6,
//     title: "How to Ace Coding Interviews",
//     thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
//     channel: {
//       name: "Career Coach",
//       avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60",
//     },
//     views: "200K",
//     timestamp: new Date("2024-03-10"),
//   },
//   {
//     id: 7,
//     title: "Deep Dive into Node.js",
//     thumbnail: "https://images.unsplash.com/photo-1599837565318-67429bde7162?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     channel: {
//       name: "Backend Basics",
//       avatar: "https://images.unsplash.com/photo-1564866657315-10222334b3c7?w=400&auto=format&fit=crop&q=60",
//     },
//     views: "95K",
//     timestamp: new Date("2024-03-09"),
//   },
//   {
//     id: 8,
//     title: "CSS Grid vs Flexbox: When to Use Which",
//     thumbnail: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     channel: {
//       name: "CSS Mastery",
//       avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&auto=format&fit=crop&q=60",
//     },
//     views: "68K",
//     timestamp: new Date("2024-03-08"),
//   },
//   {
//     id: 9,
//     title: "Understanding REST APIs",
//     thumbnail: "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     channel: {
//       name: "API Academy",
//       avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=60",
//     },
//     views: "180K",
//     timestamp: new Date("2024-03-07"),
//   },
//   {
//     id: 10,
//     title: "Python for Beginners",
//     thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     channel: {
//       name: "Learn Python",
//       avatar: "https://images.unsplash.com/photo-1573495804689-bb147e5f2cd2?w=400&auto=format&fit=crop&q=60",
//     },
//     views: "300K",
//     timestamp: new Date("2024-03-06"),
//   },
// ];
// console.log(videos);

interface VideoGridProps {
  category?: string;
  related?: boolean;
}

export default function VideoGrid({ category, related }: VideoGridProps) {
  const filteredVideos = category 
    ? videos.slice(0, Math.floor(Math.random() * 3) + 2) 
    : videos;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${related && "!grid-cols-1"} gap-5`}>
      {filteredVideos?.map((video) => (
        <Link href={`/watch/${video.id}`} key={video.id}>
          <Card className="overflow-hidden border-0 bg-background hover:bg-muted/50 transition-colors">
            <CardContent className={`p-0 ${related && "flex"}`}>
              <div
                className={`border aspect-video flex items-center justify-center relative ${related ? "!max-w-44 !w-44 !h-24" : "w-full h-44 "} overflow-hidden rounded-lg`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className={`object-cover w-full h-full ${related && "!max-w-44 !w-44 !h-24"} transition-transform hover:scale-105`}
                />
              </div>
              <div className="p-3 flex  items-center gap-3">
                {!related && (
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={video.channel.avatar} alt={video.channel.name} />
                    <AvatarFallback>{video.channel.name[0]}</AvatarFallback>
                  </Avatar>
                )}
                <div className="flex flex-col">
                  <h3 className={` ${related ? "text-xs" : "text-sm"} font-medium text-sm tracking-wide`}>
                    {video.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{video.channel.name}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {video.views} views · {formatDistanceToNow(video.timestamp, { addSuffix: true })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
