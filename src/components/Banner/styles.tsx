import styled from "styled-components";

export const BannerStyle = styled.div`
  .banner-wrapper {
    min-height: 169px;
    position: relative;

    @media ${(props) => props.theme.device.lg} {
      min-height: 245px;
    }

    .banner-img {
      img {
        height: 200px;
        width: 100%;

        @media ${(props) => props.theme.device.lg} {
          height: 300px;
        }
      }
    }

    .banner-gradient {
      position: absolute;
      top: 0;
      left: 0;
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
        height: 50px;
        padding: 12px 16px 12px 0;
      }
    }

    .title-container {
      padding: 12px 16px;

      @media ${(props) => props.theme.device.lg} {
        padding: 12px 16px 12px 0;
      }

      .title-text {
        color: ${(props) => props.theme.color.white};
        font-family: ${(props) => props.theme.font.barlowBold};
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 110%;
        margin-bottom: 0;

        @media ${(props) => props.theme.device.lg} {
          font-size: 24px;
        }
      }
    }

    .heading-wrap {
      top: 25%;

      .site-container {
        padding: 0;
        position: relative;

        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 1px;
          transform: translateX(-100%);
        }

        .heading {
          color: ${(props) => props.theme.color.white};
          font-family: ${(props) => props.theme.font.barlowBold};
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: 110%;
          margin-bottom: 0;
          max-width: max-content;
          padding: 12px 16px;
          position: relative;

          @media ${(props) => props.theme.device.lg} {
            font-size: 50px;
            padding: 12px 16px;
          }

          @media (min-width: 1250px) {
            padding-left: 0;
          }
        }
      }
    }

    .banner-text {
      height: 0;

      @media ${(props) => props.theme.device.lg} {
        max-width: 1216px;
        margin: 0 auto;
      }

      .banner-wrap {
        margin: 0;
        text-align: left;

        .banner-content {
          position: absolute;
          top: 45px;
          max-width: 343px;

          @media ${(props) => props.theme.device.md} {
            max-width: 100%;
            top: 51px;
            padding-left: 16px;
          }

          @media (min-width: 1250px) {
            padding-left: 0;
          }

          .banner-text1 {
            font-size: 16px;
            line-height: 100%;
            font-style: normal;
            font-family: ${(props) => props.theme.font.barlowBold};
            font-weight: 700;
            color: ${(props) => props.theme.color.white};
            margin-bottom: 0;

            @media ${(props) => props.theme.device.lg} {
              font-size: 20px;
            }
          }

          .banner-text2 {
            font-size: 24px;
            line-height: 110%;
            font-family: ${(props) => props.theme.font.barlowBold};
            font-weight: 700;
            color: ${(props) => props.theme.color.white};
            margin-bottom: 0;

            @media ${(props) => props.theme.device.lg} {
              font-size: 36px;
            }
          }
        }
      }
    }
  }
`;
