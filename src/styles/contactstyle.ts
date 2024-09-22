import styled from "styled-components";

export const ContactUsStyle = styled.div`
  .main-content {
    padding-bottom: 25px;

    @media ${(props) => props.theme.device.lg} {
      padding-bottom: 30px;
    }
    .contact-info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      > div {
        flex: 1;
        margin: 10px;
      }

      .text-link {
        font-size: 22px;
        font-family: ${(props) => props.theme.font.barlowBold};

        @media ${(props) => props.theme.device.lg} {
        }
      }

      .phn-number,
      .phn-email,
      .phn-add {
        font-family: ${(props) => props.theme.font.barlowBold};

        .phone,
        .mail {
          color: ${(props) => props.theme.color.link};
          transition: color 0.3s;

          &:hover {
            color: ${(props) => props.theme.color.orange};
            text-decoration: none;
          }
        }

        .text-address {
          color: ${(props) => props.theme.color.link};
        }

        .icon {
          font-size: 45px;
        }
      }
    }

    .get-touch {
      .button-content {
        .button {
          background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
          border: 0;
          border-radius: 12px;
          color: #ffffff;
          cursor: pointer;
          display: inline-block;
          font-size: 20px;
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

  .banner-wrapper {
    .banner-text {
      .banner-wrap {
        .banner-content {
          margin: 0 16px;
          padding: 82px 0 40px;
          top: 0;

          @media ${(props) => props.theme.device.lg} {
            padding: 220px 0 77px;
            margin: 0 auto;
          }

          @media (min-width: 992px) and (max-width: 1250px) {
            padding-left: 16px;
          }
        }
      }
    }
  }
`;
