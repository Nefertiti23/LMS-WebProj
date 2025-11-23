import { useState } from 'react';
import './Subscriptions.css';

export default function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      name: 'Basic Plan',
      price: '0.00 PKR',
      duration: '/month',
      features: ['Enroll in three courses', 'Two bonuses per month'],
      isActive: true,
    },
    {
      id: 2,
      name: 'Pro Plan',
      price: '1455.00 PKR',
      duration: '/month',
      features: ['Enroll in unlimited courses', 'Five bonuses per month', 'Access to quizzes section'],
      isActive: false,
    },
    {
      id: 3,
      name: 'Enterprise Plan',
      price: '2333.00 PKR',
      duration: '/month',
      features: ['All Features', 'Priority Support', 'Up to ten bonuses per month'],
      isActive: false,
    },
  ]);

  const handleSubscribe = (id) => {
    setSubscriptions(subscriptions.map(sub => ({
      ...sub,
      isActive: sub.id === id,
    })));
  };

  const handleCancel = (id) => {
    setSubscriptions(subscriptions.map(sub => 
      sub.id === id ? { ...sub, isActive: false } : sub
    ));
  };

  return (
    <div className="screen">
      <h3 className='font-semibold text-3xl my-2'>Subscription Plans</h3>
      
      <div className="grid grid-cols-3 gap-6">
        {subscriptions.map(plan => (
          <div 
            key={plan.id} 
            className={`planBox border-2 rounded-lg p-6 transition-all ${
              plan.isActive 
                ? 'border-indigo-500 bg-indigo-50' 
                : 'border-gray-600 bg-white'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{plan.name}</h2>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-indigo-800">{plan.price}</span>
              <span className="text-gray-500 text-sm">{plan.duration}</span>
            </div>
            
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {plan.isActive ? (
              <>
                <p className="text-indigo-600 font-semibold mb-3 text-center">Current Plan</p>
                <button 
                  className="w-full border-2 border-red-500 border-dashed hover:bg-red-500 text-red-500 hover:text-white font-bold py-2 px-4 rounded transition-colors"
                  onClick={() => handleCancel(plan.id)}
                >
                  Cancel Subscription
                </button>
              </>
            ) : (
              <button 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
                onClick={() => handleSubscribe(plan.id)}
              >
                Subscribe Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}