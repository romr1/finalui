import React from "react";
import { getColumnsWithFilters } from "../utils/dataFromServer";
import SubTitle from "../Components/SubTitle";
import { Table } from '../Components/Table';
import download from '../images/download.png';
import "../Styles/BaseInformation.css"
import high_battery from '../images/high_battery.png';
import medium_battery from '../images/medium_battery.png';
import low_battery from '../images/low_battery.png';
import red_clock from '../images/red_clock.png';
import green_clock from '../images/green_clock.png';
import _ from "lodash";


export default function add_dynamic_components(item, route_path = null) {
  let columns, rows;
  let isRigth = false;
  let counter = 0;
  if (counter % 2 === 0) {
    isRigth = true
  }
  // if (Object.keys(data).length != 0) {
  //   data.map((item) =>{
  if (Object.keys(item).length !== 0) {
    if (item.type.normalize() === 'table'.normalize()) {
      columns = item.data.headers
      rows = item.data.rows
      let newRows=_parse_to_date(rows)
      let columns_with_filters = getColumnsWithFilters(columns, route_path, download) //TODO CHECK HOW CAN DO IT WITH React.useMemo(() => {
      return <Table  columns={columns_with_filters} data={newRows} isRigth={isRigth} />
    } else if (item.type.normalize() === 'message'.normalize()) {
      return <SubTitle  title={item.data} />

    }
  }
}

function _parse_to_date(rows){
  let parsed_rows=[{}]
  let new_row={};
  let key,value;
  rows.forEach(row => {
    if (Object.keys(row).length !== 0) {
      for([key,value] of Object.entries(row)){
        if(key.includes('time')){
          let date_row=new Date(value)
          //row[key]=date_row
          new_row[key]=date_row
        }
        else{
          new_row[key]=value
        }
      }
      parsed_rows.push(new_row)
    }
}  )  
  return rows
}

function get_battery_image_by_percent(battery_percentage) {
  if (battery_percentage >= parseInt(process.env.REACT_APP_HIGH_BATTERY_LIMIT)) {
    return high_battery
  } else if (battery_percentage <= parseInt(process.env.REACT_APP_HIGH_BATTERY_LIMIT)
    && battery_percentage >= parseInt(process.env.REACT_APP_MEDIUM_BATTERY_LIMIT)) {
    return medium_battery
  } else {
    return low_battery
  }
}

function get_clock_image_by_time_connection(time_connection) {
  if (time_connection >= parseInt(process.env.REACT_APP_LOW_TIME_LIMIT)) {
    return red_clock
  } else {
    return green_clock
  }
}
function add_extra_icons(row, div_list) {
  if (row.key.includes('time')) {
    div_list.push(
      <div class="column">
        <img
          src={get_clock_image_by_time_connection(row.value)}
          width="30"
          height="30"
        />
      </div>
    )
  }
  if (row.key.includes('battery')) {
    div_list.push(<div class="column">
      <img
        src={get_battery_image_by_percent(row.value)}
        width="30"
        height="30"
      />
    </div>
    )
  }

  return div_list
}
export function add_dynamic_info(item) {
  let columns, rows;
  let div_list = [];
  try {
    if (Object.keys(item).length !== 0) {
      if (item.type.normalize() === 'table'.normalize()) {
        columns = item.data.headers
        rows = item.data.rows
        rows.forEach(row => {
          div_list.push(
            <div class="column">
             {row.value}
             {row.key}
            </div>
          )
          div_list = add_extra_icons(row, div_list)

        });
      }
    }
    console.log("div_list")
    console.log(div_list)
  } catch (e) {
    console.log(rows + e)
  }
  return div_list
}
