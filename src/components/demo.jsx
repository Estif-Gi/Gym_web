// import React, { useState, useEffect } from 'react';
// import { Users, BarChart, DollarSign, Megaphone, Plus, Search, ChevronDown, Trash2, Edit, X } from 'lucide-react';
// import React, { useState, useEffect } from 'react';
// import { Users, BarChart, DollarSign, Megaphone, Plus, Search, ChevronDown, Trash2, Edit, X } from 'lucide-react';


// // Mock Data - Replace with API calls in a real application
// const initialMembers = [
//     { id: 1, name: 'John Doe', joinDate: '2023-01-15', status: 'Active', nextPayment: '2025-08-25', avatar: 'https://placehold.co/100x100/6366F1/FFFFFF?text=JD' },
//     { id: 2, name: 'Jane Smith', joinDate: '2023-02-20', status: 'Active', nextPayment: '2025-09-05', avatar: 'https://placehold.co/100x100/EC4899/FFFFFF?text=JS' },
//     { id: 3, name: 'Mike Johnson', joinDate: '2023-03-10', status: 'Inactive', nextPayment: '2025-07-30', avatar: 'https://placehold.co/100x100/F59E0B/FFFFFF?text=MJ' },
//     { id: 4, name: 'Emily Davis', joinDate: '2023-04-01', status: 'Active', nextPayment: '2025-08-28', avatar: 'https://placehold.co/100x100/10B981/FFFFFF?text=ED' },
//     { id: 5, name: 'Chris Lee', joinDate: '2023-05-12', status: 'Active', nextPayment: '2025-09-12', avatar: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=CL' },
// ];


// const initialPayments = [
//     { id: 1, memberName: 'John Doe', date: '2025-07-25', amount: 50.00, status: 'Paid' },
//     { id: 2, memberName: 'Jane Smith', date: '2025-08-05', amount: 50.00, status: 'Paid' },
//     { id: 3, memberName: 'Emily Davis', date: '2025-07-28', amount: 50.00, status: 'Paid' },
//     { id: 4, memberName: 'Mike Johnson', date: '2025-06-30', amount: 50.00, status: 'Paid' },
//     { id: 5, memberName: 'Chris Lee', date: '2025-08-12', amount: 50.00, status: 'Paid' },
// ];


// const initialPromotions = [
//     { id: 1, title: 'Summer Special', content: 'Get 20% off on annual memberships this summer!', image: 'https://placehold.co/600x200/6366F1/FFFFFF?text=Summer+Special' },
//     { id: 2, title: 'Bring a Friend', content: 'Refer a friend and get one month free!', image: 'https://placehold.co/600x200/EC4899/FFFFFF?text=Bring+a+Friend' },
// ];




// // Main App Component
// export default function App() {
//     const [activePage, setActivePage] = useState('dashboard');


//     const renderPage = () => {
//         switch (activePage) {
//             case 'dashboard':
//                 return <Dashboard members={initialMembers} />;
//             case 'members':
//                 return <MembersPage />;
//             case 'billing':
//                 return <BillingPage />;
//             case 'promotions':
//                 return <PromotionsPage />;
//             default:
//                 return <Dashboard members={initialMembers} />;
//         }
//     };


//     return (
//         <div className="flex h-screen bg-gray-100 font-sans">
//             <Sidebar activePage={activePage} setActivePage={setActivePage} />
//             <div className="flex-1 flex flex-col overflow-hidden">
//                 <Header />
//                 <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">
//                     {renderPage()}
//                 </main>
//             </div>
//         </div>
//     );
// }


// // Sidebar Navigation
// const Sidebar = ({ activePage, setActivePage }) => {
//     const navItems = [
//         { id: 'dashboard', icon: BarChart, label: 'Dashboard' },
//         { id: 'members', icon: Users, label: 'Members' },
//         { id: 'billing', icon: DollarSign, label: 'Billing' },
//         { id: 'promotions', icon: Megaphone, label: 'Promotions' },
//     ];


