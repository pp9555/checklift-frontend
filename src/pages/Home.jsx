import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const submitFeedback = async () => {
    if (!feedback) return;
    setLoading(true);
    await fetch(`${API_URL}/api/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feedback }),
    });
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 text-gray-900">
      <Header />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-40 px-4 md:px-10 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Reliable Uptime Monitoring with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Checklift</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Monitor your websites, get instant alerts, and stay ahead of downtime — without lifting a finger.
        </p>
        <Link to="/sign-up">
        <Button className="text-lg px-6 py-3 rounded-xl">Get Started</Button>
        </Link>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 bg-white text-center px-4 md:px-10"
      >
        <h2 className="text-4xl font-bold mb-6">Downtime Hurts Your Brand</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Every second your site is down, you lose traffic, trust, and revenue. Manual checks won’t cut it — Checklift monitors your websites 24/7 and alerts you the moment anything breaks.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-20 px-4 md:px-10 bg-gray-100 text-center"
      >
        <h2 className="text-4xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
            <h3 className="text-xl font-bold mb-2">1. Add URLs</h3>
            <p className="text-gray-600">Set up checks for your websites or APIs — it's quick and code-free.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
            <h3 className="text-xl font-bold mb-2">2. Monitor</h3>
            <p className="text-gray-600">Checklift pings your endpoints from multiple regions and logs uptime in real time.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
            <h3 className="text-xl font-bold mb-2">3. Get Alerts</h3>
            <p className="text-gray-600">If a site goes down, you get email alerts instantly — no surprises or guesswork.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-20 px-4 md:px-10 text-center bg-white"
      >
        <h2 className="text-4xl font-bold mb-10">Straightforward Plans for Every Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Free",
              desc: "For individuals or side projects.",
              price: "$0/mo",
              features: ["✔ Monitor up to 3 URLs", "✔ 5-min checks", "✔ Basic email alerts"],
              className: "border p-6 rounded-xl"
            },
            {
              name: "Pro",
              desc: "Great for growing teams and projects.",
              price: "$9/mo",
              features: ["✔ 20 URLs", "✔ 1-min checks", "✔ Enhanced alerting"],
              className: "border p-6 rounded-xl bg-blue-50 border-blue-300"
            },
            {
              name: "Agency",
              desc: "Built for agencies managing multiple clients.",
              price: "$29/mo",
              features: ["✔ 100 URLs", "✔ Custom branding", "✔ SSL + domain expiry alerts"],
              className: "border p-6 rounded-xl"
            }
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={plan.className}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="text-gray-700 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-20 px-4 md:px-10 bg-gray-100 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Tell Us What You Need</h2>
        <p className="text-lg text-gray-700 mb-8">
          What kind of monitoring would make your life easier? We’d love your input.
        </p>
        <div className="max-w-2xl mx-auto">
          <Input
            placeholder="What frustrates you about monitoring today?"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="h-32 p-4 rounded-xl mb-4"
          />
          <Button onClick={submitFeedback} disabled={loading || submitted} className="w-full">
            {loading ? <Loader2 className="animate-spin" /> : submitted ? <Check className="text-green-600" /> : "Submit Feedback"}
          </Button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="py-20 text-center px-4 md:px-10 bg-white"
      >
        <h2 className="text-4xl font-bold mb-6">Start Monitoring Your Sites with Confidence</h2>
        <p className="mt-4 text-sm text-gray-500">Fully launched. No waitlist — get started now.</p>
        <Link to="/sign-up">
        <Button className="mt-6 px-6 py-3 text-lg rounded-xl">Get Started</Button>
        </Link>
      </motion.section>
    </div>
  );
}
