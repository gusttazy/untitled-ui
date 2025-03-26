import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemLaunch } from "./ItemLaunch";

export function Launch() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <GridContainer>
        <div className="w-full max-w-2xl mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0">
          <span className="block font-semibold text-[#6246ea] mb-2 sm:mb-3 text-sm sm:text-base">
            Launch Faster
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight sm:-tracking-[0.72px] mb-3 sm:mb-4 lg:mb-5">
            Build something great
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-normal sm:leading-6">
            Weve done all the heavy lifting so you dont have to — get all the
            data you need to launch and grow your business faster.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12">
          <div className="w-full lg:max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <ItemLaunch
              number="4,000+"
              title="Global Customers"
              text="We've helped over 4,000 amazing global companies."
            />
            <ItemLaunch
              number="600%"
              title="Return on investment"
              text="Our customers have reported an average of ~600% ROI."
            />
            <ItemLaunch
              number="10k"
              title="Global downloads"
              text="Our app has been downloaded over 10k times."
            />
            <ItemLaunch
              number="200+"
              title="5-star reviews"
              text="We're proud of our 5-star rating with over 200 reviews."
            />
          </div>
          <div className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[560px]">
            <Image
              src="/launch-image.svg"
              height={560}
              width={560}
              alt="Launch Right Image"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </GridContainer>
    </section>
  );
}
