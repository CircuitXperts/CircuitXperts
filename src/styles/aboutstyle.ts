import styled from "styled-components";
import aboutbg from "/public/images/Slide+1.jpg";

export const AboutStyle = styled.div`
  .container {
    width: 100%;
    margin: auto;
    overflow: hidden;
  }

  .main-content {
    padding: 20px;
    background: #fff;
    margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: #333;
  }
  .services img,
  .contact img {
    width: 100%;
    height: auto;
  }
  .service-item {
    margin-bottom: 20px;
  }
  .contact-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .contact-info div {
    flex: 1;
    margin: 10px;
  }
`;
