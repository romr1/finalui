import React, { Fragment, useState } from "react";
import { getColumnsWithFilters } from "../utils/dataFromServer";
import SubTitle from "../Components/SubTitle";
import { Table } from '../Components/Table';
import download from '../images/download.png';




export default function add_dynamic_components(item, route_path = null) {
  let columns, rows;
  let isRigth=false;
let counter=0;
  if (counter%2===0){
    isRigth=true
  }
  // if (Object.keys(data).length != 0) {
  //   data.map((item) =>{
      if (Object.keys(item).length != 0) {
        if (item.type.normalize() === 'table'.normalize()) {
          columns = item.data.headers
          rows = item.data.rows
          let columns_with_filters = getColumnsWithFilters(columns, route_path, download) //TODO CHECK HOW CAN DO IT WITH React.useMemo(() => {
            return <Table columns={columns_with_filters} data={rows} isRigth={isRigth} />
            // return (<div class="rectangle">
            //         {/* <div class="column"> */}
            //         {title}
            //         <Table columns={columns_with_filters} data={rows} />
            //         {/* </div> */}
            //         </div>
            //       )
        } else if (item.type.normalize() === 'message'.normalize()) {
          return <SubTitle title={item.data} />
          
        }
      }
  //   })
  // }
}
