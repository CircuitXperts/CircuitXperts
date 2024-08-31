import styled from "styled-components";

export const CardStyles = styled.div`
  .cards-section {
    .one-cards {
      padding: 20px 10px;

      @media ${(props) => props.theme.device.lg} {
        max-width: 460px;
        width: 100%;
        flex-direction: column;
        justify-content: center;
      }

      .card-content {
        .images-icon {
        }

        .head-text {
          font-size: 20px;
          font-family: ${(props) => props.theme.font.barlowBold};
          color: ${(props) => props.theme.color.orange};
          border-bottom: 4px solid ${(props) => props.theme.color.darkerblue};
          box-shadow: 0px 5px 0px;
        }
      }

      .card-description {
      }

      .show-card-link {
        transition: color 0.3s;
        background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
        border: 0;
        border-radius: 12px;
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
        max-width: 325px;
        width: 100%;
        margin: 0 auto;
        color: ${(props) => props.theme.color.blue};
        font-family: ${(props) => props.theme.font.barlowBold};
        box-shadow: 8px 6px 4px;

        &:hover {
          color: ${(props) => props.theme.color.orange};
          background: linear-gradient(
            to bottom right,
            ${(props) => props.theme.color.darkerblue},
            ${(props) => props.theme.color.lightblue}
          );
          text-decoration: none;
        }
      }
    }
  }
  @media ${(props) => props.theme.device.lg} {
  }
`;
