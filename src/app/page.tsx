'@use client'
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-pink-400 h-screen">
      <Navbar/>
      <Header/>
    </div>
  );
}
