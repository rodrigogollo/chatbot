import Card from "@/components/Card/Card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen">
      <h1>Hello World!</h1>
      <Link href="/chat">Chat</Link>
      <Card />
    </main>
  );
}

