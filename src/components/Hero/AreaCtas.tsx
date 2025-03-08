import { FiPlayCircle } from "react-icons/fi";

export function AreaCtas() {
  return (
    <div className="flex items-center justify-center gap-3 mb-16">
      <button className="flex items-center gap-3 py-4 px-7 border border-gray-300 rounded-lg text-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
        <FiPlayCircle size={24} />
        Demo
      </button>
      <button className="py-4 px-7 rounded-lg text-lg font-semibold bg-[#c16fff] text-white hover:bg-[#a93aff] transition-colors">
        Sign up
      </button>
    </div>
  );
}
