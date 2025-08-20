import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { initialPromotions } from '../../data/promotions';

const PromotionsPage = () => {
    const [promotions, setPromotions] = useState(initialPromotions);
    const [newPromo, setNewPromo] = useState({ title: '', content: '', image: '' });

    const handleAddPromo = (e) => {
        e.preventDefault();
        if (newPromo.title && newPromo.content) {
            setPromotions([...promotions, { 
                ...newPromo, 
                id: promotions.length + 1,
                // Use placeholder if no image provided
                image: newPromo.image || `https://placehold.co/600x200/cccccc/ffffff?text=${encodeURIComponent(newPromo.title)}`
            }]);
            setNewPromo({ title: '', content: '', image: '' });
        }
    };
   
    const handleDeletePromo = (id) => {
        setPromotions(promotions.filter(p => p.id !== id));
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Promotions</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Promotions</h2>
                    <div className="space-y-4">
                        {promotions.map(promo => (
                            <div key={promo.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                {promo.image && (
                                    <img
                                        src={promo.image}
                                        alt={promo.title}
                                        className="w-full h-40 object-cover"
                                        onError={(e) => { 
                                            e.target.onerror = null; 
                                            e.target.src = `https://placehold.co/600x200/cccccc/ffffff?text=${encodeURIComponent(promo.title)}`; 
                                        }}
                                    />
                                )}
                                <div className="p-6 relative">
                                    <button 
                                        onClick={() => handleDeletePromo(promo.id)} 
                                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                    <h3 className="text-lg font-bold text-indigo-600">{promo.title}</h3>
                                    <p className="text-gray-600 mt-2">{promo.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-black/80 p-6 rounded-lg shadow-sm w-96 h-fit fixed top-[55%] right-10 translate-y-[-50%] border-2 border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-200 mb-4">Create New Promotion</h2>
                    <form onSubmit={handleAddPromo}>
                        <div className="mb-4">
                            <label className="block text-gray-200 mb-2">Title</label>
                            <input
                                type="text"
                                value={newPromo.title}
                                onChange={(e) => setNewPromo({ ...newPromo, title: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg bg-white text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-200 mb-2">Content</label>
                            <textarea
                                value={newPromo.content}
                                onChange={(e) => setNewPromo({ ...newPromo, content: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg bg-white text-black"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-200 mb-2">Image URL (optional)</label>
                            <input
                                type="text"
                                placeholder="https://example.com/image.jpg"
                                value={newPromo.image}
                                onChange={(e) => setNewPromo({ ...newPromo, image: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg bg-white text-black"
                            />
                            <p className="text-gray-400 text-sm mt-1">
                                Leave empty to use a placeholder image
                            </p>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Add Promotion
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PromotionsPage;