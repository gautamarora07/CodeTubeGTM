"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, ThumbsDown, Share2, Flag } from "lucide-react";
import VideoGrid from "@/components/VideoGrid";
import { videos } from "@/constants/videos";
import Header from "@/components/Header";



export default function WatchPage() {

    const params = useParams<{ id: string }>();
 console.log(params); // { id: "1" }
    const { id } = params;
    
    const videoData = videos.find((video) => video.id === Number(id));


    return (
        <> 
        <Header/>
        <div className="container mx-auto flex flex-col justify-center lg:flex-row gap-6">
            <div className="lg:w-2/3">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe width="100%" height="100%" src={videoData?.link ? videoData?.link : "https://www.youtube.com/embed/u6GUwH6CfRw?si=PDpTO_BaB8yo7Qt_"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className="mt-4">
                     <span className="text-xs capitalize text-blue-700 ">#Video{id}</span>
                    <h1 className="text-2xl font-bold">{videoData?.title}</h1>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-4">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={videoData?.channel.avatar} alt={videoData?.channel.name} />
                                <AvatarFallback>{videoData?.channel.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-semibold">{videoData?.channel.name}</h3>
                                <p className="text-sm text-muted-foreground">{videoData?.channel?.subscribers} subscribers</p>
                            </div>
                            <Button className="ml-4">Subscribe</Button>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex items-center bg-muted rounded-full">
                                <Button variant="ghost" size="sm" className="rounded-l-full">
                                    <ThumbsUp className="h-4 w-4 mr-2" />
                                    {videoData?.likes}
                                </Button>
                                <div className="w-px h-6 bg-border" />
                                <Button variant="ghost" size="sm" className="rounded-r-full">
                                    <ThumbsDown className="h-4 w-4" />
                                </Button>
                            </div>
                            <Button variant="secondary" size="sm">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Flag className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="mt-4 bg-muted rounded-lg p-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <span>{videoData?.views} views</span>
                            <span>•</span>
                            <span>{videoData?.timestamp?.toISOString().slice(0, 10)}</span>


                        </div>
                        <p className="text-sm whitespace-pre-line">{videoData?.description}</p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/3">
                <h2 className="font-semibold mb-4">Related Videos</h2>
                <div className="grid gap-4">
                    <VideoGrid related={true} />
                </div>
            </div>
        </div>
        </>
    );

}

// For a file located at pages/watch/[id]/page.js




