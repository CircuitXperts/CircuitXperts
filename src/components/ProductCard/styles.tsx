import styled from "styled-components";

export const ProductCardStyles = styled.div`
  .product-card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    max-width: 300px; /* Adjust based on your layout */
    text-align: center;
    margin: 15px; /* Add some spacing between cards */
  }

  .product-image {
    width: 100%;
    height: auto;
  }

  .product-details {
    padding: 15px;
  }

  .product-name {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .product-price {
    font-size: 1.125rem;
    color: #007bff; /* Bootstrap primary color */
    margin: 0.5rem 0;
  }

  .product-description {
    font-size: 0.875rem;
    color: #555;
    margin: 0.5rem 0;
  }

  .rating {
    color: #f39c12; /* Star color */
  }

  .add-to-cart {
    background-color: #007bff; /* Button color */
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .add-to-cart:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }

  .order-button {
    background-color: #28a745; /* Green */
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .order-button:hover {
    background-color: #218838; /* Darker green */
  }
`;
