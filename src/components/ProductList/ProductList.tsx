// src/components/ProductList.tsx
import React from "react";
import { Product } from "@/src/types/Product";
import ProductCard from "@/src/components/ProductCard/ProductCard"; // Adjust path as necessary

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void; // Function to handle adding products to the cart
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="product-list d-flex flex-wrap">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
