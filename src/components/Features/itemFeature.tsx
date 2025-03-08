

interface ItemFeatureProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export function ItemFeature({ icon, title, text }: ItemFeatureProps) {
  return (
    <div className="text-center w-full max-w-96">
      <div className="w-12 h-12 bg-[#f5f5ff] rounded-full mx-auto mb-5 justify-center flex items-center">
        {icon}
      </div>
      <h3 className="text-gray-900 text-xl/6 font-medium mb-2">{title}</h3>
      <p className="text-gray-600 leading-6 max-w-3xl mx-auto">{text}</p>
    </div>
  );
}
