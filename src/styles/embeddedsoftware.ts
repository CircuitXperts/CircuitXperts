import styled from "styled-components";

export const EmbeddedStyle = styled.div`
  .embedded-page {
    .container {
      width: 100%;
      margin: auto;
      overflow: hidden;
    }

    .main-content {
      padding: 20px;
      background: #fff;
      margin-top: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
      color: #333;
    }

    .embedded-software {
      margin: 20px 0;
    }

    .software {
      background: #f9f9f9;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    .software h3 {
      margin-top: 0;
    }

    .software img {
      max-width: 100%;
      height: auto;
    }

    .software-description {
      margin-top: 10px;
    }

    .container {
      width: 100%;
      margin: auto;
      overflow: hidden;
    }

    .core {
      background: #f9f9f9;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    .core h3 {
      margin-top: 0;
    }

    .core img {
      max-width: 100%;
      height: auto;
    }

    .core-description {
      margin-top: 10px;
    }

    .code {
      background: #f9f9f9;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    .code h3 {
      margin-top: 0;
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
