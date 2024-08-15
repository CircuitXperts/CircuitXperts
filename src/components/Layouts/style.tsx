import styled, { css } from "styled-components";

export const LayoutStyle = styled.div`
  .container-content {
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
    padding-top: 95px;

    @media ${(props) => props.theme.device.lg} {
      padding-top: 110px;
    }

    @media ${(props) => props.theme.device.xxl} {
      padding-top: 111px;
    }
  }
`;
