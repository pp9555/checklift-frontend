// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import LogList from '@/components/LogList';
// import { UserButton } from '@clerk/clerk-react';




// // import SenderForm from './components/senderForm'


// function Dashboard() {

//   const [urls, setUrls] = useState([]);
//   const [input, setInput] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:4000/api/websites').then(res => setUrls(res.data));
//   }, []);

//   const addUrl = async () => {
//     const res = await axios.post('http://localhost:4000/api/websites', { url: input });
//     setUrls([...urls, res.data]);
//     setInput('');
//   };

//   const deleteUrl = async (id) => {
//     await axios.delete(`http://localhost:4000/api/websites/${id}`);
//     setUrls(urls.filter(url => url._id !== id));
//   };

//   return (
  
//     //   <div className="flex min-h-svh flex-col items-center justify-center">
//     //     <SenderForm
//     //       cardTitle="Sender Form"
//     //       cardDescription="This is a description of the sender form."
//     //       cardAction={<Button>Submit</Button>}
//     //       cardContent="Here you can fill out your details."
//     //       cardFooter="Footer content goes here." 
//     //     />
//     //   {/* <Button>Click me</Button> */}
//     // </div>
    

//     <div className="p-4 max-w-xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Checklift Dashboard</h1>
//       <UserButton afterSignOutUrl='/sign-in' />
//       <input className="border p-2 w-full mb-2" value={input} onChange={e => setInput(e.target.value)} placeholder="https://example.com" />
//       <button className="bg-blue-500 text-white px-4 py-2" onClick={addUrl}>Add URL</button>
//       <ul className="mt-4">
//         {urls.map(site => (
//           <li key={site._id} className="flex justify-between border-b py-2">
//             <span>{site.url}</span>
//             <button onClick={() => deleteUrl(site._id)} className="text-red-600">Delete</button>
//           </li>
//         ))}
//       </ul>
//       <LogList />
//     </div>

//   )
// }

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogList from '@/components/LogList';
import { useAuth, UserButton } from '@clerk/clerk-react';
import PlanSelector from '@/components/PlanSelector';
import PlanBanner from '@/components/PlanBanner';
import UpgradeToPro from '@/components/UpgradeToPro';
import { motion } from 'framer-motion';

