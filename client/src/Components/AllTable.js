import React from "react";
import { getColumnsWithFilters } from "../utils/dataFromServer";
import SubTitle from "../Components/SubTitle";
import { Table } from '../Components/Table';
import download from '../images/download.png';

export default function AllTable(item_in_data, route_path = null) {
  let columns, rows;
  let item=item_in_data.item_in_data;
  if(Object.keys(route_path).length == 0){
      route_path=null
  }
  if (Object.keys(item).length != 0) {
    if (item.type.normalize() === 'table'.normalize()) {
      columns = item.data.headers
      rows = item.data.rows
      let columns_with_filters = getColumnsWithFilters(columns, route_path, download) //TODO CHECK HOW CAN DO IT WITH React.useMemo(() => {
        return <Table columns={columns_with_filters} data={rows} />
      // return (<div className="table_example" data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}>
      //     <Table columns={columns_with_filters} data={rows} />
      //   </div>)
    } else if (item.type.normalize() === 'message'.normalize()) {
      return <SubTitle title={item.data} />
    }
  }else{
      return (<></>)
  }

}
