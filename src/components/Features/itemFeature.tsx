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
    <div className="text-center w-full flex flex-col items-center justify-start p-4 sm:p-6">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f5f5ff] rounded-full mb-3 sm:mb-4 lg:mb-5 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-gray-900 text-lg sm:text-xl font-medium mb-1 sm:mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base leading-5 sm:leading-6">{text}</p>
      </div>
      {isBtn && (
        <a
          href="#"
          className="flex items-center justify-center mt-3 sm:mt-4 lg:mt-5 text-[#6246ea] font-semibold gap-2 hover:opacity-80 transition-opacity text-sm sm:text-base"
        >
          Learn more
          <FaArrowUpRightFromSquare size={12} className="sm:w-[14px]" />
        </a>
      )}
    </div>
  );
}