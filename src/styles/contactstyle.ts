import styled from "styled-components";

export const ContactUsStyle = styled.div`
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
        color: #333;

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
    .contact-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .contact-info div {
        flex: 1;
        margin: 10px;
        background: #f9f9f9;
        padding: 20px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .contact-info img {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
    }
    .contact-info p {
        margin: 10px 0;
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
