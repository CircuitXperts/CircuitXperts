// src/components/OrderDetailsModal/OrderDetailsModal.tsx
import React, { useState } from "react";
import Modal from "react-modal";
import { OrderStyle } from "./styles";

interface CustomerDetailsModalProps {
  isOpen: boolean;
  onSubmit: (details: {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
  }) => void;
  onClose: () => void;
}

const CustomerDetailsModal: React.FC<CustomerDetailsModalProps> = ({
  isOpen,
  onSubmit,
  onClose,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidContact = (contact: string) => {
    // Check if the contact number is exactly 10 digits
    const contactRegex = /^\d{10}$/;
    return contactRegex.test(contact);
  };

  const handleSubmit = () => {
    // Clear previous errors
    setError("");

    if (!firstName || !lastName || !email || !contact) {
      setError("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!isValidContact(contact)) {
      setError("Contact number must be 10 digits");
      return;
    }

    // Submit customer details if validation passes
    onSubmit({ firstName, lastName, email, contact });
  };

  return (
    <OrderStyle>
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <h2>Customer Details</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Display error message */}
        <label>
          First Name:
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </Modal>
    </OrderStyle>
  );
};

export default CustomerDetailsModal;
