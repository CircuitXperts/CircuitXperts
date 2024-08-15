import styled from "styled-components";

export const NotFoundPageStyle = styled.div`
  .content {
    padding: 40px 55px;
    text-align: center;
    line-height: 24px;

    @media ${(props) => props.theme.device.lg} {
      padding: 90px 55px 40px;
    }

    .graphic-wrap {
      max-width: 500px;
      margin: 0 auto;

      .picture-jcr {
        @media ${(props) => props.theme.device.mdmax} {
          margin-left: -25px;
          margin-right: -25px;
        }

        img {
          width: 100%;
        }
      }

      p {
        margin: 0;
        line-height: 24px;
      }
    }

    h1 {
      margin-top: 40px;
      margin-bottom: 30px;
      font-size: 24px;
      line-height: 30px;
      font-family: ${(props) => props.theme.font.barlowBold};
      color: ${(props) => props.theme.color.bodyColor};

      @media ${(props) => props.theme.device.lg} {
        margin-top: 45px;
        font-size: 36px;
      }
    }

    p:last-child {
      margin: 0;
      line-height: 24px;
      color: ${(props) => props.theme.color.bodyColor};
    }
  }
`;
