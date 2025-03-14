import { ReactNode } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ItemFeatureProps {
  icon: ReactNode;
  title: string;
  text: string;
  isBtn?: boolean;
  className?: string;
}

export function ItemFeature({
  icon,
  title,
  text,
  isBtn = false,
}: ItemFeatureProps) {
  return (
    <div className="text-center w-full flex flex-col items-center justify-start p-6">
      <div className="w-12 h-12 bg-[#f5f5ff] rounded-full mb-5 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-gray-900 text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 leading-6">{text}</p>
      </div>
      {isBtn && (
        <a
          href="#"
          className="flex items-center justify-center mt-5 text-[#6246ea] font-semibold gap-2 hover:opacity-80 transition-opacity"
        >
          Learn more
          <FaArrowUpRightFromSquare size={14} />
        </a>
      )}
    </div>
  );
}