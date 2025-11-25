import { useState } from "react"

function PaymentTable ({paymentMethods, savePayments}) {
    const [payments, setPayments] = useState(paymentMethods);

    function removePayment (p) {
        var updated = payments.filter(prevp => prevp !== p);
        setPayments(updated);
        console.log(updated);
        savePayments(u => ({...u, billingInfo: updated}));
    }

    return (
        <>
        <table className="paymentTable">
            <tbody>
                {payments?.map((p, idx) => (
                    <tr key={idx}>
                        <td className="w-30">{p}</td>
                        <td><button onClick={() => removePayment(p)}>Remove</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button className="addinfobtn mt-4">+ Add Information</button>
        </>
    )
}

export default function PaymentMethod ({pays, handlePay}) {
    return (
        <div>
            <h2 className="font-semibold text-xl mt-3">Payment Method</h2>
            <p className="text-gray-600 text-md">Manage your personal billing information.</p>
            <PaymentTable paymentMethods={pays} savePayments={handlePay} />
        </div>
    )
}