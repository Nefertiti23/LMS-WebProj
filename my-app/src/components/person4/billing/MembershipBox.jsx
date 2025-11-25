export default function MembreshipBox ({sub, all_subs}) {
    return (
        <div>
            <h2 className="font-semibold text-xl mt-3">Membership</h2>
            <div className="memberbox border-2 rounded-xl p-4 my-4 w-1/2">
                <p className="font-bold text-2xl my-2">{sub}</p>
                <p className="text-gray-600">
                    {all_subs.find(s => s.name === sub).desc}
                </p>
            </div>
        </div>
    )
}