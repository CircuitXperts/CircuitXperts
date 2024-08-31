import React from "react";
import { ContactStyles } from "./styles";

export const ContactUs = () => {
  return (
    <ContactStyles>
      <div className="contact-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc5O4Jm0fxIMPLHH7TwLxW4yeRrJK7RSDs0AsGmzFUuiJcXEg/viewform?embedded=true"
          width="1216"
          height="1450"
        ></iframe>
      </div>
    </ContactStyles>
  );
};
