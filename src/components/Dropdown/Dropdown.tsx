// import React, { useState } from 'react';
// import './Dropdown.css'; // Import your CSS file for styling

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="dropdown">
//       <button className="dropdown-btn" onClick={toggleDropdown}>
//         Prescribing Information
//         <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>&#9660;</span>
//       </button>
//       {isOpen && (
//         <div className="dropdown-content">
//           {/* Dropdown content goes here */}
//           <a href="#">Link 1</a>
//           <a href="#">Link 2</a>
//           <a href="#">Link 3</a>
//         </div>
//       )}
//     </div>
//   );
// };

// Dropdown.tsx
import React, { useState } from 'react';
import { DropdownLink, DropdownMenu } from "./styles";
import Link from "next/link";

export const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <Link href={"https://www.janssen.com/oncology"} target="_blank">
        Prescribing Information
            </Link>
      </button>
      {isOpen && (
        <DropdownMenu>
          {/* Dropdown items go here */}
          <DropdownLink href="#" style={{ backgroundColor: '#3c6884' }}>Item Prescribing Information</DropdownLink>
          <DropdownLink href="#" style={{ backgroundColor: '#3c6884' }}>Item Prescribing Information</DropdownLink>
        </DropdownMenu>
      )}
    </div>
  );
};

