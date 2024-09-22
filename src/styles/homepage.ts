import styled from "styled-components";

export const HomePageStyle = styled.div`
  .home-content {
    max-width: 1216px;
    margin: 0 auto;

    .design-circuit {
      .button-content {
        .button {
          background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
          border: 0;
          border-radius: 12px;
          color: #ffffff;
          cursor: pointer;
          display: inline-block;
          font-size: 18px;
          font-weight: 500;
          line-height: 2.5;
          outline: transparent;
          padding: 0 1rem;
          text-align: center;
          text-decoration: none;
          transition: box-shadow 0.2s ease-in-out;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          white-space: nowrap;
        }

        .button:not([disabled]):focus {
          box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
            -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
            0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
        }

        .button:not([disabled]):hover {
          box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
            -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
            0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
        }
      }
    }
  }
`;
