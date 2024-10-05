// src/data/products.tsx
import { Product } from "../types/Product";

const amdProducts: Product[] = [
  {
    id: 1, // Make sure this is a number
    name: "Artix",
    price: 29.99,
    imageUrl: "/images/artix.webp",
    description: "Description for Product 1",
  },
  {
    id: 2, // Make sure this is a number
    name: "Artix Ultrascale",
    price: 49.99,
    imageUrl: "/images/artix-ultrascale.webp",
    description: "Description for Product 2",
  },
  {
    id: 3, // Make sure this is a number
    name: "Kintex",
    price: 29.99,
    imageUrl: "/images/kintex.webp",
    description: "Description for Product 1",
  },
  {
    id: 4, // Make sure this is a number
    name: "Kintex Ultrascale",
    price: 49.99,
    imageUrl: "/images/kintex-ultrascale.jpg",
    description: "Description for Product 2",
  },
  {
    id: 5, // Make sure this is a number
    name: "Virtex",
    price: 29.99,
    imageUrl: "/images/virtex.png",
    description: "Description for Product 1",
  },
  {
    id: 6, // Make sure this is a number
    name: "Virtex Ultrascale",
    price: 49.99,
    imageUrl: "/images/virtex-ultrascale.png",
    description: "Description for Product 2",
  },
  {
    id: 7, // Make sure this is a number
    name: "Zynq 7000",
    price: 29.99,
    imageUrl: "/images/Zynq-7000.webp",
    description: "Description for Product 1",
  },
  {
    id: 8, // Make sure this is a number
    name: "Zynq Ultrascale+MPSoc",
    price: 49.99,
    imageUrl: "/images/product2.jpg",
    description: "Description for Product 2",
  },
  {
    id: 9, // Make sure this is a number
    name: "Zynq Ultrascale+RFSoc",
    price: 29.99,
    imageUrl: "/images/AMD+Zynq+RFSoC.jpg",
    description: "Description for Product 1",
  },
  {
    id: 10, // Make sure this is a number
    name: "Versal",
    price: 49.99,
    imageUrl: "/images/versal.png",
    description: "Description for Product 2",
  },
];

export default amdProducts;
