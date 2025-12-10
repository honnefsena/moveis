import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ItemCard from './components/ItemCard';
import { FurnitureItem } from './types';
import { generateInitialItems } from './constants';

const App: React.FC = () => {
  const [items, setItems] = useState<FurnitureItem[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FurnitureItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Use a new key to force refresh the data for users with the old version
  const STORAGE_KEY = 'furnitureItems_v2';

  // Initialize items from LocalStorage or defaults
  useEffect(() => {
    const storedItems = localStorage.getItem(STORAGE_KEY);
    if (storedItems) {
      try {
        setItems(JSON.parse(storedItems));
      } catch (e) {
        console.error("Failed to parse stored items", e);
        setItems(generateInitialItems());
      }
    } else {
      setItems(generateInitialItems());
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage whenever items change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const handleEditClick = (item: FurnitureItem) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const handleSaveItem = (updatedItem: FurnitureItem) => {
    setItems(prevItems => 
      prevItems.map(item => item.id === updatedItem.id ? updatedItem : item)
    );
  };

  const handleReset = () => {
    if(window.confirm("Isso apagará todas as edições e fotos salvas. Tem certeza?")) {
        const resetItems = generateInitialItems();
        setItems(resetItems);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(resetItems));
    }
  };

  if (!isLoaded) return <div className="min-h-screen flex items-center justify-center text-gray-500">Carregando...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onReset={handleReset} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Tudo deve ir! <span className="text-indigo-600">Mudança</span> à vista.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Confira abaixo a lista dos nossos móveis.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-800 rounded-full text-sm font-semibold border border-yellow-200">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            Estamos aceitando ofertas!
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map(item => (
            <ItemCard 
              key={item.id} 
              item={item} 
              onEdit={handleEditClick} 
            />
          ))}
        </div>

        {/* Empty State / Footer Call to action */}
        {items.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Nenhum item encontrado. Algo deu errado.
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Móveis Jon & Néia. Feito com React & Gemini.</p>
        </div>
      </footer>
      
    </div>
  );
};

export default App;
