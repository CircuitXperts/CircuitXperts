import styled from "styled-components";

export const TestStyle = styled.div`
  .carousel {
    width: 100%;
    margin: auto;
    overflow: hidden;
    position: relative;
    height: 300px;
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
    background-color: #4287f5; /* Adjust background color */
    color: #fff;
    font-size: 2rem;
    margin-right: 0;
  }
`;
