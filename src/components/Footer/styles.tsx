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

  // .footer-section {
  //   @media ${(props) => props.theme.device.lg} {
  //     max-width: 1364px;
  //     margin: 0 auto;
  //   }

  //   .footer-last {
  //     p {
  //       font-size: 16px;
  //       font-family: ${BarlowRegular.style.fontFamily};
  //       line-height: 24px;
  //       padding-bottom: 25px;
  //       margin-bottom: 0;

  //       &:first-child {
  //         font-family: ${BarlowBold.style.fontFamily};
  //       }
  //     }

  //     .links {
  //       display: flex;
  //       flex-direction: column;
  //       padding-bottom: 0;
  //       margin-bottom: 30px;
  //       padding-top: 40px;

  //       @media ${(props) => props.theme.device.lg} {
  //         padding-top: 0;
  //         flex-direction: row;
  //         align-items: center;
  //         justify-content: flex-start;
  //       }

  //       a {
  //         font-size: 16px;
  //         font-family: ${BarlowBold.style.fontFamily};
  //         color: ${(props) => props.theme.color.white};
  //         padding-right: 20px;

  //         &:last-child {
  //           padding-top: 25px;

  //           @media ${(props) => props.theme.device.lg} {
  //             padding-top: 0;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  // .bottom-term-cont {
  //   @media ${(props) => props.theme.device.lg} {
  //     max-width: 1364px;
  //     margin: 0 auto;
  //   }

  //   .bottom-last-icon {
  //     .icons {
  //       width: 25px;
  //     }
  //   }
  // }

  //   .footer {
  //     background-color: #333;
  //     color: #fff;
  //     padding: 20px 0;
  //     text-align: center;
  // }

  // .footer-container {
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-around;
  //     max-width: 1200px;
  //     margin: 0 auto;
  //     padding: 20px;
  // }

  // .footer-section {
  //     flex: 1;
  //     min-width: 200px;
  //     margin: 10px;
  // }

  // .footer-section h3 {
  //     margin-bottom: 15px;
  // }

  // .footer-section p, .footer-section ul, .footer-section a {
  //     color: #bbb;
  //     text-decoration: none;
  // }

  // .footer-section ul {
  //     list-style-type: none;
  //     padding: 0;
  // }

  // .footer-section ul li {
  //     margin-bottom: 10px;
  // }

  // .footer-section a:hover {
  //     color: #fff;
  // }

  // .footer-bottom {
  //     background-color: #222;
  //     padding: 10px 0;
  //     font-size: 14px;
  // }

  // /* Media Queries for responsiveness */
  // @media ${(props) => props.theme.device.md} {
  //     .footer-container {
  //         flex-direction: column;
  //         align-items: center;
  //     }

  //     .footer-section {
  //         margin-bottom: 20px;
  //         text-align: center;
  //     }

  //     .footer-section ul {
  //         padding: 0;
  //     }
  // }

  // @media ${(props) => props.theme.device.sm} {
  //     .footer-section {
  //         min-width: 100%;
  //     }

  //     .footer-section h3 {
  //         font-size: 1.2em;
  //     }

  //     .footer-section p, .footer-section a {
  //         font-size: 0.9em;
  //     }

  //     .footer-bottom {
  //         font-size: 12px;
  //     }
  // }

  .footer-content {
    max-width: 1364px;
    margin: 0 auto;
  }
`;
