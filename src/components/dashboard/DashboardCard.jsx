export default function DashboardCard({ title, value, icon: Icon, color }) {
    const colors = {
      indigo: 'bg-indigo-500',
      green: 'bg-green-500',
      amber: 'bg-amber-500',
    };
  
    return (
      <div className="bg-black/80 p-6 rounded-lg shadow-sm flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-100">{title}</p>
          <p className="text-3xl font-bold text-gray-400">{value}</p>
        </div>
        <div className={`p-3 rounded-full text-white ${colors[color]}`}>
          <Icon size={24} />
        </div>
      </div>
    );
  }
  