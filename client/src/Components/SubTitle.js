import * as React from "react";
import "../Styles/Text.css"


export default function SubTitle({ title }) {
  return (
    <div className="sub_title">
      <h1>
        {title}
      </h1>
    </div>
  );
}
