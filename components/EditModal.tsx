import React, { useState, useEffect } from 'react';
import { FurnitureItem, EditModalProps, LoadingState } from '../types';
import { generateSalesDescription } from '../services/geminiService';

const EditModal: React.FC<EditModalProps> = ({ item, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<FurnitureItem>(item);
  const [aiState, setAiState] = useState<LoadingState>(LoadingState.IDLE);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    setFormData(item);
  }, [item]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, isSold: e.target.checked }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateDescription = async () => {
    if (!formData.title) return;
    
    setAiState(LoadingState.LOADING);
    try {
      const description = await generateSalesDescription(formData.title, formData.price);
      setFormData(prev => ({ ...prev, description }));
      setAiState(LoadingState.SUCCESS);
    } catch (error) {
      setAiState(LoadingState.ERROR);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Editar Detalhes</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <form id="edit-form" onSubmit={handleSubmit} className="space-y-4">
            
            {/* Image Preview & Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Foto do Produto</label>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                  <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-indigo-50 file:text-indigo-700
                        hover:file:bg-indigo-100"
                    />
                    <p className="text-xs text-gray-400 mt-1">Carregue uma imagem real do móvel.</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">O que é?</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ex: Sofá Retrátil, Mesa de Jantar..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preço</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Ex: R$ 500,00"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Link Original (Facebook)</label>
              <input
                type="text"
                name="originalLink"
                value={formData.originalLink}
                onChange={handleChange}
                placeholder="https://facebook.com/..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Descrição</label>
                <button
                  type="button"
                  onClick={handleGenerateDescription}
                  disabled={aiState === LoadingState.LOADING || !formData.title}
                  className="text-xs flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {aiState === LoadingState.LOADING ? (
                     <span>✨ Gerando...</span>
                  ) : (
                     <span>✨ Melhorar com IA</span>
                  )}
                </button>
              </div>
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
              />
            </div>

            <div className="flex items-center">
              <input
                id="isSold"
                name="isSold"
                type="checkbox"
                checked={formData.isSold}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="isSold" className="ml-2 block text-sm text-gray-900">
                Marcar como Vendido
              </label>
            </div>

          </form>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            form="edit-form"
            className="px-4 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 font-medium text-sm shadow-sm transition"
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
