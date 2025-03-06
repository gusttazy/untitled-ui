import { GridContainer } from "../GridContainer";
import Image from "next/image";
import { ItemMenu } from "./itemMenu";

const menuItems = [
  {
    url: "/",
    title: "Início",
    dropdown: false,
  },
  {
    url: "/produtos",
    title: "Produtos",
    dropdown: true,
  },
  {
    url: "/recursos",
    title: "Recursos",
    dropdown: true,
  },
  {
    url: "/precos",
    title: "Preços",
    dropdown: false,
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-[80px] bg-white border-b border-b-gray-100 flex items-center">
      <GridContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Image
            src="/logo.svg"
            width={50}
            height={32}
            alt="Logo Untitled UI"
          />

          {/* Navegação */}
          <nav className="flex items-center gap-8">
            {menuItems.map(({ url, title, dropdown }, index) => (
              <ItemMenu
                key={index}
                url={url}
                title={title}
                hasDropdown={dropdown}
              />
            ))}
          </nav>
        </div>
        <div>
          <Image src="/avatar.svg" height={50} width={50} alt="User Icon" />
        </div>
      </GridContainer>
    </header>
  );
}
