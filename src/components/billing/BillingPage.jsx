import React, { useState } from 'react';
import { initialPayments } from '../../data/payments';

const BillingPage = () => {
    const [payments] = useState(initialPayments);

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Billing History</h1>
            <div className="bg-black/80 p-6 rounded-lg shadow-sm text-white">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 rounded-xl">
                                <th className="p-4 font-semibold text-gray-600 rounded-l-xl ">Member Name</th>
                                <th className="p-4 font-semibold text-gray-600">Date</th>
                                <th className="p-4 font-semibold text-gray-600">Amount</th>
                                <th className="p-4 font-semibold text-gray-600 rounded-r-xl">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map(payment => (
                                <tr key={payment.id} className="border-b hover:bg-gray-600">
                                    <td className="p-4">{payment.memberName}</td>
                                    <td className="p-4">{new Date(payment.date).toLocaleDateString()}</td>
                                    <td className="p-4">${payment.amount.toFixed(2)}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {payment.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BillingPage;