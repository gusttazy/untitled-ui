import { Companies } from "@/components/Companies";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Details } from "@/components/Details";
import { Questions } from "@/components/Questions";
import { Launch } from "@/components/Launch";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Details />
      <Questions />
      <Launch />
    </>
  );
}
