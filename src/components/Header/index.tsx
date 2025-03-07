import { GridContainer } from "../GridContainer";
import Image from "next/image";
import { ItemMenu } from "./itemMenu";

const menuItems = [
  {
    url: "/",
    title: "Home",
    dropdown: false,
  },
  {
    url: "/",
    title: "Produtos",
    dropdown: true,
  },
  {
    url: "/",
    title: "Resources",
    dropdown: true,
  },
  {
    url: "/",
    title: "Pricing",
    dropdown: false,
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-[80px] bg-white border-b border-b-gray-100 flex items-center">
      <GridContainer className="flex items-center justify-center">
        <div className="flex items-center gap-10">
          <Image
            src="/logo.svg"
            width={45}
            height={32}
            alt="Logo Untitled UI"
          />
          <nav className="flex items-center gap-8">
            {menuItems.map(({ url, title }, index) => (
              <ItemMenu key={index} url={url} title={title} />
            ))}
          </nav>
        </div>
      </GridContainer>
    </header>
  );
}
