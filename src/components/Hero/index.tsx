import { GridContainer } from "../GridContainer";
import { TagFeature } from "./TagFeature";
import { AreaCtas } from "./AreaCtas";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-12 md:pt-16 lg:pt-24">
      <GridContainer>
        <div className="text-center">
          <TagFeature />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-4 sm:mb-6">
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <AreaCtas />
          <div className="px-4 sm:px-0">
            <Image
              src="/product-hero.svg"
              width={1216}
              height={480}
              alt="Product Hero"
              className="w-full h-auto"
              priority
            />
          </div>
          <hr className="border border-gray-200 mt-8 sm:mt-12" />
        </div>
      </GridContainer>
    </section>
  );
}
