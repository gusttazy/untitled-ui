interface ItemNavProps {
  title: string;
  itemsMenu: itemsMenuProps[];
}

interface itemsMenuProps {
  url: string;
  name: string;
}

export function ItemNav({ title, itemsMenu }: ItemNavProps) {
  return (
    <div className="mb-4 md:mb-0">
      <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 sm:mb-3 md:mb-4">
        {title}
      </h4>
      <ul className="space-y-2 sm:space-y-3">
        {itemsMenu.map(({ url, name }, index) => (
          <li key={index}>
            <a 
              href={url} 
              className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 font-medium md:font-semibold transition-colors"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}