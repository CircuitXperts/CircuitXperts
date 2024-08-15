import styled from "styled-components";

export const HeaderStyle = styled.header`
  border-bottom: 1px solid #dee2e6;

  #header-inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;
    background-color: ${(props) => props.theme.color.white};
    padding: 0;

    &.navup {
      top: -100%;
      transform: translateY(-100%);
      transition: transform 0.5s ease, z-index 0s linear;

      @media ${(props) => props.theme.device.mdmax} {
        top: -88px;
      }
    }

    &.navdown {
      top: 0;
      transform: translateY(0);
      transition: transform 0.1s ease, z-index 0s linear 0.1s;
    }
  }

  .head-wrap {
    position: relative;

    /* @media (max-width: 767px) {
      padding-top: 24px;
    } */
  }
`;
