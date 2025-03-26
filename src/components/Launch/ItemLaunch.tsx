interface ItemLaunchProps {
  number: string;
  title: string;
  text: string;
}

export function ItemLaunch({ number, title, text }: ItemLaunchProps) {
  return (
    <div className="w-full text-center px-2 sm:px-0">
      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#6246ea]">
        {number}
      </h3>
      <h4 className="text-base sm:text-lg font-medium text-gray-900 mt-2 sm:mt-3 mb-1 sm:mb-2">
        {title}
      </h4>
      <p className="text-sm sm:text-base text-gray-600 leading-normal">
        {text}
      </p>
    </div>
  );
}
