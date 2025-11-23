function PaymentTable () {
    return (
        <>
        <table className="paymentTable">
            <tbody>
                <tr>
                    <td className="w-30">Visa</td>
                    <td><button>Remove</button></td>
                </tr>
                <tr>
                    <td>PayPal</td>
                    <td><button>Remove</button></td>
                </tr>
            </tbody>
        </table>
        <button className="addinfobtn mt-4">+ Add Information</button>
        </>
    )
}

export default function PaymentMethod () {
    return (
        <div>
            <h2 className="font-semibold text-xl mt-3">Payment Method</h2>
            <p className="text-gray-600 text-md">Manage your personal billing information.</p>
            <PaymentTable />
        </div>
    )
}