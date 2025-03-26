import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemNav } from "./ItemNav";
import {
  menuCompany,
  menuLegal,
  menuProducts,
  menuResources,
  menuSocial,
  menuUseCases,
} from "@/app/utils/data";

export function Footer() {
  return (
    <footer className="pt-12 md:pt-16 pb-8 md:pb-12">
      <GridContainer>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 md:pb-16">
          <ItemNav title="Products" itemsMenu={menuProducts} />
          <ItemNav title="Company" itemsMenu={menuCompany} />
          <ItemNav title="Resources" itemsMenu={menuResources} />
          <ItemNav title="Use cases" itemsMenu={menuUseCases} />
          <ItemNav title="Social" itemsMenu={menuSocial} />
          <ItemNav title="Legal" itemsMenu={menuLegal} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6 md:pt-8 gap-4 md:gap-0">
          <Image
            src="/logomark.svg"
            height={40}
            width={40}
            alt="Logo Footer"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <p className="text-sm md:text-base text-gray-500 text-center md:text-left">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </GridContainer>
    </footer>
  );
}
