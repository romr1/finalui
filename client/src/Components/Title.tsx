import * as React from "react";
import "../Styles/Text.css"
import "../Styles/GlobalStyle.css"

import TInterface from '../Interfaces/TInterface'

export default class Title extends React.Component<TInterface, {}> {
  render() {
    return (
      <div className="title">
        <h1>
          {this.props.message} <b>{this.props.name} {this.props.pk}</b>
        </h1>
      </div>
    );
  }
}