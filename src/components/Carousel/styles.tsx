import styled from "styled-components";

export const CarouselStyle = styled.div`
  .carousel {
    .slick-slider {
      .prv-cls {
        width: 100px;
        position: absolute;
        z-index: 9;
        top: 30%;
      }

      .nxt-cls {
        width: 100px;
        position: absolute;
        z-index: 9;
        top: 30%;
        right: 0;
      }

      .slick-list {
        .slick-track {
          .image-div {
            .carousel-img {
              height: 400px !important;
              object-fit: cover;
            }
          }
        }
      }
    }

    /* styles/CarouselStyle.css */
    .image-div {
      position: relative;
    }

    .carousel-img {
      object-fit: cover;
    }

    .image-div .text-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      pointer-events: none;
    }

    .banner-text {
      .carousel-text {
        font-size: 35px;
        padding: 0 30px;
        top: 20%;
        position: relative;
        line-height: normal;
        color: #fc6850;
        text-shadow: 2px 2px #003479;

        @media ${(props) => props.theme.device.lg} {
          padding: 0 130px;
          top: 30%;
        }
      }
    }
  }
`;
