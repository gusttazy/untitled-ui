import { FiPlayCircle } from "react-icons/fi";

export function AreaCtas() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 sm:mb-16">
      <button className="flex items-center gap-2 py-2 sm:py-3 px-4 sm:px-6 text-base sm:text-lg border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center">
        <FiPlayCircle size={20} />
        Demo
      </button>
      <button className="py-2 sm:py-3 px-4 sm:px-6 text-base sm:text-lg rounded-xl font-semibold bg-[#6246ea] text-white hover:bg-[#5036cf] transition-colors w-full sm:w-auto">
        Sign up
      </button>
    </div>
  );
}