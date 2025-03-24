import { Companies } from "@/components/Companies";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Details } from "@/components/Details";
import { Questions } from "@/components/Questions";
import { Launch } from "@/components/Launch";
import { Trial } from "@/components/Trial";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Details />
      <Questions />
      <Launch />
      <Trial />
    </>
  );
}
