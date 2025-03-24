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
    <div className="">
      <h4 className="text-sm font-semibold text-gray-500 mb-4">{title}</h4>
      <ul className="space-y-3">
        {
        itemsMenu.map(({ url, name }, index) => (
          <li key={index}>
            <a href={url} className="text-gray-600 font-semibold">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
