import styled from "styled-components";
import { BarlowBold, BarlowRegular } from "@/src/styles/fonts";

export const FooterLinkStyle = styled.div`
  color: white;
  padding: 34px 20px 36px;
  background: linear-gradient(
      90deg,
      ${(props) => props.theme.color.darkblue},
      ${(props) => props.theme.color.green}
    )
    0% 0% no-repeat;

  @media ${(props) => props.theme.device.lg} {
    padding-top: 54px;
  }

  .footer-content {
    max-width: 1364px;
    margin: 0 auto;
  }
`;
