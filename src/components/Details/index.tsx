import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemFeature } from "../Features/itemFeature";
import { FiBarChart2, FiMail, FiZap } from "react-icons/fi";

export function Details() {
  return (
    <section className="pt-24">
      <GridContainer>
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-sm text-[#6246ea] font-medium rounded-2xl bg-[#f5f5ff]">
            Details
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="relative w-full max-w-[888px] h-[561px] mx-auto mb-24">
          <Image
            src="/screen-mockup.svg"
            width={768}
            height={512}
            alt="Screen Mockup"
            className="absolute top-0 right-0"
          />
          <Image
            src="/iphone-mockup.svg"
            width={244}
            height={497}
            alt="Iphone Mockup"
            className="absolute -left-12 bottom-0 z-10"
          />
        </div>
        <div className="flex justify-center items-center mt-24 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full max-w-[77.5rem] px-4">
            <ItemFeature
              icon={<FiMail size={24} className="text-[#6246ea]" />}
              title="Share team inboxes"
              text="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
              isBtn
            />
            <ItemFeature
              icon={<FiZap size={24} className="text-[#6246ea]" />}
              title="Deliver instant answers"
              text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
              isBtn
            />
            <ItemFeature
              icon={<FiBarChart2 size={24} className="text-[#6246ea]" />}
              title="Manage your team with reports"
              text="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
              isBtn
            />
          </div>
        </div>
        <hr className="border border-gray-200 mt-24" />
      </GridContainer>
    </section>
  );
}
