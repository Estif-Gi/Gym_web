import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const MemberModal = ({ isOpen, onClose, onSave, member }) => {
    const [formData, setFormData] = useState(
        member || { name: '', joinDate: '', status: 'Active', nextPayment: '' }
    );

    useEffect(() => {
        setFormData(member || { name: '', joinDate: '', status: 'Active', nextPayment: '' });
    }, [member]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-filter bg-black/10 backdrop-blur-sm bg-opacity-90 flex justify-center items-center z-50">
            <div className="bg-black/90 rounded-lg shadow-xl p-8 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-200">{member ? 'Edit Member' : 'Add New Member'}</h2>
                    <button onClick={onClose} className="text-gray-200 hover:text-gray-500"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2">Join Date</label>
                        <input type="date" name="joinDate" value={formData.joinDate} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2">Next Payment Date</label>
                        <input type="date" name="nextPayment" value={formData.nextPayment} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-300 mb-2">Status</label>
                        <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg">
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MemberModal;