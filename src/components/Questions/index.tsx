import { GridContainer } from "../GridContainer";
import { Question } from "./Question";

export function Questions() {
  return (
    <section className="py-24">
      <GridContainer>
        <div className="text-center mb-16 space-y-5">
          <h2 className="text-4xl font-bold text-gray-900 -tracking-[0.72px]">
            Frequently asked questions
          </h2>
          <p className="text-xl/6 text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <Question
            title="Is there a free trial available?"
            response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          />
          <Question
            title="Can I change my plan later?"
            response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          />
          <Question
            title="What is your cancellation policy?"
            response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          />
          <Question
            title="Can other info be added to an invoice?"
            response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          />
          <Question
            title="How does billing work?"
            response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          />
          <Question
            title="How do I change my account email?"
            response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          />
        </div>
      </GridContainer>
    </section>
  );
}