//     return (
//         <nav className="w-16 md:w-64 bg-gray-900 text-white flex flex-col">
//             <div className="flex items-center justify-center md:justify-start md:pl-6 h-20 border-b border-gray-700">
//                 <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
//                 <span className="hidden md:inline ml-3 text-xl font-bold">GymFlex</span>
//             </div>
//             <ul className="flex-1 mt-6">
//                 {navItems.map(item => (
//                     <li key={item.id} className="px-2 md:px-0">
//                         <a
//                             href="#"
//                             onClick={(e) => { e.preventDefault(); setActivePage(item.id); }}
//                             className={`flex items-center justify-center md:justify-start p-3 my-2 md:pl-6 rounded-lg transition-colors duration-200 ${activePage === item.id ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}
//                         >
//                             <item.icon className="h-6 w-6" />
//                             <span className="hidden md:inline ml-4">{item.label}</span>
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };


// // Header Component
// const Header = () => (
//     <header className="h-20 flex items-center justify-between px-8 bg-white border-b border-gray-200">
//         <div className="relative w-full max-w-md">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//             <input
//                 type="text"
//                 placeholder="Search members, payments..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//         </div>
//         <div className="flex items-center">
//             <div className="relative">
//                 <img
//                     className="h-10 w-10 rounded-full object-cover"
//                     src="https://placehold.co/100x100/000000/FFFFFF?text=A"
//                     alt="Admin Avatar"
//                 />
//             </div>
//         </div>
//     </header>
// );


// // Dashboard Page
// const Dashboard = ({ members }) => {
//     const today = new Date();
//     const upcomingPayments = members.filter(member => {
//         const paymentDate = new Date(member.nextPayment);
//         const diffTime = paymentDate - today;
//         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//         return diffDays > 0 && diffDays <= 7 && member.status === 'Active';
//     });


//     const activeMembers = members.filter(m => m.status === 'Active').length;


//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <DashboardCard title="Total Members" value={members.length} icon={Users} color="indigo" />
//                 <DashboardCard title="Active Members" value={activeMembers} icon={Users} color="green" />
//                 <DashboardCard title="Payments Due Soon" value={upcomingPayments.length} icon={DollarSign} color="amber" />
//             </div>
//             <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
//                 <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Payments (Next 7 Days)</h2>
//                 {upcomingPayments.length > 0 ? (
//                     <ul className="divide-y divide-gray-200">
//                         {upcomingPayments.map(member => (
//                             <li key={member.id} className="py-4 flex items-center justify-between">
//                                 <div className="flex items-center">
//                                     <img className="h-10 w-10 rounded-full" src={member.avatar} alt={member.name} />
//                                     <div className="ml-4">
//                                         <p className="text-md font-medium text-gray-900">{member.name}</p>
//                                         <p className="text-sm text-gray-500">Due on: {new Date(member.nextPayment).toLocaleDateString()}</p>
//                                     </div>
//                                 </div>
//                                 <button className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-md hover:bg-indigo-600">
//                                     Send Reminder
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p className="text-gray-500">No upcoming payments in the next 7 days.</p>
//                 )}
//             </div>
//         </div>
//     );
// };


// // Reusable Dashboard Card
// const DashboardCard = ({ title, value, icon: Icon, color }) => {
//     const colors = {
//         indigo: 'bg-indigo-500',
//         green: 'bg-green-500',
//         amber: 'bg-amber-500',
//     };
//     return (
//         <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between">
//             <div>
//                 <p className="text-sm font-medium text-gray-500">{title}</p>
//                 <p className="text-3xl font-bold text-gray-800">{value}</p>
//             </div>
//             <div className={`p-3 rounded-full text-white ${colors[color]}`}>
//                 <Icon size={24} />
//             </div>
//         </div>
//     );
// };


// // Members Page
// const MembersPage = () => {
//     const [members, setMembers] = useState(initialMembers);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [editingMember, setEditingMember] = useState(null);


//     const handleAddMember = (member) => {
//         setMembers([...members, { ...member, id: members.length + 1, avatar: `https://placehold.co/100x100/000000/FFFFFF?text=${member.name.charAt(0)}` }]);
//     };


//     const handleUpdateMember = (updatedMember) => {
//         setMembers(members.map(m => m.id === updatedMember.id ? updatedMember : m));
//     };


//     const handleDeleteMember = (id) => {
//         setMembers(members.filter(m => m.id !== id));
//     };


//     const openEditModal = (member) => {
//         setEditingMember(member);
//         setIsModalOpen(true);
//     };
   
//     const openAddModal = () => {
//         setEditingMember(null);
//         setIsModalOpen(true);
//     };


