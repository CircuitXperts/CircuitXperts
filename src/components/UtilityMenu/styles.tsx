import styled from "styled-components";
import { BarlowRegular } from "@/src/styles/fonts";

export const UtilityMenuStyle = styled.div`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.color.darkerblue},
    ${(props) => props.theme.color.darkestblue}
  );

  .utility-menu-bar {
    padding: 0;
    display: block;

    @media ${(props) => props.theme.device.lg} {
      padding: 0 15px;
    }
  }

  ul {
    margin: 0 !important;
    padding: 0 15px;

    @media ${(props) => props.theme.device.lg} {
      justify-content: flex-end !important;
      max-width: 1217px;
      margin: 0 auto !important;
      display: flex !important;
      line-height: 24px;
    }

    li {
      display: none;

      @media ${(props) => props.theme.device.lg} {
        display: block;
        line-height: 16px;
      }

      a.utility-nav-link {
        font-size: 13px;
        color: ${(props) => props.theme.color.white};
        font-family: ${BarlowRegular.style.fontFamily};
        padding: 12px;
        line-height: 16px;
        display: block;

        &:hover {
          text-decoration: underline;
        }

        &:active {
          color: ${(props) => props.theme.color.lightred};
        }
      }

      &:last-child {
        a {
          padding-right: 0;
        }
      }
    }
  }
`;
