import React from 'react';

interface HeaderProps {
    onReset: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReset }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </div>
            <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Móveis Jon & Néia</h1>
                <p className="text-xs text-gray-500 font-medium">Garage Sale • Mudança</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://wa.me/554187912585" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02C17.18 3.03 14.69 2 12.04 2zM12.05 19.46c-1.38 0-2.73-.37-3.91-1.07l-.28-.16-2.91.76.77-2.84-.18-.29c-.75-1.18-1.15-2.55-1.15-3.95 0-4.07 3.31-7.38 7.38-7.38 1.97 0 3.83.77 5.22 2.16 1.39 1.39 2.16 3.26 2.16 5.23 0 4.07-3.3 7.38-7.1 7.54z"/>
                </svg>
                Contato (Néia)
            </a>
            <button 
                onClick={onReset}
                className="text-xs text-gray-400 hover:text-gray-600 underline"
                title="Resetar dados locais para demonstração"
            >
                Reset App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;