//     return (
//         <div>
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-bold text-gray-800">Members</h1>
//                 <button onClick={openAddModal} className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
//                     <Plus size={20} className="mr-2" />
//                     Add Member
//                 </button>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <MemberTable members={members} onEdit={openEditModal} onDelete={handleDeleteMember} />
//             </div>
//             {isModalOpen && (
//                 <MemberModal
//                     isOpen={isModalOpen}
//                     onClose={() => setIsModalOpen(false)}
//                     onSave={editingMember ? handleUpdateMember : handleAddMember}
//                     member={editingMember}
//                 />
//             )}
//         </div>
//     );
// };


// // Member Table
// const MemberTable = ({ members, onEdit, onDelete }) => (
//     <div className="overflow-x-auto">
//         <table className="w-full text-left">
//             <thead>
//                 <tr className="bg-gray-50 border-b">
//                     <th className="p-4 font-semibold text-gray-600">Name</th>
//                     <th className="p-4 font-semibold text-gray-600">Join Date</th>
//                     <th className="p-4 font-semibold text-gray-600">Status</th>
//                     <th className="p-4 font-semibold text-gray-600">Next Payment</th>
//                     <th className="p-4 font-semibold text-gray-600">Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {members.map(member => (
//                     <tr key={member.id} className="border-b hover:bg-gray-50">
//                         <td className="p-4 flex items-center">
//                             <img className="h-10 w-10 rounded-full mr-4" src={member.avatar} alt={member.name} />
//                             {member.name}
//                         </td>
//                         <td className="p-4">{new Date(member.joinDate).toLocaleDateString()}</td>
//                         <td className="p-4">
//                             <span className={`px-2 py-1 text-xs font-semibold rounded-full ${member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                                 {member.status}
//                             </span>
//                         </td>
//                         <td className="p-4">{new Date(member.nextPayment).toLocaleDateString()}</td>
//                         <td className="p-4">
//                             <button onClick={() => onEdit(member)} className="text-indigo-600 hover:text-indigo-800 mr-4"><Edit size={18} /></button>
//                             <button onClick={() => onDelete(member.id)} className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
// );


// // Member Add/Edit Modal
// const MemberModal = ({ isOpen, onClose, onSave, member }) => {
//     const [formData, setFormData] = useState(
//         member || { name: '', joinDate: '', status: 'Active', nextPayment: '' }
//     );


//     useEffect(() => {
//         setFormData(member || { name: '', joinDate: '', status: 'Active', nextPayment: '' });
//     }, [member]);


//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSave(formData);
//         onClose();
//     };


//     if (!isOpen) return null;


//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800">{member ? 'Edit Member' : 'Add New Member'}</h2>
//                     <button onClick={onClose} className="text-gray-500 hover:text-gray-700"><X size={24} /></button>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-2">Full Name</label>
//                         <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-2">Join Date</label>
//                         <input type="date" name="joinDate" value={formData.joinDate} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-2">Next Payment Date</label>
//                         <input type="date" name="nextPayment" value={formData.nextPayment} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 mb-2">Status</label>
//                         <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg">
//                             <option value="Active">Active</option>
//                             <option value="Inactive">Inactive</option>
//                         </select>
//                     </div>
//                     <div className="flex justify-end">
//                         <button type="button" onClick={onClose} className="mr-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Cancel</button>
//                         <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Save</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };




// // Billing Page
// const BillingPage = () => {
//     const [payments] = useState(initialPayments);


//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Billing History</h1>
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <div className="overflow-x-auto">
//                     <table className="w-full text-left">
//                         <thead>
//                             <tr className="bg-gray-50 border-b">
//                                 <th className="p-4 font-semibold text-gray-600">Member Name</th>
//                                 <th className="p-4 font-semibold text-gray-600">Date</th>
//                                 <th className="p-4 font-semibold text-gray-600">Amount</th>
//                                 <th className="p-4 font-semibold text-gray-600">Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {payments.map(payment => (
//                                 <tr key={payment.id} className="border-b hover:bg-gray-50">
//                                     <td className="p-4">{payment.memberName}</td>
//                                     <td className="p-4">{new Date(payment.date).toLocaleDateString()}</td>
//                                     <td className="p-4">${payment.amount.toFixed(2)}</td>
//                                     <td className="p-4">
//                                         <span className={`px-2 py-1 text-xs font-semibold rounded-full ${payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
//                                             {payment.status}
//                                         </span>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // Promotions Page
// const PromotionsPage = () => {
//     const [promotions, setPromotions] = useState(initialPromotions);
//     const [newPromo, setNewPromo] = useState({ title: '', content: '', image: '' });


