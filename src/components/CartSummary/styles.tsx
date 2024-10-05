import styled from "styled-components";

export const CartSumStyles = styled.div`
  .cart-summary {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }

  .cart-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  .cart-table th,
  .cart-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  .cart-table th {
    background-color: #f2f2f2;
  }

  .price-details {
    margin: 20px 0;
  }

  .price-detail {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .total {
    font-weight: bold;
  }

  .btn-ord {
    display: flex;
    justify-content: center;
    gap: 30px;

    .order-button {
      background-color: #0070f3; /* Next.js blue */
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #005bb5; /* Darker blue on hover */
      }
    }

    .clear-button {
      background-color: ${(props) =>
        props.theme.color.orange}; /* Next.js blue */
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #005bb5; /* Darker blue on hover */
      }
    }
  }

  .table-container {
    width: 100%;
    overflow-x: auto; /* Enables horizontal scrolling */
    -webkit-overflow-scrolling: touch; /* For smooth scrolling on mobile */
  }
`;
