import React from 'react';
import "../Styles/BaseInformation.css"
import high_battery from '../images/high_battery.png';
import medium_battery from '../images/medium_battery.png';
import low_battery from '../images/low_battery.png';
import red_clock from '../images/red_clock.png';
import green_clock from '../images/green_clock.png';
import "../Styles/GlobalStyle.css"
import { sendDataToServer2 } from "../utils/dataFromServer"

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


export default function BaseInformation(info_id) {
  console.log("blaa")
  console.log(info_id.info_id)
  let route=process.env.REACT_APP_HOST+'/battery'
  let battery_percentage = sendDataToServer2(route, info_id);
  console.log("battery_percentage")
  //console.log(battery_percentage)
  //let battery_percentage=10
  if (battery_percentage){
   
    let time_connection = 100
    return (
      <div className="rectangle" >
        <div class="row">
          <div class="column">
            last time: {time_connection}
          </div>
          <div class="column">
            <img
  
              src={get_clock_image_by_time_connection(time_connection)}
              width="30"
              height="30"
            />
          </div>
          <div class="column">
            <img
              src={get_battery_image_by_percent(battery_percentage)}
              width="30"
              height="30"
            />
          </div>
          <div class="column">
            {battery_percentage}%
          </div>
        </div>
  
      </div>
    );
  }else{
    return <div></div>
  }
  

}



