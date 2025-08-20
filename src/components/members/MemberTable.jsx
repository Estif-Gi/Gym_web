import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const MemberTable = ({ members, onEdit, onDelete }) => (
    <div className="overflow-x-auto ">
        <table className="w-full text-left ">
            <thead>
                <tr className="bg-gray-50 ">
                    <th className="p-4 font-semibold text-gray-600 rounded-l-lg">Name</th>
                    <th className="p-4 font-semibold text-gray-600">Join Date</th>
                    <th className="p-4 font-semibold text-gray-600">Status</th>
                    <th className="p-4 font-semibold text-gray-600">Next Payment</th>
                    <th className="p-4 font-semibold text-gray-600 rounded-r-lg">Actions</th>
                </tr>
            </thead>
            <tbody>
                {members.map(member => (
                    <tr key={member.id} className="border-b hover:bg-gray-500">
                        <td className="p-4 flex items-center text-gray-200">
                            <img className="h-10 w-10 rounded-full mr-4" src={member.avatar} alt={member.name} />
                            {member.name}
                        </td>
                        <td className="p-4 text-gray-200">{new Date(member.joinDate).toLocaleDateString()}</td>
                        <td className="p-4 text-gray-200">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {member.status}
                            </span>
                        </td>
                        <td className="p-4 text-gray-200">{new Date(member.nextPayment).toLocaleDateString()}</td>
                        <td className="p-4">
                            <button onClick={() => onEdit(member)} className="text-indigo-600 hover:text-indigo-800 mr-4"><Edit size={18} /></button>
                            <button onClick={() => onDelete(member.id)} className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default MemberTable;