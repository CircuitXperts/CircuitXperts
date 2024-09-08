import styled from "styled-components";

export const IntegrityPageStyle = styled.div`
  .text-sub {
    font-size: 20px;
    font-family: ${(props) => props.theme.font.barlowBold};
    color: ${(props) => props.theme.color.blue};
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
