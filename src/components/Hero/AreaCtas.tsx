import { FiPlayCircle } from "react-icons/fi";

export function AreaCtas() {
  return (
    <div className="flex items-center justify-center gap-3 mb-16">
      <button className="flex items-center gap-2 py-3 px-6 text-lg border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
        <FiPlayCircle size={22} />
        Demo
      </button>
      <button className="py-3 px-6 text-lg rounded-xl font-semibold bg-[#6246ea] text-white hover:bg-[#5036cf] transition-colors">
        Sign up
      </button>
    </div>
  );
}
