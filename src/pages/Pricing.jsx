import PlanBanner from "@/components/PlanBanner";
import PlanSelector from "@/components/PlanSelector";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Choose Your Plan</h1>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Start with the free tier, and scale up as your monitoring needs grow.
        </p>
        <PlanBanner />
        <PlanSelector />
      </div>
    </div>
  );
};

export default Pricing;
