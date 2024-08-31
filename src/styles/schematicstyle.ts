import styled from "styled-components";

export const SchematicStyle = styled.div`
  .main-content {
    .first-section,
    .key-comp,
    .design-process {
      .head-text {
        font-size: 20px;
        font-family: ${(props) => props.theme.font.barlowBold};
        color: ${(props) => props.theme.color.blue};
        border-bottom: 4px solid ${(props) => props.theme.color.orange};
        box-shadow: 0px 5px 0px;
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
