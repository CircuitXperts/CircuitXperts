import styled from "styled-components";

export const MenuStyle = styled.div`
  .container.koro-header {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
    background: ${(props) => props.theme.color.white};

    .header-navigation {
      @media ${(props) => props.theme.device.mdmax} {
        background: linear-gradient(
          90deg,
          ${(props) => props.theme.color.darkerblue},
          ${(props) => props.theme.color.green}
        );
      }

      @media ${(props) => props.theme.device.mdmax} {
        width: 100%;
        position: absolute;
        max-height: 100vh;
      }

      @media ${(props) => props.theme.device.lg} {
        display: flex;
        max-width: 1364px;
        margin: 0 auto;
        background: none;
      }

      .header-logo {
        @media ${(props) => props.theme.device.mdmax} {
          background: ${(props) => props.theme.color.white};
          width: 100%;
          box-shadow: 0 1px 4px 1px rgb(0 0 0 / 10%);
        }

        img.site-logo {
          max-width: 194px;
          max-height: 67px;
        }
      }
    }
  }

  .main-menu {
    display: block !important;
    padding: 0;

    @media ${(props) => props.theme.device.lg} {
      padding: 0 15px;
    }

    .top-utility-menu {
      @media ${(props) => props.theme.device.lg} {
        margin-right: -15px;
        margin-left: -15px;
      }
    }

    .techcare {
      background: ${(props) => props.theme.color.orange};
      font-size: 12px;
      color: ${(props) => props.theme.color.white};
      font-family: ${(props) => props.theme.font.barlowItalic};
      padding: 5px 0;
      text-align: center;
      position: relative;

      @media ${(props) => props.theme.device.lg} {
        background: none;
      }

      a {
        color: ${(props) => props.theme.color.white};

        @media ${(props) => props.theme.device.mdmax} {
          display: block;
        }
      }

      @media ${(props) => props.theme.device.mdmax} {
        width: 100%;
      }

      @media ${(props) => props.theme.device.lg} {
        padding: 12px 36px 12px 0;
        font-size: 13px;
      }

      &::after {
        @media ${(props) => props.theme.device.lg} {
          content: "";
          display: inline-block;
          border-right: 1px solid ${(props) => props.theme.color.grey};
          position: absolute;
          top: 7px;
          right: 12px;
          height: calc(100% - 14px);
        }
      }
    }
  }

  .navbar-toggler {
    position: fixed;
    z-index: 4;
    top: 60px;
    right: 20px;
    float: none;
    margin: 0;
    border-radius: 0;
    padding: 0;
    background-color: transparent;
    border-color: transparent;

    &:focus {
      box-shadow: 0 0;
    }

    .icon-bar {
      width: 27px;
      height: 2px;
      border-radius: 1px;
      display: block;
      background-color: ${(props) => props.theme.color.orange};

      + .icon-bar {
        margin-top: 7px;
      }

      &:first-child {
        display: none;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        margin-top: -1px;
      }
    }

    &.collapsed {
      .icon-bar {
        &:first-child {
          display: block;
        }

        &:nth-child(2) {
          transform: none;
        }

        &:nth-child(3) {
          transform: none;
          margin-top: 7px;
        }
      }
    }
  }

  .navigation-menu {
    .navigation-menu-inner {
      @media ${(props) => props.theme.device.mdmax} {
        padding: 40px 35px;
      }
    }

    @media ${(props) => props.theme.device.lg} {
      top: 0;
      position: relative;
      background: none;
      padding: 0;
    }

    &.navbar-collapse {
      justify-content: flex-end;

      &.show {
        position: relative;
        width: 100%;
        z-index: 1;
        display: block;
        max-height: 100vh;
        height: calc(100vh - 115px);
        overflow: auto;
      }
    }

    ul {
      @media ${(props) => props.theme.device.mdmax} {
        align-items: unset !important;
        overflow: hidden;
        margin-bottom: 0 !important;
        margin-top: 0 !important;
        display: contents;
      }

      @media ${(props) => props.theme.device.lg} {
        max-width: 70vw;
        line-height: 18px;
      }

      @media ${(props) => props.theme.device.xll} {
        max-width: 1000px;
      }

      .nav-item,
      li {
        font-family: ${(props) => props.theme.font.barlowBold};
        font-size: 20px;

        @media ${(props) => props.theme.device.mdmax} {
          position: relative;
          padding-top: 40px;
          margin: 0;
        }

        &::before {
          @media ${(props) => props.theme.device.mdmax} {
            position: absolute;
            content: "";
            border: 1px solid hsl(0deg 0% 100% / 50%);
            top: 20px;
            left: 0;
            width: 100%;
            display: table;
          }
        }

        @media ${(props) => props.theme.device.lg} {
          font-family: ${(props) => props.theme.font.barlowSemiBold};
          font-size: 16px;
          font-weight: 600;
          text-align: center;
        }

        @media ${(props) => props.theme.device.xll} {
          font-size: 15px;
        }

        /* stylelint-disable no-descending-specificity */
        a {
          color: ${(props) => props.theme.color.white};
          padding: 10px 0;
          display: block;
          line-height: 21px;
          text-decoration: none;

          @media ${(props) => props.theme.device.lg} {
            color: ${(props) => props.theme.color.darkgrey};
            display: block;
            padding: 0 11px 5px;
            line-height: 18px;
            position: relative;
            font-size: 16px;

            &:hover {
              color: ${(props) => props.theme.color.green};
            }
          }

          @media ${(props) => props.theme.device.xll} {
            padding: 0 24px 5px;
          }

          @media ${(props) => props.theme.device.xl} {
            padding: 0 24px 9px;
          }

          @media ${(props) => props.theme.device.lgmax} {
            top: -2px;
          }

          &.active {
            @media ${(props) => props.theme.device.lg} {
              &::after {
                content: "";
                position: absolute;
                width: 100%;
                bottom: -27px;
                left: 10px;
                border-bottom: 6px solid ${(props) => props.theme.color.green};
              }
            }

            @media ${(props) => props.theme.device.lgmax} {
              &::after {
                bottom: -30px;
              }
            }
          }
        }

        &:nth-child(2) {
          a {
            padding-left: 0;

            @media ${(props) => props.theme.device.lg} {
              &.active {
                &::after {
                  left: -10px;
                }
              }
            }
          }
        }

        &:nth-child(3) {
          a {
            @media ${(props) => props.theme.device.lgmax} {
              &.active {
                &::after {
                  width: 90px;
                  left: 8px;
                }
              }
            }
          }
        }

        &:nth-child(4) {
          a {
            @media ${(props) => props.theme.device.lgmax} {
              &.active {
                &::after {
                  left: 5px;
                }
              }
            }
          }
        }

        &:nth-child(5) {
          @media ${(props) => props.theme.device.lg} {
            a {
              &.active {
                &::after {
                  width: 95%;
                }
              }
            }
          }

          @media ${(props) => props.theme.device.lgmax} {
            a {
              &.active {
                &::after {
                  left: 4px !important;
                }
              }
            }
          }
        }

        &:nth-child(6) {
          @media ${(props) => props.theme.device.lg} {
            a {
              &.active {
                &::after {
                  width: 95%;
                }
              }
            }
          }

          @media ${(props) => props.theme.device.lgmax} {
            a {
              &.active {
                &::after {
                  left: 4px !important;
                }
              }
            }
          }
        }

        &:nth-child(7) {
          @media ${(props) => props.theme.device.lgmax} {
            a {
              &.active {
                &::after {
                  left: 4px;
                }
              }
            }
          }
        }

        @media ${(props) => props.theme.device.mdmax} {
          &:first-child {
            padding-top: 0;

            &::before {
              display: none;
            }
          }
        }
      }

      .nav-item.show.dropdown {
        .dropdown-menu.show {
          background: transparent;
          border: 0;
          padding-left: 40px;
          line-height: 24px;
          font-family: ${(props) => props.theme.font.barlowRegular};

          @media ${(props) => props.theme.device.lg} {
            background: linear-gradient(
              90deg,
              ${(props) => props.theme.color.darkerblue},
              ${(props) => props.theme.color.darkestblue}
            );
            padding: 20px;
            top: 25px;
          }

          .dropdown-item {
            @media ${(props) => props.theme.device.lg} {
              color: ${(props) => props.theme.color.white};
            }

            &:hover {
              color: ${(props) => props.theme.color.green};
              background: none;
            }

            &.active {
              @media ${(props) => props.theme.device.lg} {
                &::after {
                  display: none;
                }
              }
            }
          }
        }
      }
    }

    .mobile-utility-menu {
      margin-top: 30px;

      ul {
        list-style: none;
        padding-left: 0;

        li {
          padding-top: 20px;
          font-family: ${(props) => props.theme.font.barlowBold};

          &::before {
            display: none;
          }

          &:first-child {
            padding-top: 0;
          }

          a {
            line-height: 24px;
            font-family: ${(props) => props.theme.font.barlowRegular};
          }
        }
      }
    }
  }
`;
