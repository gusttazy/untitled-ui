import Link from "next/link";

interface ItemMenuProps {
  url: string;
  title: string;
  mobile?: boolean;
  onClick?: () => void;
}

export function ItemMenu({
  url,
  title,
  mobile = false,
  onClick,
}: ItemMenuProps) {
  return (
    <Link
      href={url}
      className={`flex items-center gap-2 font-semibold ${
        mobile
          ? "text-lg py-3 border-b border-gray-100"
          : "text-gray-700 hover:text-gray-900"
      } transition-colors`}
      onClick={onClick}
    >
      {title}
    </Link>
  );
}
