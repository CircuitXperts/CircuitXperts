import styled from "styled-components";

export const SiteMapStyle = styled.main`
  .page-wrapper {
    display: flex;
    gap: 1.4rem;
    padding: 1.6rem 0 3.2rem;
    max-width: 1216px;
    margin: 0 auto;
    flex-direction: column;

    @media ${(props) => props.theme.device.lg} {
      padding: 2.4rem 0 6.4rem;
      gap: 2rem;
      flex-direction: row;
    }

    .content-block {
      padding: 0.8rem 1.6rem;
      border-radius: 0.8rem;
      background-color: ${(props) => props.theme.color.primaryLighter};

      .text-headline {
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        text-decoration-line: underline;
        text-decoration-skip-ink: none;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
        letter-spacing: normal;
        color: ${(props) => props.theme.color.textPrimary};

        &.no-underline {
          text-decoration: none;
          font-weight: 700;
        }
      }
    }

    .page-list-block {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      .inner-block {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        background-color: ${(props) => props.theme.color.bgPage};

        @media ${(props) => props.theme.device.lg} {
          gap: 0.4rem;
        }

        .inner-content-block {
          padding: 1.2rem 2.4rem 0;

          @media ${(props) => props.theme.device.lg} {
            padding: 1.6rem 4rem 0;
          }

          .inner-items {
            font-size: 24px;
            font-weight: 700;
            line-height: 2.8rem;
            letter-spacing: normal;
            text-decoration-line: underline;
            text-underline-offset: 2px;
            text-decoration-skip-ink: none;
            text-decoration-thickness: 1px;
          }

          a {
            color: ${(props) => props.theme.color.textPrimary};
          }
        }
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
            padding: 220px 0 77px;
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
