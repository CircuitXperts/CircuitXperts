import styled from "styled-components";

export const ProjectStyle = styled.div`
  .container {
      width: 80%;
      margin: auto;
      overflow: hidden;
  }
  header {
      background: #333;
      color: #fff;
      padding-top: 30px;
      min-height: 70px;
      border-bottom: #77aaff 3px solid;
  }
  header h1 {
      text-align: center;
      text-transform: uppercase;
      margin: 0;
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
  .projects {
      margin: 20px 0;
  }
  .project {
      background: #f9f9f9;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .project h3 {
      margin-top: 0;
  }
  .project img {
      max-width: 100%;
      height: auto;
  }
  .project-description {
      margin-top: 10px;
  }
  footer {
      background: #333;
      color: #fff;
      text-align: center;
      padding: 10px;
      margin-top: 20px;
      position: fixed;
      width: 100%;
      bottom: 0;
  }
`;