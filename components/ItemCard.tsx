import React from 'react';
import { FurnitureItem } from '../types';

interface ItemCardProps {
  item: FurnitureItem;
  onEdit: (item: FurnitureItem) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onEdit }) => {
  return (
    <div className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col ${item.isSold ? 'opacity-75 grayscale' : ''}`}>
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-200">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {item.isSold && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="bg-red-500 text-white px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wider transform -rotate-12">Vendido</span>
            </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
                e.preventDefault();
                onEdit(item);
            }}
            className="bg-white/90 backdrop-blur text-gray-700 p-2 rounded-full shadow-lg hover:text-indigo-600 hover:scale-110 transition"
            title="Editar Item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{item.title}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {item.price}
          </span>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">
          {item.description}
        </p>

        <a
          href={item.originalLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 ${
            item.isSold
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg'
          }`}
        >
          {item.isSold ? 'Indisponível' : 'Ver no Facebook Marketplace'}
        </a>
      </div>
    </div>
  );
};

export default ItemCard;