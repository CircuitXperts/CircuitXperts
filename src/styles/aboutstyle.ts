import styled from "styled-components";

export const AboutStyle = styled.div`
  .main-content {
    .left-content {
      @media ${(props) => props.theme.device.lg} {
        gap: 45px;
      }

      .head-text {
        font-size: 18px;

        @media ${(props) => props.theme.device.lg} {
          border-right: 4px solid ${(props) => props.theme.color.orange};
        }
      }

      .image-right {
        @media ${(props) => props.theme.device.lg} {
          max-width: 500px;
          width: 100%;
        }
      }
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
        font-size: 20px;
        font-family: ${(props) => props.theme.font.barlowBold};
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
          font-size: 36px;
        }
      }
    }
  }

  .services img,
  .contact img {
    width: 100%;
    height: auto;
  }
  .service-item {
    margin-bottom: 20px;
  }

  .banner-wrapper {
    .banner-text {
      .banner-wrap {
        .banner-content {
          margin: 0 16px;
          padding: 82px 0 40px;
          top: 0;

          @media ${(props) => props.theme.device.lg} {
            padding: 157px 0 77px;
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
