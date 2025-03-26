import { GridContainer } from "../GridContainer";
import Image from "next/image";

export const Companies = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-24">
      <GridContainer>
        <p className="text-center text-gray-600 font-medium text-base sm:text-lg mb-6 sm:mb-8 px-4 sm:px-0">
          Join 4,000+ companies already growing
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:justify-between items-center px-4 sm:px-0">
          <div className="w-[120px] sm:w-[130px] md:w-[146px]">
            <Image
              src="/layers.svg"
              alt="Layers"
              width={146}
              height={48}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="w-[150px] sm:w-[170px] md:w-[187px]">
            <Image
              src="/quotient.svg"
              alt="Quotient"
              width={187}
              height={44}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="w-[150px] sm:w-[170px] md:w-[183px]">
            <Image
              src="/circooles.svg"
              alt="Circooles"
              width={183}
              height={44}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="w-[130px] sm:w-[150px] md:w-[160px]">
            <Image
              src="/catalog.svg"
              alt="Catalog"
              width={160}
              height={48}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="w-[140px] sm:w-[160px] md:w-[169px]">
            <Image
              src="/sisphus.svg"
              alt="Sisphus"
              width={169}
              height={48}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <hr className="mt-12 sm:mt-16 lg:mt-24 border border-gray-200" />
      </GridContainer>
    </section>
  );
};
