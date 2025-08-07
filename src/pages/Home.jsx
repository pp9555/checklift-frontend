// import { Link } from "react-router-dom"
// import { RocketIcon, SparklesIcon, PlugZapIcon, MessageSquareIcon } from 'lucide-react';
// import { motion } from 'framer-motion';
// import Header from "@/components/Header";

// const Home = () => {
//   return (<>

// <main className="text-gray-900 font-sans scroll-smooth">
//       {/* Header */}
//       <Header />
//       {/* Hero Section */}
//       <section className="min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-6 py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-4xl"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
//             Maximize Profits with <span className="text-blue-600">AI‑Driven Pricing</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 mb-8">
//             LiftIQ helps Shopify brands optimize every SKU in real-time using sales, inventory, and demand signals.
//           </p>
//           <form
//             action="https://formsubmit.co/35e66263ec5f5a644d51426fb9e0a676"
//             method="POST"
//             className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
//           >
//             <input
//               type="email"
//               name="email"
//               required
//               placeholder="Enter your email"
//               className="px-4 py-3 w-full border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
            
//             <button
//               type="submit"
//               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
//             >
//               Join Waitlist
//             </button>
//           </form>
//           <p className="mt-4 text-sm text-gray-500">Private beta launching soon — limited to 20 brands.</p>
//         </motion.div>
//       </section>

//       {/* Problem Section */}
//       <section className="py-20 px-6 bg-gradient-to-r from-white to-blue-50">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-5xl mx-auto text-center"
//         >
//           <h2 className="text-4xl font-bold mb-6">Manual Pricing Is Holding You Back</h2>
//           <p className="text-xl text-gray-700 mb-10">
//             Guesswork costs margin. Discounting too early kills profit. LiftIQ removes the emotion from pricing so your store performs at its peak. With manual pricing, you're either leaving money on the table or losing out to smarter competitors.
//           </p>
//         </motion.div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-6xl mx-auto text-center"
//         >
//           <h2 className="text-4xl font-bold mb-16">How It Works</h2>
//           <div className="grid md:grid-cols-3 gap-10">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="p-8 bg-white shadow-xl rounded-2xl text-left"
//             >
//               <PlugZapIcon className="w-10 h-10 text-blue-500 mb-4" />
//               <h3 className="text-xl font-bold mb-2">1. Connect</h3>
//               <p className="text-gray-600">Easily integrate your Shopify store in under 2 minutes — no coding needed.</p>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="p-8 bg-white shadow-xl rounded-2xl text-left"
//             >
//               <SparklesIcon className="w-10 h-10 text-blue-500 mb-4" />
//               <h3 className="text-xl font-bold mb-2">2. Analyze</h3>
//               <p className="text-gray-600">Our AI evaluates sales history, stock levels, and trends for every product.</p>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="p-8 bg-white shadow-xl rounded-2xl text-left"
//             >
//               <RocketIcon className="w-10 h-10 text-blue-500 mb-4" />
//               <h3 className="text-xl font-bold mb-2">3. Optimize</h3>
//               <p className="text-gray-600">LiftIQ intelligently adjusts your pricing to maximize conversions and revenue.</p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 px-6 bg-gradient-to-tr from-white to-blue-100">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-6xl mx-auto text-center"
//         >
//           <h2 className="text-4xl font-bold mb-10">Simple, Transparent Pricing</h2>
//           <div className="grid md:grid-cols-3 gap-10 text-left">
//             <div className="bg-white p-8 rounded-2xl shadow-xl">
//               <h3 className="text-2xl font-bold mb-2">Starter</h3>
//               <p className="text-gray-600 mb-4">For small stores just getting started.</p>
//               <p className="text-3xl font-bold mb-6">$49/mo</p>
//               <ul className="text-gray-700 space-y-2">
//                 <li>✔ Up to 50 SKUs</li>
//                 <li>✔ Weekly pricing updates</li>
//                 <li>✔ Email support</li>
//               </ul>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-xl">
//               <h3 className="text-2xl font-bold mb-2">Growth</h3>
//               <p className="text-gray-600 mb-4">Perfect for scaling Shopify brands.</p>
//               <p className="text-3xl font-bold mb-6">$149/mo</p>
//               <ul className="text-gray-700 space-y-2">
//                 <li>✔ Up to 500 SKUs</li>
//                 <li>✔ Daily pricing updates</li>
//                 <li>✔ Priority support</li>
//               </ul>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-xl">
//               <h3 className="text-2xl font-bold mb-2">Pro</h3>
//               <p className="text-gray-600 mb-4">For high-volume DTC operators.</p>
//               <p className="text-3xl font-bold mb-6">$399/mo</p>
//               <ul className="text-gray-700 space-y-2">
//                 <li>✔ Unlimited SKUs</li>
//                 <li>✔ Real-time pricing</li>
//                 <li>✔ Dedicated CSM</li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Feedback Section */}
//       <section className="py-20 px-6 bg-gradient-to-r from-white to-blue-50">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl mx-auto text-center"
//         >
//           <h2 className="text-4xl font-bold mb-6">We’re Still Building — Tell Us What Hurts</h2>
//           <p className="text-lg text-gray-700 mb-8">
//             We’d love to hear what pricing challenges you face. What’s your biggest headache with pricing today?
//           </p>
//           <form
//             action="https://formsubmit.co/35e66263ec5f5a644d51426fb9e0a676"
//             method="POST"
//             className="flex flex-col gap-4"
//           >
//            <input type="text" name="text"
//            required
//               placeholder="Tell us your biggest pain point..."
//               className="p-4 h-32 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//            />

         
//             <button
//               type="submit"
//               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
//             >
//               Submit Feedback
//             </button>
//           </form>
//         </motion.div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-6 bg-gradient-to-t from-white to-blue-100">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl mx-auto text-center"
//         >
//           <h2 className="text-4xl font-bold mb-6">Ready to Increase Revenue Without Lifting a Finger?</h2>
//           <form
//             action="https://formsubmit.co/35e66263ec5f5a644d51426fb9e0a676"
//             method="POST"
//             className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
//           >
//             <input
//               type="email"
//               name="email"
//               required
//               placeholder="Enter your email"
//               className="px-4 py-3 w-full border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
            
//             <button
//               type="submit"
//               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
//             >
//               Request Access
//             </button>
//           </form>
//           <p className="mt-4 text-sm text-gray-500">We’re only onboarding a few select brands in our beta.</p>
//         </motion.div>
//       </section>
//     </main>


//     <div>Home</div>
//     {/* <Link to="/sign-in">Sign In</Link>
//     <Link to="/sign-up">Sign Up</Link> */}
//     </>
//   )
// }
// export default Home





// pages/index.tsx or src/pages/index.tsx (based on your setup)

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

  const submitFeedback = async () => {
    if (!feedback) return;
    setLoading(true);
    await fetch("http://localhost:4000/api/feedback", {
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
