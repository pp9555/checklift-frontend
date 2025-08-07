// pages/about.tsx

import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div>
        
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 text-gray-800 px-4 md:px-10 py-20">
        <Header />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          About Checklift
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Checklift was born out of the frustration of unexpected downtimes and the lack of affordable, reliable monitoring tools for developers, teams, and businesses.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make uptime monitoring simple, fast, and accessible to everyone — from indie hackers to large-scale agencies.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-2">Why We Exist</h3>
            <p className="text-gray-600">
              Because even a few minutes of downtime can damage your brand, your revenue, and your credibility.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-2">What Drives Us</h3>
            <p className="text-gray-600">
              Transparency, simplicity, and performance. We want our users to feel confident and in control.
            </p>
          </motion.div>
        </div>
        <p className="mt-20 text-gray-500 text-sm">
          Checklift is built with love by a small team of engineers who care deeply about reliability, user experience, and delivering value.
        </p>
      </motion.div>
    </div>
    </div>
  );
}
