import DashboardCard from './DashboardCard';
import { Users, DollarSign } from 'lucide-react';

export default function Dashboard({ members }) {
  const today = new Date();
  const upcomingPayments = members.filter(member => {
    const paymentDate = new Date(member.nextPayment);
    const diffTime = paymentDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 && diffDays <= 7 && member.status === 'Active';
  });

  const activeMembers = members.filter(m => m.status === 'Active').length;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Total Members" value={members.length} icon={Users} color="indigo" />
        <DashboardCard title="Active Members" value={activeMembers} icon={Users} color="green" />
        <DashboardCard title="Payments Due Soon" value={upcomingPayments.length} icon={DollarSign} color="amber" />
      </div>

      <div className="mt-8 bg-black/80 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Upcoming Payments (Next 7 Days)</h2>
        {upcomingPayments.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {upcomingPayments.map(member => (
              <li key={member.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-10 w-10 rounded-full" src={member.avatar} alt={member.name} />
                  <div className="ml-4">
                    <p className="text-lg font-bold text-gray-300">{member.name}</p>
                    <p className="text-sm text-gray-200">Due on: {new Date(member.nextPayment).toLocaleDateString()}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-md hover:bg-indigo-600">
                  Send Reminder
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No upcoming payments in the next 7 days.</p>
        )}
      </div>
    </div>
  );
}
