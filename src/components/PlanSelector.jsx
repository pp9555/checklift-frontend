// import { useAuth } from '@clerk/clerk-react';
// import axios from 'axios';

// const plans = [
//   {
//     name: 'Free',
//     price: '$0/mo',
//     features: ['3 URLs', '5-min checks'],
//     priceId: null
//   },
//   {
//     name: 'Pro',
//     price: '$9/mo',
//     features: ['20 URLs', '1-min checks', 'email alerts'],
//     priceId: import.meta.env.VITE_PRO_PRICE_ID // Replace with real Stripe Price ID
//   },
//   {
//     name: 'Agency',
//     price: '$29/mo',
//     features: ['100 URLs', 'branding', 'SSL/domain alerts'],
//     priceId: import.meta.env.VITE_AGENCY_PRICE_ID // Replace with real Stripe Price ID
//   }
// ];

// export default function PlanSelector() {
//   const { getToken } = useAuth();

//   const subscribe = async (priceId) => {
//     const token = await getToken();
//     const res = await axios.post('http://localhost:4000/api/create-checkout-session', {
//       priceId
//     }, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//     window.location.href = res.data.url;
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//       {plans.map(plan => (
//         <div key={plan.name} className="border p-6 rounded-lg text-center">
//           <h2 className="text-xl font-bold">{plan.name}</h2>
//           <p className="text-lg">{plan.price}</p>
//           <ul className="mt-2 mb-4 text-sm">
//             {plan.features.map(f => <li key={f}>• {f}</li>)}
//           </ul>
//           {plan.priceId ? (
//             <button
//               onClick={() => subscribe(plan.priceId)}
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               Subscribe
//             </button>
//           ) : (
//             <p className="text-gray-500">Current Plan</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }



import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Free',
    price: '$0/mo',
    features: ['3 URLs', '5-min checks'],
    priceId: null
  },
  {
    name: 'Pro',
    price: '$9/mo',
    features: ['20 URLs', '1-min checks', 'email alerts'],
    priceId: import.meta.env.VITE_PRO_PRICE_ID
  },
  {
    name: 'Agency',
    price: '$29/mo',
    features: ['100 URLs', 'branding', 'SSL/domain alerts'],
    priceId: import.meta.env.VITE_AGENCY_PRICE_ID
  }
];

export default function PlanSelector() {
  const { getToken } = useAuth();

  const subscribe = async (priceId) => {
    const token = await getToken();
    const res = await axios.post('http://localhost:4000/api/create-checkout-session', {
      priceId
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    window.location.href = res.data.url;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 px-4 md:px-10">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white border border-gray-200 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-between"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-2">{plan.name}</h2>
          <p className="text-3xl font-extrabold text-gray-900 mb-4">{plan.price}</p>
          <ul className="text-sm text-gray-600 mb-6 space-y-1 text-center">
            {plan.features.map(f => (
              <li key={f}>• {f}</li>
            ))}
          </ul>
          {plan.priceId ? (
            <button
              onClick={() => subscribe(plan.priceId)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition"
            >
              Subscribe
            </button>
          ) : (
            <p className="text-green-600 font-medium">Current Plan</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

