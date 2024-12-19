import VideoGrid from '@/components/VideoGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ModeToggle from '@/components/mode-toggle';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="container ">
      <Header/>
      <Tabs defaultValue="all" className="w-full ">
       
        <div className="flex items-center justify-center mb-6">
        
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="gaming">Gaming</TabsTrigger>
          </TabsList>
          
          {/* <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div> */}
        </div>

        <TabsContent value="all" className="mt-0">
          <VideoGrid />
        </TabsContent>
        <TabsContent value="trending" className="mt-0">
          <VideoGrid category="trending" />
        </TabsContent>
        <TabsContent value="music" className="mt-0">
          <VideoGrid category="music" />
        </TabsContent>
        <TabsContent value="gaming" className="mt-0">
          <VideoGrid category="gaming" />
        </TabsContent>
      </Tabs>
    </div>
  );
}