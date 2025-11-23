import OrderHistory from "./OrderHistory";
import PaymentMethod from "./PaymentMethod";
import MembreshipBox from "./MembershipBox";
import './Billing.css';

export default function Billing () {
    return (
        <>
        <div className="screen">
             <h3 className='font-semibold text-3xl'>Billing</h3>
             <div className="flex flex-col py-4 px-8 bg-gray-50 rounded-xl shadow-md">
                <MembreshipBox />
                <div className="h-0.5 bg-gray-300 w-full rounded-full my-4"></div>
                <OrderHistory />
                <div className="h-0.5 bg-gray-300 w-full rounded-full my-4"></div>
                <PaymentMethod />
             </div>
        </div>
        </>
    )
}