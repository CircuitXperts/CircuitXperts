import styled from "styled-components";

export const OurServiceStyle = styled.div`
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
  .service {
    margin: 20px 0;
  }
  .service-item {
    background: #f9f9f9;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .service-item h3 {
    margin-top: 0;
  }
  .service-item img {
    max-width: 100%;
    height: auto;
  }
  .service-description {
    margin-top: 10px;
  }

  .services {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .service {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    text-decoration: none;
    color: #333;
    display: block;
  }
  .service:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .service h3 {
    font-size: 1.2rem;
    margin-top: 0;
  }
  .service p {
    font-size: 1rem;
    color: #666;
  }
`;
