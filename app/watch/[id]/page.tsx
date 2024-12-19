// page.tsx
import Static from "./static";

export async function generateStaticParams() {
  const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return ids.map((id) => ({ id }));
}

export default function WatchPage() {
  return <Static />;
}
