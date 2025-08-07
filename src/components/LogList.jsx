// File: frontend/components/LogList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

export default function LogList() {
  const [logs, setLogs] = useState([]);
    const { getToken } = useAuth();  // ✅ Get token from Clerk


  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const token = await getToken(); // ✅ Get JWT

        const res = await axios.get('http://localhost:4000/api/logs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLogs(res.data);
      } catch (err) {
        console.error('Failed to fetch logs:', err);
      }
    };

    fetchLogs();
  }, [getToken]); // ✅ Include in deps

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Recent Logs</h2>
      <ul className="space-y-2">
        {logs.map((log, i) => (
          <li key={i} className="border p-3 rounded-md bg-white shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{log.url}</p>
                <p className={`text-sm ${log.status === 'DOWN' ? 'text-red-600' : 'text-green-600'}`}>{log.status} — {log.code}</p>
                <p className="text-gray-500 text-xs">{new Date(log.checkedAt).toLocaleString()}</p>
              </div>
              {log.status === 'DOWN' && (
                <div className="text-sm text-red-500">
                  <p><strong>Reason:</strong> {log.reason || 'N/A'}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}



// // components/LogsTable.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function LogsTable() {
//   const [logs, setLogs] = useState([]);

//   useEffect(() => {
//     async function fetchLogs() {
//       try {
//         const res = await axios.get("http://localhost:4000/api/logs");
//         setLogs(res.data);
//       } catch (error) {
//         console.error("Failed to fetch logs:", error);
//       }
//     }
//     fetchLogs();
//   }, []);

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-2">Recent Logs</h2>
//       <ul className="space-y-2">
//         {logs.map((log, i) => (
//           <li key={i} className="border p-3 rounded-md bg-white shadow-sm">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="font-medium">{log.url}</p>
//                 <p className={`text-sm ${log.status === 'DOWN' ? 'text-red-600' : 'text-green-600'}`}>{log.status} — {log.code}</p>
//                 <p className="text-gray-500 text-xs">{new Date(log.checkedAt).toLocaleString()}</p>
//               </div>
//               {log.status === 'DOWN' && (
//                 <div className="text-sm text-red-500">
//                   <p><strong>Reason:</strong> {log.reason || 'N/A'}</p>
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
