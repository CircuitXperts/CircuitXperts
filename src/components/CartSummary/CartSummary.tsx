// src/components/CartSummary.tsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/src/store";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/src/store/cartSlice";
import { CartItem } from "@/src/types/CartItem";
import generatePDF from "@/src/utils/generatePDF"; // Import the PDF generation function
import emailjs from "emailjs-com";
import CustomerDetailsModal from "@/src/components/OrderDetailsModal/OrderDetailsModal"; // Import your modal component
import { CartSumStyles } from "./styles";

const CartSummary: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState(1); // Initialize order number

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleOrderNow = () => {
    setModalOpen(true);
  };

  const handleClearAll = () => {
    dispatch(clearCart()); // Dispatch action to clear the cart
  };

  const handleCustomerDetailsSubmit = async (details: {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
  }) => {
    // Calculate totals
    const subtotal = cartItems.reduce(
      (total, item) => total + item.totalPrice,
      0
    );
    const gst = subtotal * 0.18;
    const deliveryCharges = 100;
    const totalAmount = subtotal + gst + deliveryCharges;

    // Generate PDF with customer details
    const pdfBase64 = await generatePDF(
      cartItems,
      subtotal,
      gst,
      deliveryCharges,
      totalAmount,
      details,
      orderNumber
    );

    // Send email with PDF attachment
    sendEmail(cartItems, subtotal, gst, deliveryCharges, totalAmount, details);

    setOrderNumber((prev) => prev + 1); // Increment order number
    setModalOpen(false); // Close the modal
  };

  const sendEmail = (
    cartItems: CartItem[],
    subtotal: number,
    gst: number,
    deliveryCharges: number,
    totalAmount: number,
    details: {
      firstName: string;
      lastName: string;
      email: string;
      contact: string;
    }
  ) => {
    // Format cart items as HTML
    const formattedCartItems = `
      <table style="width:100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px;">Product</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Price</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Quantity</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${cartItems
            .map(
              (item) =>
                `<tr>
                  <td style="border: 1px solid #ddd; padding: 8px;">${
                    item.name
                  }</td>
                  <td style="border: 1px solid #ddd; padding: 8px;">$${item.price.toFixed(
                    2
                  )}</td>
                  <td style="border: 1px solid #ddd; padding: 8px;">${
                    item.quantity
                  }</td>
                  <td style="border: 1px solid #ddd; padding: 8px;">$${item.totalPrice.toFixed(
                    2
                  )}</td>
                </tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;

    // Template parameters for the email
    const templateParams = {
      to_name: `${details.firstName} ${details.lastName}`,
      from_name: "Circuit Xperts",
      message: formattedCartItems, // Inject the formatted cart items
      subtotal: subtotal.toFixed(2),
      gst: gst.toFixed(2),
      deliveryCharges: deliveryCharges.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      email: details.email,
      contact: details.contact,
      orderNumber: orderNumber, // Include order number
    };

    // Send email via EmailJS
    emailjs
      .send(
        "service_qk6kvvf", // Replace with your service ID
        "template_egliuzl", // Replace with your template ID
        templateParams,
        "2qhpB288cKarqAQ1D" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
  const gst = subtotal * 0.18;
  const deliveryCharges = 100;
  const totalAmount = subtotal + gst + deliveryCharges;

  return (
    <CartSumStyles>
      <div className="cart-summary">
        {cartItems.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <>
            <h2>Cart Items</h2>
            <div className="table-container">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product Details</th>
                    <th>Price</th>
                    <th>QTY (Nos)</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item: CartItem) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>${item.totalPrice.toFixed(2)}</td>
                      <td>
                        <button onClick={() => handleRemove(item.id)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Price Details</h2>
            <div className="price-details">
              <div className="price-detail">
                <span>Price ({cartItems.length} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="price-detail">
                <span>GST (18%)</span>
                <span>${gst.toFixed(2)}</span>
              </div>
              <div className="price-detail">
                <span>Delivery Charges</span>
                <span>${deliveryCharges.toFixed(2)}</span>
              </div>
              <div className="price-detail total">
                <span>Total Amount</span>
                <strong>${totalAmount.toFixed(2)}</strong>
              </div>
            </div>
            <div className="btn-ord">
              <button className="order-button" onClick={handleOrderNow}>
                Order Now
              </button>
              <button className="clear-button" onClick={handleClearAll}>
                Clear All
              </button>
            </div>
            {/* Customer Details Modal */}
            {isModalOpen && (
              <CustomerDetailsModal
                isOpen={isModalOpen}
                onSubmit={handleCustomerDetailsSubmit}
                onClose={() => setModalOpen(false)}
              />
            )}
          </>
        )}
      </div>
    </CartSumStyles>
  );
};

export default CartSummary;
