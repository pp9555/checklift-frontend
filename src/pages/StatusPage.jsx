// pages/StatusPage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StatusPage() {
  const { siteId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/status/${siteId}`)
      .then(res => setData(res.data))
      .catch(console.error);
  }, [siteId]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Status for {data.site.url}</h1>
      <ul className="space-y-3">
        {data.logs.map((log, i) => (
          <li key={i} className="p-3 border rounded bg-white shadow">
            <p className="font-medium">{log.status} — {log.code}</p>
            {log.reason && <p className="text-sm text-red-500">AI: {log.reason}</p>}
            <p className="text-xs text-gray-500">{new Date(log.checkedAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
