export interface FurnitureItem {
  id: string;
  originalLink: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string; // Base64 or external URL
  isSold?: boolean;
}

export interface EditModalProps {
  item: FurnitureItem;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedItem: FurnitureItem) => void;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}