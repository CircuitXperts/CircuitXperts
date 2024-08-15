import { propagateServerField } from 'next/dist/server/lib/render-server';
import styled from 'styled-components';

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  display: flex;
  flex-direction: column;
  min-width: 160px;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: none; /* Add this line to remove the border */
`;

export const DropdownLink = styled.a`
  color: #000000;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  background-color: inherit;

  &:hover {
    background-color: #f1f1f1;
  }
`;
