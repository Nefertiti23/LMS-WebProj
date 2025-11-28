import './Subscriptions.css';

export default function Subscriptions({handleCancel, handleSubscribe, subs}) {

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 md:gap-3">
        {subs.map(plan => (
          <div
            key={plan.id}
            className={`planBox border-2 rounded-lg p-6 transition-all ${
              plan.isActive ? 'active -translate-y-2 veryactive' : 'border-gray-600 bg-white'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{plan.name}</h2>
            
            <div className="mb-6">
              <span className="price text-4xl font-bold">PKR {plan.price}</span>
              <span className="text-gray-500 text-sm">{plan.duration}</span>
            </div>
            
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {plan.isActive ? (
              <>
                <p className="cuurentPlan font-medium mb-3 text-center">Current Plan</p>
                <button 
                  className="w-full border-2 border-red-600 text-red-600 hover:bg-red-100 font-medium py-2 px-4 rounded transition-colors"
                  onClick={() => handleCancel(plan.id)}
                >
                  Cancel Subscription
                </button>
              </>
            ) : (
              <button 
                className="w-full subscribeBtn text-white font-medium py-2 px-4 rounded transition-colors"
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