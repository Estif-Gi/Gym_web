import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-black/80 border-b border-gray-200">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search members, payments..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center">
        <div className="relative">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://placehold.co/100x100/000000/FFFFFF?text=A"
            alt="Admin Avatar"
          />
        </div>
      </div>
    </header>
  );
}
