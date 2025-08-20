import { useState } from 'react';
import { Plus } from 'lucide-react';
import { initialMembers } from '../../data/members';
import MemberTable from './MemberTable';
import MemberModal from './MemberModal';

export default function MembersPage() {
  const [members, setMembers] = useState(initialMembers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const handleAddMember = (member) => {
    setMembers([...members, {
      ...member,
      id: members.length + 1,
      avatar: `https://placehold.co/100x100/000000/FFFFFF?text=${member.name.charAt(0)}`
    }]);
  };

  const handleUpdateMember = (updatedMember) => {
    setMembers(members.map(m => m.id === updatedMember.id ? updatedMember : m));
  };

  const handleDeleteMember = (id) => {
    setMembers(members.filter(m => m.id !== id));
  };

  const openEditModal = (member) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setEditingMember(null);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Members</h1>
        <button onClick={openAddModal} className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
          <Plus size={20} className="mr-2" />
          Add Member
        </button>
      </div>
      <div className="bg-black/80 p-6 rounded-lg shadow-sm">
        <MemberTable members={members} onEdit={openEditModal} onDelete={handleDeleteMember} />
      </div>
      {isModalOpen && (
        <MemberModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={editingMember ? handleUpdateMember : handleAddMember}
          member={editingMember}
        />
      )}
    </div>
  );
}
