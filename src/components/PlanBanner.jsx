import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';

export default function PlanBanner() {
  const [plan, setPlan] = useState(null);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchPlan = async () => {
      const token = await getToken();
      const res = await axios.get('http://localhost:4000/api/user/plan', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPlan(res.data);
    };

    fetchPlan();
  }, []);

  if (!plan) return null;

  return (
<div className="p-4 bg-gray-100 rounded text-sm mb-6">
      You are currently on the <strong>{plan.priceId ? plan.priceId : 'Free'}</strong> plan.
      {plan.status && (
        <span className="ml-2 text-green-600">({plan.status})</span>
      )}
    </div>  );
}
