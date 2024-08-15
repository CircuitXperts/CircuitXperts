import React, { Component } from "react";
import { Crisp } from "crisp-sdk-web";

export class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure("e22391ae-252a-4faf-85ce-06f47b771787");
  }

  render() {
    return null;
  }
}
