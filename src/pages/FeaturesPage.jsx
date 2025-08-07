// pages/features.tsx

import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function FeaturesPage() {
  const features = [
    {
      title: "Real-time Uptime Monitoring",
      description:
        "Track your website's availability every minute and get alerted instantly if anything goes down.",
    },
    {
      title: "Broken Link Detection",
      description:
        "Automatically scan your site for broken links and get actionable reports to fix them quickly.",
    },
    {
      title: "Email & Webhook Alerts",
      description:
        "Be the first to know when your site is down with instant alerts to your inbox or webhook URL.",
    },
    {
      title: "Detailed Uptime Reports",
      description:
        "Visual dashboards and historical uptime analytics to keep you and your clients informed.",
    },
    {
      title: "Team Access",
      description:
        "Invite your team members and manage monitors together in a collaborative workspace.",
    },
    {
      title: "Scalable Plans",
      description:
        "From indie projects to agencies with 100+ sites, Checklift grows with you.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-20 px-4 md:px-10 text-gray-800">
        <Header />
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text"
        >
          Features
        </motion.h1>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Everything you need to monitor your websites and APIs with confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-left"
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
