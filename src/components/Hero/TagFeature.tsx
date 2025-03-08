import { RiArrowRightUpLine } from "react-icons/ri";

export const TagFeature = () => {
  return (
    <div className="inline-flex items-center gap-3 p-1 pr-[10px] bg-[#f5f5ff] rounded-2xl">
      <span className="bg-white inline-block rounded-2xl h-6 px-[10px] text-sm/6 font-medium text-[#6246ea] hover:opacity-70 transition-opacity">
        New feature!
      </span>
      <a
        href="#"
        className="flex items-center gap-1 text-sm/6 font-medium text-gray-800 hover:opacity-80 transition-opacity"
      >
        Check out the team dashboard
        <RiArrowRightUpLine size={18} />
      </a>
    </div>
  );
};
