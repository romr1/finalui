import React from 'react';
import "../Styles/BaseInformation.css"

import "../Styles/GlobalStyle.css"
import { sendDataToServer } from "../utils/dataFromServer"
import { add_dynamic_info } from '../utils/makeData'




export default function BaseInformation(info) {
  console.log(info.info_id)
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@")
  console.log(info.posix_location)
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@")
  let route = process.env.REACT_APP_HOST + process.env.REACT_APP_BASE_INFORMATION_ROUTE
  let data = sendDataToServer(route, info);
  console.log(data)
  return (
    <div className="rectangle" >
      <div class="row">
        {data.map((item) =>
          add_dynamic_info(item)
        )}
      </div>

    </div>
  );


}



