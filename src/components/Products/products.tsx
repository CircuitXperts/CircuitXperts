// src/pages/products.mdx (or ProductsPage.tsx)
import React from "react";
import amdProducts from "@/src/data/products"; // Adjust import based on your structure
import interfaceProducts from "@/src/data/interfaceProducts"; // Import the Interface products
import intelProducts from "@/src/data/intelproducts"; // Import the Interface products
import microProducts from "@/src/data/microproducts"; // Import the Interface products
import ProductList from "@/src/components/ProductList/ProductList";
import { Product } from "@/src/types/Product";
import { useDispatch } from "react-redux";
import { addToCart } from "@/src/store/cartSlice"; // Adjust path as needed
import { CartItem } from "@/src/types/CartItem"; // Import the CartItem type

export const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    // Transform the Product into a CartItem
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, // Set initial quantity
      totalPrice: product.price, // Set total price equal to product price initially
      imageUrl: product.imageUrl, // Include imageUrl if necessary
      description: product.description, // Include description if necessary
    };

    // Dispatch the addToCart action with the CartItem
    dispatch(addToCart(cartItem));
  };

  return (
    <div>
      <h1>FPGA</h1>
      <h2>AMD/Xilinx</h2>
      <ProductList products={amdProducts} onAddToCart={handleAddToCart} />
      <h2>Intel/Altera</h2>
      <ProductList products={intelProducts} onAddToCart={handleAddToCart} />
      <h2>Microsemi/Microchip/Actel</h2>
      <ProductList products={microProducts} onAddToCart={handleAddToCart} />
      {/* Add the heading for Interface */}
      <h1>Interface</h1>
      <ProductList
        products={interfaceProducts}
        onAddToCart={handleAddToCart}
      />{" "}
      {/* Display only Interface products */}
    </div>
  );
};

export default ProductsPage;
