import Link from "next/link";

interface ItemMenuProps {
  url: string;
  title: string;
}

export function ItemMenu({ url, title }: ItemMenuProps) {
  return (
    <Link
      href={url}
      className="flex items-center gap-2 font-semibold text-gray-700 hover:opacity-50 transition-opacity"
    >
      {title}
    </Link>
  );
};