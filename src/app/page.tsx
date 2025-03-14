import { Companies } from "@/components/Companies";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Details } from "@/components/Details";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Details />
    </>
  );
}