//     const handleAddPromo = (e) => {
//         e.preventDefault();
//         if (newPromo.title && newPromo.content) {
//             setPromotions([...promotions, { ...newPromo, id: promotions.length + 1 }]);
//             setNewPromo({ title: '', content: '', image: '' });
//         }
//     };
   
//     const handleDeletePromo = (id) => {
//         setPromotions(promotions.filter(p => p.id !== id));
//     };


//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Promotions</h1>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 <div className="lg:col-span-2">
//                     <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Promotions</h2>
//                     <div className="space-y-4">
//                         {promotions.map(promo => (
//                             <div key={promo.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
//                                 {promo.image && (
//                                     <img
//                                         src={promo.image}
//                                         alt={promo.title}
//                                         className="w-full h-40 object-cover"
//                                         onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x200/cccccc/ffffff?text=Image+Not+Found'; }}
//                                     />
//                                 )}
//                                 <div className="p-6 relative">
//                                     <button onClick={() => handleDeletePromo(promo.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
//                                         <Trash2 size={18} />
//                                     </button>
//                                     <h3 className="text-lg font-bold text-indigo-600">{promo.title}</h3>
//                                     <p className="text-gray-600 mt-2">{promo.content}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
//                     <h2 className="text-xl font-semibold text-gray-700 mb-4">Create New Promotion</h2>
//                     <form onSubmit={handleAddPromo}>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 mb-2">Title</label>
//                             <input
//                                 type="text"
//                                 value={newPromo.title}
//                                 onChange={(e) => setNewPromo({ ...newPromo, title: e.target.value })}
//                                 className="w-full px-3 py-2 border rounded-lg"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 mb-2">Content</label>
//                             <textarea
//                                 value={newPromo.content}
//                                 onChange={(e) => setNewPromo({ ...newPromo, content: e.target.value })}
//                                 className="w-full px-3 py-2 border rounded-lg"
//                                 rows="4"
//                                 required
//                             ></textarea>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 mb-2">Image URL</label>
//                             <input
//                                 type="text"
//                                 placeholder="https://example.com/image.jpg"
//                                 value={newPromo.image}
//                                 onChange={(e) => setNewPromo({ ...newPromo, image: e.target.value })}
//                                 className="w-full px-3 py-2 border rounded-lg"
//                             />
//                         </div>
//                         <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
//                             Add Promotion
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };




// // Mock Data - Replace with API calls in a real application
// const initialMembers = [
//     { id: 1, name: 'John Doe', joinDate: '2023-01-15', status: 'Active', nextPayment: '2025-08-25', avatar: 'https://placehold.co/100x100/6366F1/FFFFFF?text=JD' },
//     { id: 2, name: 'Jane Smith', joinDate: '2023-02-20', status: 'Active', nextPayment: '2025-09-05', avatar: 'https://placehold.co/100x100/EC4899/FFFFFF?text=JS' },
//     { id: 3, name: 'Mike Johnson', joinDate: '2023-03-10', status: 'Inactive', nextPayment: '2025-07-30', avatar: 'https://placehold.co/100x100/F59E0B/FFFFFF?text=MJ' },
//     { id: 4, name: 'Emily Davis', joinDate: '2023-04-01', status: 'Active', nextPayment: '2025-08-28', avatar: 'https://placehold.co/100x100/10B981/FFFFFF?text=ED' },
//     { id: 5, name: 'Chris Lee', joinDate: '2023-05-12', status: 'Active', nextPayment: '2025-09-12', avatar: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=CL' },
// ];


// const initialPayments = [
//     { id: 1, memberName: 'John Doe', date: '2025-07-25', amount: 50.00, status: 'Paid' },
//     { id: 2, memberName: 'Jane Smith', date: '2025-08-05', amount: 50.00, status: 'Paid' },
//     { id: 3, memberName: 'Emily Davis', date: '2025-07-28', amount: 50.00, status: 'Paid' },
//     { id: 4, memberName: 'Mike Johnson', date: '2025-06-30', amount: 50.00, status: 'Paid' },
//     { id: 5, memberName: 'Chris Lee', date: '2025-08-12', amount: 50.00, status: 'Paid' },
// ];


