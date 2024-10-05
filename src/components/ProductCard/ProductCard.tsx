// src/components/ProductCard.tsx
import React from "react";
import { Product } from "@/src/types/Product";
import { ProductCardStyles } from "./styles";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <ProductCardStyles>
      <div className="product-card">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </ProductCardStyles>
  );
};

export default ProductCard;
