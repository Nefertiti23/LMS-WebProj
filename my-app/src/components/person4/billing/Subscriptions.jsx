import './Subscriptions.css';

export default function Subscriptions({handleCancel, handleSubscribe, subs}) {

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 md:gap-3">
        {subs.map(plan => (
          <div
            key={plan.id} 
            className={`planBox border-2 rounded-lg p-6 transition-all ${
              plan.isActive 
                ? 'border-indigo-500 bg-indigo-50 -translate-y-2 veryactive' 
                : 'border-gray-600 bg-white'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{plan.name}</h2>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-indigo-800">PKR {plan.price}</span>
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
                <p className="text-indigo-600 font-medium mb-3 text-center">Current Plan</p>
                <button 
                  className="w-full border-2 border-red-500 border-dashed hover:bg-red-500 text-red-500 hover:text-white font-medium py-2 px-4 rounded transition-colors"
                  onClick={() => handleCancel(plan.id)}
                >
                  Cancel Subscription
                </button>
              </>
            ) : (
              <button 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
                onClick={() => {
                  handleSubscribe(plan.id);
                }}
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