// const initialPromotions = [
//     { id: 1, title: 'Summer Special', content: 'Get 20% off on annual memberships this summer!', image: 'https://placehold.co/600x200/6366F1/FFFFFF?text=Summer+Special' },
//     { id: 2, title: 'Bring a Friend', content: 'Refer a friend and get one month free!', image: 'https://placehold.co/600x200/EC4899/FFFFFF?text=Bring+a+Friend' },
// ];




// // Main App Component
// export default function App() {
//     const [activePage, setActivePage] = useState('dashboard');


//     const renderPage = () => {
//         switch (activePage) {
//             case 'dashboard':
//                 return <Dashboard members={initialMembers} />;
//             case 'members':
//                 return <MembersPage />;
//             case 'billing':
//                 return <BillingPage />;
//             case 'promotions':
//                 return <PromotionsPage />;
//             default:
//                 return <Dashboard members={initialMembers} />;
//         }
//     };


//     return (
//         <div className="flex h-screen bg-gray-100 font-sans">
//             <Sidebar activePage={activePage} setActivePage={setActivePage} />
//             <div className="flex-1 flex flex-col overflow-hidden">
//                 <Header />
//                 <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">
//                     {renderPage()}
//                 </main>
//             </div>
//         </div>
//     );
// }


// // Sidebar Navigation
// const Sidebar = ({ activePage, setActivePage }) => {
//     const navItems = [
//         { id: 'dashboard', icon: BarChart, label: 'Dashboard' },
//         { id: 'members', icon: Users, label: 'Members' },
//         { id: 'billing', icon: DollarSign, label: 'Billing' },
//         { id: 'promotions', icon: Megaphone, label: 'Promotions' },
//     ];


//     return (
//         <nav className="w-16 md:w-64 bg-gray-900 text-white flex flex-col">
//             <div className="flex items-center justify-center md:justify-start md:pl-6 h-20 border-b border-gray-700">
//                 <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
//                 <span className="hidden md:inline ml-3 text-xl font-bold">GymFlex</span>
//             </div>
//             <ul className="flex-1 mt-6">
//                 {navItems.map(item => (
//                     <li key={item.id} className="px-2 md:px-0">
//                         <a
//                             href="#"
//                             onClick={(e) => { e.preventDefault(); setActivePage(item.id); }}
//                             className={`flex items-center justify-center md:justify-start p-3 my-2 md:pl-6 rounded-lg transition-colors duration-200 ${activePage === item.id ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}
//                         >
//                             <item.icon className="h-6 w-6" />
//                             <span className="hidden md:inline ml-4">{item.label}</span>
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };


// // Header Component
// const Header = () => (
//     <header className="h-20 flex items-center justify-between px-8 bg-white border-b border-gray-200">
//         <div className="relative w-full max-w-md">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//             <input
//                 type="text"
//                 placeholder="Search members, payments..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//         </div>
//         <div className="flex items-center">
//             <div className="relative">
//                 <img
//                     className="h-10 w-10 rounded-full object-cover"
//                     src="https://placehold.co/100x100/000000/FFFFFF?text=A"
//                     alt="Admin Avatar"
//                 />
//             </div>
//         </div>
//     </header>
// );


// // Dashboard Page
// const Dashboard = ({ members }) => {
//     const today = new Date();
//     const upcomingPayments = members.filter(member => {
//         const paymentDate = new Date(member.nextPayment);
//         const diffTime = paymentDate - today;
//         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//         return diffDays > 0 && diffDays <= 7 && member.status === 'Active';
//     });


//     const activeMembers = members.filter(m => m.status === 'Active').length;


//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <DashboardCard title="Total Members" value={members.length} icon={Users} color="indigo" />
//                 <DashboardCard title="Active Members" value={activeMembers} icon={Users} color="green" />
//                 <DashboardCard title="Payments Due Soon" value={upcomingPayments.length} icon={DollarSign} color="amber" />
//             </div>
//             <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
//                 <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Payments (Next 7 Days)</h2>
//                 {upcomingPayments.length > 0 ? (
//                     <ul className="divide-y divide-gray-200">
//                         {upcomingPayments.map(member => (
//                             <li key={member.id} className="py-4 flex items-center justify-between">
//                                 <div className="flex items-center">
//                                     <img className="h-10 w-10 rounded-full" src={member.avatar} alt={member.name} />
//                                     <div className="ml-4">
//                                         <p className="text-md font-medium text-gray-900">{member.name}</p>
//                                         <p className="text-sm text-gray-500">Due on: {new Date(member.nextPayment).toLocaleDateString()}</p>
//                                     </div>
//                                 </div>
//                                 <button className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-md hover:bg-indigo-600">
//                                     Send Reminder
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p className="text-gray-500">No upcoming payments in the next 7 days.</p>
//                 )}
//             </div>
//         </div>
//     );
// };


