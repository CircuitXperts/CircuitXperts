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
}
`