function Dashboard() {
  const { getToken } = useAuth();
  const [urls, setUrls] = useState([]);
  const [input, setInput] = useState('');
    const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchUrls = async () => {
      const token = await getToken();
      const res = await axios.get('http://localhost:4000/api/websites', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUrls(res.data);
    };

    fetchUrls();
  }, []);

  const addUrl = async () => {
    const token = await getToken();
    const res = await axios.post('http://localhost:4000/api/websites', 
      { url: input },
      
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      
    );
    setUrls([...urls, res.data]);
    setInput('');
  };

  const deleteUrl = async (id) => {
    const token = await getToken();
    await axios.delete(`http://localhost:4000/api/websites/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUrls(urls.filter(url => url._id !== id));
  };

  return (
//     <div className="p-4 max-w-xl mx-auto">
//       {/* <h1 className="text-2xl font-bold mb-4">Checklift Dashboard</h1>
//       <UserButton afterSignOutUrl="/sign-in" />
//       <PlanSelector />
//       <PlanBanner /> */}

// {/* Header */}
//   <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border bg-background p-4 shadow-sm">
//     <div>
//       <h1 className="text-2xl font-bold tracking-tight">Checklift Dashboard</h1>
//       <p className="text-muted-foreground text-sm">
//         Monitor your URLs and alerts in real time.
//       </p>
//     </div>
//     <div className="flex items-center gap-4">
//       <UpgradeToPro />
//       <UserButton afterSignOutUrl="/sign-in" />
//     </div>
//   </div>


//       <input
//         className="border p-2 w-full mb-2"
//         value={input}
//         onChange={e => setInput(e.target.value)}
//         placeholder="https://example.com"
//       />
//       <button
//         className="bg-blue-500 text-white px-4 py-2"
//         onClick={addUrl}
//          disabled={ !input.trim()}
//       >
//         Add URL
//       </button>
//       <ul className="mt-4">
//         {urls.map(site => (
//           <li key={site._id} className="flex justify-between border-b py-2">
//             <span>{site.url}</span>
//             <button onClick={() => deleteUrl(site._id)} className="text-red-600">
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       <LogList />
//     </div>


// <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-purple-100">
//       {/* Navbar at the top — OUTSIDE padded box */}
//       <motion.div
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow backdrop-blur"
//       >
//         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//           {/* Left Section */}
//           <div>
//             <h1 className="text-xl font-bold tracking-tight">🚀 Checklift</h1>
//             <p className="text-sm opacity-90">Uptime & Broken Link Monitoring</p>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">
//             <UpgradeToPro />
//             <UserButton afterSignOutUrl="/sign-in" />
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Dashboard Container */}
//       <div className="p-6 max-w-5xl mx-auto space-y-6">
//         {/* Add URL Section */}
//         <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
//           <h2 className="text-lg font-semibold">Add a URL to Monitor</h2>
//           <input
//             className="w-full border border-input bg-background rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             placeholder="https://example.com"
//           />
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md disabled:opacity-50"
//             onClick={addUrl}
//             disabled={!input.trim()}
//           >
//             Add URL
//           </button>
//         </div>

//         {/* URL List */}
//         <div className="rounded-xl border bg-card p-6 shadow-sm">
//           <h2 className="text-lg font-semibold mb-4">Monitored URLs</h2>
//           {urls.length === 0 ? (
//             <p className="text-muted-foreground text-sm">No URLs added yet.</p>
//           ) : (
//             <ul className="space-y-3">
//               {urls.map(site => (
//                 <li
//                   key={site._id}
//                   className="flex justify-between items-center border border-border p-3 rounded-md bg-muted/20"
//                 >
//                   <span className="text-sm">{site.url}</span>
//                   <button
//                     onClick={() => deleteUrl(site._id)}
//                     className="text-red-500 text-sm hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Logs */}
//         <div className="rounded-xl border bg-card p-6 shadow-sm">
//           <LogList />
//         </div>
//       </div>
//     </div>

 <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-purple-100">
      {/* Navbar */}
      
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full h-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow"
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">🚀 Checklift</h1>
          <div className="flex items-center gap-3">
            <UpgradeToPro />
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </motion.div>

      {/* Grid-based Main Content */}
      <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add URL Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border bg-white p-6 shadow-sm space-y-4"
        >
          <h2 className="text-lg font-semibold">Add a URL to Monitor</h2>
          <input
            className="w-full border bg-background rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="https://example.com"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md disabled:opacity-50"
            onClick={addUrl}
            disabled={!input.trim()}
          >
            Add URL
          </button>
        </motion.div>

        {/* Monitored URLs Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-xl border bg-white p-6 shadow-sm space-y-4"
        >
          <h2 className="text-lg font-semibold">Monitored URLs</h2>
          {urls.length === 0 ? (
            <p className="text-gray-500 text-sm">No URLs added yet.</p>
          ) : (
            <ul className="overflow-y-auto h-30 space-y-3">
              {urls.map(site => (
                <li
                  key={site._id}
                  className="flex justify-between items-center border p-3 rounded-md bg-gray-50"
                >
                  <span className="text-sm">{site.url}</span>
                  <button
                    onClick={() => deleteUrl(site._id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* Logs Card */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="rounded-xl border bg-white p-6 shadow-sm space-y-4 col-span-1 md:col-span-2"
>
  {/* <h2 className="text-lg font-semibold">Recent Logs</h2> */}

  {/* Scrollable container */}
  <div className="h-40 overflow-y-auto pr-2">
    <LogList />
  </div>
</motion.div>


{/* Alerts Sent Card */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.75, delay: 0.15 }}
  className="rounded-xl border bg-white p-6 shadow-sm space-y-3"
>
  <h2 className="text-lg font-semibold">Alerts Sent</h2>
  <p className="text-3xl font-bold text-red-600">14</p>
  <p className="text-sm text-gray-500">in the last 30 days</p>
</motion.div>


        {/* Features Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="rounded-xl border bg-white p-6 shadow-sm space-y-4"
        >
          <h2 className="text-lg font-semibold">More Features</h2>
          <p className="text-gray-600 text-sm">
            We are building new powerful tools for your monitoring workflow.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 px-4 py-2 text-sm rounded-md"
          >
            Show Upcoming Features
          </button>
        </motion.div>
      </div>

      {/* Upcoming Features Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md space-y-4">
            <h3 className="text-xl font-semibold text-center">🔮 Upcoming Features</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Real-time alerts via SMS & Email</li>
              <li>AI-powered broken link suggestions</li>
              <li>Weekly performance reports</li>
              <li>Team access & collaboration</li>
            </ul>
            <button
              className="block w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>

  );
}

export default Dashboard;