// // Reusable Dashboard Card
// const DashboardCard = ({ title, value, icon: Icon, color }) => {
//     const colors = {
//         indigo: 'bg-indigo-500',
//         green: 'bg-green-500',
//         amber: 'bg-amber-500',
//     };
//     return (
//         <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between">
//             <div>
//                 <p className="text-sm font-medium text-gray-500">{title}</p>
//                 <p className="text-3xl font-bold text-gray-800">{value}</p>
//             </div>
//             <div className={`p-3 rounded-full text-white ${colors[color]}`}>
//                 <Icon size={24} />
//             </div>
//         </div>
//     );
// };


// // Members Page
// const MembersPage = () => {
//     const [members, setMembers] = useState(initialMembers);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [editingMember, setEditingMember] = useState(null);


//     const handleAddMember = (member) => {
//         setMembers([...members, { ...member, id: members.length + 1, avatar: `https://placehold.co/100x100/000000/FFFFFF?text=${member.name.charAt(0)}` }]);
//     };


//     const handleUpdateMember = (updatedMember) => {
//         setMembers(members.map(m => m.id === updatedMember.id ? updatedMember : m));
//     };


//     const handleDeleteMember = (id) => {
//         setMembers(members.filter(m => m.id !== id));
//     };


//     const openEditModal = (member) => {
//         setEditingMember(member);
//         setIsModalOpen(true);
//     };
   
//     const openAddModal = () => {
//         setEditingMember(null);
//         setIsModalOpen(true);
//     };


//     return (
//         <div>
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-bold text-gray-800">Members</h1>
//                 <button onClick={openAddModal} className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
//                     <Plus size={20} className="mr-2" />
//                     Add Member
//                 </button>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <MemberTable members={members} onEdit={openEditModal} onDelete={handleDeleteMember} />
//             </div>
//             {isModalOpen && (
//                 <MemberModal
//                     isOpen={isModalOpen}
//                     onClose={() => setIsModalOpen(false)}
//                     onSave={editingMember ? handleUpdateMember : handleAddMember}
//                     member={editingMember}
//                 />
//             )}
//         </div>
//     );
// };


// // Member Table
// const MemberTable = ({ members, onEdit, onDelete }) => (
//     <div className="overflow-x-auto">
//         <table className="w-full text-left">
//             <thead>
//                 <tr className="bg-gray-50 border-b">
//                     <th className="p-4 font-semibold text-gray-600">Name</th>
//                     <th className="p-4 font-semibold text-gray-600">Join Date</th>
//                     <th className="p-4 font-semibold text-gray-600">Status</th>
//                     <th className="p-4 font-semibold text-gray-600">Next Payment</th>
//                     <th className="p-4 font-semibold text-gray-600">Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {members.map(member => (
//                     <tr key={member.id} className="border-b hover:bg-gray-50">
//                         <td className="p-4 flex items-center">
//                             <img className="h-10 w-10 rounded-full mr-4" src={member.avatar} alt={member.name} />
//                             {member.name}
//                         </td>
//                         <td className="p-4">{new Date(member.joinDate).toLocaleDateString()}</td>
//                         <td className="p-4">
//                             <span className={`px-2 py-1 text-xs font-semibold rounded-full ${member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                                 {member.status}
//                             </span>
//                         </td>
//                         <td className="p-4">{new Date(member.nextPayment).toLocaleDateString()}</td>
//                         <td className="p-4">
//                             <button onClick={() => onEdit(member)} className="text-indigo-600 hover:text-indigo-800 mr-4"><Edit size={18} /></button>
//                             <button onClick={() => onDelete(member.id)} className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
// );


// // Member Add/Edit Modal
// const MemberModal = ({ isOpen, onClose, onSave, member }) => {
//     const [formData, setFormData] = useState(
//         member || { name: '', joinDate: '', status: 'Active', nextPayment: '' }
//     );


//     useEffect(() => {
//         setFormData(member || { name: '', joinDate: '', status: 'Active', nextPayment: '' });
//     }, [member]);


//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSave(formData);
//         onClose();
//     };


//     if (!isOpen) return null;


