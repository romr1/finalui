import * as React from "react";
import "../Styles/Text.css"
import "../Styles/GlobalStyle.css"

import TInterface from '../Interfaces/TInterface'
//export default class Title extends React.Component<TInterface, {}> {
export default class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>
           {this.props.message} <b>{this.props.pk}</b>
        </h1>
      </div>
    );
  }
}
