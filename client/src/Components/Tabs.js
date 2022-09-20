import styled from "styled-components";
import React, { useState } from "react";
export const Tabs = styled.div`
  overflow: scroll;
  font-family: Open Sans;
  height: 3em;
  
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 20%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "#0a7289" : "#074b5a")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: #0a7289;
  }
`;

export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;







/*export function getTabs() {
    const [active, setActive] = useState(0);
    const handleClick = e => {
      const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };


    var counter=0;
    var array = [];
    for (var tab_name of ["CX2","Updates3","Opera4"]) {
        array.push(<Tab onClick={handleClick} active={active === counter} id={counter}>
            tab_name
        </Tab>)
        counter++;
   }
   return array;
    /*const filterTypes = React.useMemo(
      () => ({

      }),
      []
    )*/
//}
  