//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800">{member ? 'Edit Member' : 'Add New Member'}</h2>
//                     <button onClick={onClose} className="text-gray-500 hover:text-gray-700"><X size={24} /></button>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-2">Full Name</label>
//                         <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-2">Join Date</label>
//                         <input type="date" name="joinDate" value={formData.joinDate} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-2">Next Payment Date</label>
//                         <input type="date" name="nextPayment" value={formData.nextPayment} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 mb-2">Status</label>
//                         <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg">
//                             <option value="Active">Active</option>
//                             <option value="Inactive">Inactive</option>
//                         </select>
//                     </div>
//                     <div className="flex justify-end">
//                         <button type="button" onClick={onClose} className="mr-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Cancel</button>
//                         <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Save</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };




// // Billing Page
// const BillingPage = () => {
//     const [payments] = useState(initialPayments);


//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Billing History</h1>
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <div className="overflow-x-auto">
//                     <table className="w-full text-left">
//                         <thead>
//                             <tr className="bg-gray-50 border-b">
//                                 <th className="p-4 font-semibold text-gray-600">Member Name</th>
//                                 <th className="p-4 font-semibold text-gray-600">Date</th>
//                                 <th className="p-4 font-semibold text-gray-600">Amount</th>
//                                 <th className="p-4 font-semibold text-gray-600">Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {payments.map(payment => (
//                                 <tr key={payment.id} className="border-b hover:bg-gray-50">
//                                     <td className="p-4">{payment.memberName}</td>
//                                     <td className="p-4">{new Date(payment.date).toLocaleDateString()}</td>
//                                     <td className="p-4">${payment.amount.toFixed(2)}</td>
//                                     <td className="p-4">
//                                         <span className={`px-2 py-1 text-xs font-semibold rounded-full ${payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
//                                             {payment.status}
//                                         </span>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // Promotions Page
// const PromotionsPage = () => {
//     const [promotions, setPromotions] = useState(initialPromotions);
//     const [newPromo, setNewPromo] = useState({ title: '', content: '', image: '' });


//     const handleAddPromo = (e) => {
//         e.preventDefault();
//         if (newPromo.title && newPromo.content) {
//             setPromotions([...promotions, { ...newPromo, id: promotions.length + 1 }]);
//             setNewPromo({ title: '', content: '', image: '' });
//         }
//     };
   
//     const handleDeletePromo = (id) => {
//         setPromotions(promotions.filter(p => p.id !== id));
//     };


//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Promotions</h1>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 <div className="lg:col-span-2">
//                     <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Promotions</h2>
//                     <div className="space-y-4">
//                         {promotions.map(promo => (
//                             <div key={promo.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
//                                 {promo.image && (
//                                     <img
//                                         src={promo.image}
//                                         alt={promo.title}
//                                         className="w-full h-40 object-cover"
//                                         onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x200/cccccc/ffffff?text=Image+Not+Found'; }}
//                                     />
//                                 )}
//                                 <div className="p-6 relative">
//                                     <button onClick={() => handleDeletePromo(promo.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
//                                         <Trash2 size={18} />
//                                     </button>
//                                     <h3 className="text-lg font-bold text-indigo-600">{promo.title}</h3>
//                                     <p className="text-gray-600 mt-2">{promo.content}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
//                     <h2 className="text-xl font-semibold text-gray-700 mb-4">Create New Promotion</h2>
//                     <form onSubmit={handleAddPromo}>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 mb-2">Title</label>
//                             <input
//                                 type="text"
//                                 value={newPromo.title}
//                                 onChange={(e) => setNewPromo({ ...newPromo, title: e.target.value })}
//                                 className="w-full px-3 py-2 border rounded-lg"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 mb-2">Content</label>
//                             <textarea
//                                 value={newPromo.content}
//                                 onChange={(e) => setNewPromo({ ...newPromo, content: e.target.value })}
//                                 className="w-full px-3 py-2 border rounded-lg"
//                                 rows="4"
//                                 required
//                             ></textarea>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 mb-2">Image URL</label>
//                             <input
//                                 type="text"
//                                 placeholder="https://example.com/image.jpg"
//                                 value={newPromo.image}
//                                 onChange={(e) => setNewPromo({ ...newPromo, image: e.target.value })}
//                                 className="w-full px-3 py-2 border rounded-lg"
//                             />
//                         </div>
//                         <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
//                             Add Promotion
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };



