// src/types/CartItem.ts
export interface CartItem {
  id: number; // Ensure this is also a number
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  imageUrl: string; // Include imageUrl if you want to store it in CartItem
  description: string; // Include description if you want to store it in CartItem
}
