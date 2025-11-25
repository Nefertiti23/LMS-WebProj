import OrderHistory from "./OrderHistory";
import PaymentMethod from "./PaymentMethod";
import MembreshipBox from "./MembershipBox";
import Subscriptions from './Subscriptions';
import './Billing.css';
import { useState } from "react";

export default function Billing ({user_sub, user_payments, handleUser}) {
    const [subscriptions, setSubscriptions] = useState([
        {
            id: 1,
            name: 'Basic Plan',
            price: '0.00 PKR',
            duration: '/month',
            features: ['Enroll in three courses', 'Two bonuses per month'],
            desc: [
                "As a basic member, you can enroll into a " +
                "maximum of three total courses without being " +
                "able to access the quizzes section."
            ],
            isActive: user_sub === 'Basic Plan',
        },
        {
            id: 2,
            name: 'Pro Plan',
            price: '1455.00 PKR',
            duration: '/month',
            features: ['Enroll in unlimited courses', 'Five bonuses per month', 'Access to quizzes section'],
            desc: [
                "As a pro member, you can enroll into a " +
                "maximum of ten total courses, with access " +
                "to the quizzes section and mutiple bonuses."
            ],
            isActive: user_sub === 'Pro Plan',
        },
        {
            id: 3,
            name: 'Enterprise Plan',
            price: '2333.00 PKR',
            duration: '/month',
            features: ['All features', 'Priority support', 'Up to ten bonuses per month'],
            desc: [
                "As an enterprise member, you can enroll into " +
                "unlimited courses, get unrestricted access to all " +
                "features and enjoy weekly bonuses."
            ],
            isActive: user_sub === 'Enterprise Plan',
        },
    ]);

    const handleSubscribe = (id) => {
        var selectedPlan = subscriptions.find(s => s.id === id);
        setSubscriptions(subscriptions.map(sub => ({
        ...sub,
        isActive: sub.id === id,
        })));
        // user_sub = selectedPlan.name;

        handleUser(u => ({...u, currentSub: selectedPlan.name}));
        console.log(selectedPlan.name);
    };

    const handleCancel = (id) => {
        setSubscriptions(subscriptions.map(sub => 
        sub.id === id ? { ...sub, isActive: false } : sub
        ));
        handleUser(u => u.currentSub = "");
    };

    return (
        <>
        <div className="screen">
             <h3 className='font-semibold text-3xl'>Billing and Subscriptions</h3>
             <Subscriptions user_sub={user_sub} 
                handleUser={handleUser} 
                handleCancel={handleCancel} 
                handleSubscribe={handleSubscribe}
                subs={subscriptions} />
             <div className="flex flex-col py-4 px-8 bg-gray-50 rounded-xl shadow-md">
                <MembreshipBox sub={user_sub} all_subs={subscriptions} />
                <div className="h-0.5 bg-gray-300 w-full rounded-full my-4"></div>
                <OrderHistory />
                <div className="h-0.5 bg-gray-300 w-full rounded-full my-4"></div>
                <PaymentMethod pays={user_payments} handlePay={handleUser} />
             </div>
        </div>
        </>
    )
}