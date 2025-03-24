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
    <footer className="pt-16 pb-12">
      <GridContainer>
        <div className="flex items-start justify-between pb-16">
          <ItemNav title="Products" itemsMenu={menuProducts} />
          <ItemNav title="Company" itemsMenu={menuCompany} />
          <ItemNav title="Resources" itemsMenu={menuResources} />
          <ItemNav title="Use cases" itemsMenu={menuUseCases} />
          <ItemNav title="Social" itemsMenu={menuSocial} />
          <ItemNav title="Legal" itemsMenu={menuLegal} />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-8">
          <Image src="/logomark.svg" height={50} width={50} alt="Logo Footer" />
          <p className="text-gray-500">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </GridContainer>
    </footer>
  );
}
