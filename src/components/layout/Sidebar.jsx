import { Users, BarChart, DollarSign, Megaphone } from 'lucide-react';

export default function Sidebar({ activePage, setActivePage }) {
  const navItems = [
    { id: 'dashboard', icon: BarChart, label: 'Dashboard' },
    { id: 'members', icon: Users, label: 'Members' },
    { id: 'billing', icon: DollarSign, label: 'Billing' },
    { id: 'promotions', icon: Megaphone, label: 'Promotions' },
  ];

  return (
    <nav className="w-16 md:w-64 bg-black/90 text-white flex flex-col">
      <div className="flex items-center justify-center md:justify-start md:pl-6 h-20 border-b border-gray-700">
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <span className="hidden md:inline ml-3 text-xl font-bold">Brothers</span>
      </div>
      <ul className="flex-1 mt-6">
        {navItems.map(item => (
          <li key={item.id} className="px-2 md:px-0">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setActivePage(item.id); }}
              className={`flex items-center justify-center md:justify-start p-3 my-2 md:pl-6 rounded-lg transition-colors duration-200 
                ${activePage === item.id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}
            >
              <item.icon className="h-6 w-6" />
              <span className="hidden md:inline ml-4">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
