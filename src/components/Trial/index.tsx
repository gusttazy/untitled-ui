import { GridContainer } from "../GridContainer";

export function Trial() {
  return (
    <section className="py-24 bg-gray-50 text-center">
      <GridContainer>
        <h2 className="text-4xl font-bold text-gray-900 mb-5">Start your free trial</h2>
        <p className="text-xl/6 text-gray-600 mb-10">Join over 4,000+ startups already growing with Untitled.</p>
        <div className="flex items-center justify-center gap-3 mb-16">
          <button className="flex items-center gap-2 py-3 px-6 text-lg border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
            Learn more
          </button>
          <button className="py-3 px-6 text-lg rounded-xl font-semibold bg-[#6246ea] text-white hover:bg-[#5036cf] transition-colors">
            Get started
          </button>
        </div>
      </GridContainer>
    </section>
  );
}
