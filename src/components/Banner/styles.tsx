import styled from "styled-components";

export const BannerStyle = styled.div`
  .banner-wrapper {
    position: relative;

    .banner-Image {
      img {
        width: 100%;
        display: block;
        height: 200px;

        @media ${(props) => props.theme.device.lg} {
          height: 300px;
        }
      }
    }

    .banner-grad {
      max-width: 1440px;
      margin: 0 auto;

      .banner-gradient {
        position: absolute;
        top: 0;
        width: 100%;
        height: 44px;
        background: linear-gradient(
          270deg,
          ${(props) => props.theme.color.darkblue},
          ${(props) => props.theme.color.green}
        );
        max-width: 90px;
        padding: 12px 16px;

        @media ${(props) => props.theme.device.lg} {
          max-width: 203px;
          height: 85px;
          padding: 12px 16px 12px 0;
        }
      }
    }

    .banner-text {
      max-width: 343px;
      height: 0;

      @media ${(props) => props.theme.device.lg} {
        max-width: 1440px;
        margin: 0 auto;
      }

      .banner-wrap {
        position: absolute;
        margin: 0;
        text-align: left;
        top: 0;

        .title-container {
          padding: 12px 16px;

          @media ${(props) => props.theme.device.lg} {
            padding: 12px 16px 12px 0;
          }

          .title-text {
            color: ${(props) => props.theme.color.white};
            font-size: 18px;
            font-weight: 700;
            line-height: 110%;
            margin-bottom: 0;

            @media ${(props) => props.theme.device.lg} {
              font-size: 45px;
            }
          }
        }

        .banner-content {
          width: 100%;

          .main-text {
            font-size: 24px;
            line-height: 110%;
            font-weight: 700;
            color: ${(props) => props.theme.color.white};
            margin-bottom: 0;
            margin-top: 80px;

            @media ${(props) => props.theme.device.lg} {
              font-size: 36px;
              margin-top: 160px;
            }
          }
        }
      }
    }

    .banner-subtext {
      font-size: 16px;
      line-height: 128%;
      font-weight: 400;
      color: ${(props) => props.theme.color.white};
      padding: 0;

      @media ${(props) => props.theme.device.lg} {
        font-size: 18px;
        line-height: 136%;
      }
    }
  }
`;
