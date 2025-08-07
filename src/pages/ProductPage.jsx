// pages/product.tsx

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-20 px-4 md:px-10 text-gray-800">
        <Header />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text">
          Discover Checklift
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          The ultimate monitoring solution to keep your websites and applications running smoothly. Built for speed, reliability, and peace of mind.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 text-left">
            <h2 className="text-2xl font-bold mb-3">Real-Time Uptime Monitoring</h2>
            <p className="text-gray-600">
              Get notified the moment your site goes down. Our fast, distributed checking network ensures zero lag in alerting.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 text-left">
            <h2 className="text-2xl font-bold mb-3">Broken Link Detection</h2>
            <p className="text-gray-600">
              Ensure your site is clean and user-friendly. We crawl your URLs regularly and notify you of any broken or dead links.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 text-left">
            <h2 className="text-2xl font-bold mb-3">Email Alerts</h2>
            <p className="text-gray-600">
              Set up custom alerts to your email, so your team is informed instantly and can act before users notice anything.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 text-left">
            <h2 className="text-2xl font-bold mb-3">Advanced Analytics</h2>
            <p className="text-gray-600">
              Visualize uptime stats, response time graphs, and performance trends. Everything you need to make informed decisions.
            </p>
          </motion.div>
        </div>

        <div className="mt-16">
            <Link to ="/sign-up">
          <Button className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:scale-105 transition-transform">
            Get Started with Checklift
          </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
