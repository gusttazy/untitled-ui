import { GridContainer } from "../GridContainer";
import Image from "next/image";

export const Companies = () => {
  return (
    <section className="pt-24">
      <GridContainer>
        <p className="text-center text-gray-600 font-medium text-lg mb-8">
          Join 4,000+ companies already growing
        </p>
        <div className="flex items-center justify-between">
          <Image src="/layers.svg" alt="Layers" width={146} height={48} />
          <Image src="/quotient.svg" alt="Layers" width={187} height={44} />
          <Image src="/circooles.svg" alt="Layers" width={183} height={44} />
          <Image src="/catalog.svg" alt="Layers" width={160} height={48} />
          <Image src="/sisphus.svg" alt="Layers" width={169} height={48} />
        </div>
        <hr className="mt-24 border border-gray-200" />
      </GridContainer>
    </section>
  );
};
