function HistoryTable ({allOrders}) {
    return (
        <div className="flex mt-3">
            <table className="table-fixed HistoryTable w-[600px]">
                <thead>
                    <tr className="text-left">
                        <th className='w-1/2'>Order</th>
                        <th>Date</th>
                        <th>Total Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders?.map((o, idx) => (
                        <tr key={idx}>
                            <td>{o.name}</td>
                            <td>{o.payDate}</td>
                            <td>PKR {o.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default function OrderHistory ({allOrders}) {
    console.log(allOrders);
    return (
        <div>
            <h2 className="font-semibold text-xl mt-3">Order Histroy</h2>
            <p className="text-gray-600 text-md">Manage billing history and view receipts.</p>
            <HistoryTable allOrders={allOrders} />
        </div>
    )
}