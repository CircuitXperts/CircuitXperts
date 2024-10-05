import styled from "styled-components";

export const OrderStyle = styled.div`
  /* src/components/OrderDetailsModal.css */
  /* src/components/CustomerDetailsModal.css */
  .name-fields {
    display: flex;
    justify-content: space-between;
  }

  .name-fields > div {
    flex: 1; /* Allows both fields to take equal space */
    margin-right: 10px; /* Adds space between the two input fields */
  }

  .name-fields > div:last-child {
    margin-right: 0; /* Removes margin for the last field */
  }

  label {
    display: block; /* Ensures the label is on its own line */
    margin-bottom: 5px; /* Space between label and input */
  }

  input {
    width: 100%; /* Ensures input fields take full width */
    padding: 8px;
    border: 1px solid #ccc; /* Border color for inputs */
    border-radius: 4px; /* Rounded corners for inputs */
  }

  .error {
    color: red; /* Error message styling */
    margin-bottom: 10px; /* Space below error message */
  }

  label {
    display: block;
    margin-bottom: 8px; /* Space between label and input */
  }

  input {
    width: 100%; /* Make input fields full-width */
    padding: 8px; /* Add some padding */
    margin-bottom: 16px; /* Space between inputs */
    border: 1px solid #ccc; /* Border styling */
    border-radius: 4px; /* Rounded corners */
  }

  p {
    color: red; /* Color for error messages */
    margin: 10px 0; /* Spacing around error messages */
  }
`;
