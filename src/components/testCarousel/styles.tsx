import styled from "styled-components";

export const TestStyle = styled.div`
  .carousel {
    width: 100%;
    margin: auto;
    overflow: hidden;
    position: relative;
  }

  .carousel-content {
    display: flex;
    transition: transform 0.5s ease;
    height: 100%;
  }

  .carousel-item {
    flex: 0 0 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${(props) => props.theme.color.orange};
    color: ${(props) => props.theme.color.blue};
    font-size: 20px;
    margin-right: 0;
    font-family: ${(props) => props.theme.font.barlowBold};
    padding: 15px 0;
  }
`;
