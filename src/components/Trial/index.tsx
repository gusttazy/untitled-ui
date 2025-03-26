import { GridContainer } from "../GridContainer";

export function Trial() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 text-center px-4 sm:px-0">
      <GridContainer>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-5">
          Start your free trial
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 leading-normal sm:leading-6">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-12 lg:mb-16 w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 py-2 sm:py-3 px-4 sm:px-6 text-base sm:text-lg border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
            Learn more
          </button>
          <button className="w-full sm:w-auto py-2 sm:py-3 px-4 sm:px-6 text-base sm:text-lg rounded-xl font-semibold bg-[#6246ea] text-white hover:bg-[#5036cf] transition-colors">
            Get started
          </button>
        </div>
      </GridContainer>
    </section>
  );
}
