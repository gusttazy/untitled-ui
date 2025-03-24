import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemLaunch } from "./ItemLaunch";

export function Launch() {
  return (
    <section className="py-24">
      <GridContainer>
        <div className="w-full max-w-2xl mb-16">
          <span className="block font-semibold text-[#6246ea] mb-3">
            Launch Faster
          </span>
          <h2 className="text-4xl font-semibold text-gray-900 -tracking-[0.72px] mb-5">
            Build something great
          </h2>
          <p className="text-xl/6 text-gray-600">
            We’ve done all the heavy lifting so you don’t have to — get all the
            data you need to launch and grow your business faster.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full max-w-xl  grid grid-cols-2 gap-x-8 gap-y-16">
            <ItemLaunch
              number="4,000+"
              title="Global Customers"
              text="We’ve helped over 4,000 amazing global companies."
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
              text="We’re proud of our 5-star rating with over 200 reviews."
            />
          </div>
          <div>
            <Image
              src="/launch-image.svg"
              height={560}
              width={560}
              alt="Launch Right Image"
            />
          </div>
        </div>
      </GridContainer>
    </section>
  );
}
