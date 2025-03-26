import { RiArrowRightUpLine } from "react-icons/ri";

export const TagFeature = () => {
  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 p-1 pr-2 sm:pr-[10px] bg-[#f5f5ff] rounded-2xl">
      <span className="bg-white inline-block rounded-2xl h-6 px-2 sm:px-[10px] text-xs sm:text-sm font-medium text-[#6246ea] hover:opacity-70 transition-opacity">
        New feature!
      </span>
      <a
        href="#"
        className="flex items-center gap-1 text-xs sm:text-sm font-medium text-gray-800 hover:opacity-80 transition-opacity"
      >
        Check out the team dashboard
        <RiArrowRightUpLine size={16} className="hidden sm:block" />
      </a>
    </div>
  );
};
