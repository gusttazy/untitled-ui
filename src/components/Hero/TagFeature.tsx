import { MdOutlineArrowCircleRight } from "react-icons/md";

export const TagFeature = () => {
  return (
    <div className="inline-flex items-center gap-3 p-1 pr-[10px] bg-fuchsia-50 rounded-2xl">
      <span className="bg-white inline-block rounded-2xl h-6 px-[10px] text-sm/6 font-medium text-[#c16fff]">
        New feature!
      </span>
      <a href="#" className="flex items-center gap-1 text-sm/6 font-medium text-gray-800">
        Check out the team dashboard
        <MdOutlineArrowCircleRight size={20}/>
      </a>
    </div>
  );
};
