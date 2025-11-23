function HistoryTable () {
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
                    <tr>
                        <td>Course Name</td>
                        <td>10-09-10</td>
                        <td>PKR 345.00</td>
                    </tr>
                    <tr>
                        <td>Course Name</td>
                        <td>10-10-10</td>
                        <td>PKR 299.00</td>
                    </tr>
                    <tr>
                        <td>Course Name</td>
                        <td>07-01-14</td>
                        <td>PKR 545.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default function OrderHistory () {
    return (
        <div>
            <h2 className="font-semibold text-xl mt-3">Order Histroy</h2>
            <p className="text-gray-600 text-md">Manage billing history and view receipts.</p>
            <HistoryTable />
        </div>
    )
}