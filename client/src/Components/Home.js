import React, { Fragment, useState } from "react";

import { GenericStyle, Styles } from '../app_styles';
import { Table } from "./Table";
import { SliderColumnFilter, SelectColumnFilter, DateFilters } from "../Filters/Filters";
import { getDataFromServer } from "../utils/dataFromServer"
import { Link } from "react-router-dom";
import { NavigationBar } from "./NavigationBar"
import Title from "./Title"

import { ConstructionOutlined } from "@mui/icons-material";
import { Responsive, WidthProvider } from "react-grid-layout"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import { GridLayout } from "react-grid-layout"
import add_dynamic_components from '../utils/makeData'
import { AllPages } from "./AllPages";
import { AllTable } from "./AllTable";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";






//https://www.robinwieruch.de/react-router-nested-routes/
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));
export function Home() {
  const layout = [
    { i: "a", x: 150, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 200, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];

  const len = 100
  let host=process.env.REACT_APP_HOST + process.env.REACT_APP_MAIN_TABLE_ROUTE
  const data = getDataFromServer(host);//React.useMemo(() => makeData(len), [])
  console.log(data)
  //const data = React.useMemo(() => makeData(len), [])
  //const columns_names = getColumnsNames(data); //use memo dont goog here

  const classes = useStyles();
  return (
    // <Drawer
    //   className={classes.drawer}
    //   variant="persistent"
    //   anchor="left"
    //   classes={{
    //     paper: classes.drawerPaper
    //   }}
    // >
    <GenericStyle>
      <Fragment key="home_page_id">
        <AllPages />
        <Title message={process.env.REACT_APP_TITLE_MESSAGE} />
        {/* <GridLayout
                        className="layout"
                        layout={layout}
                        cols={12}
                        rowHeight={30}
                        width={1200}
                        color="green"
                    > */}
        {data.map((item) =>
          <div class="rectangle"> </div>
          // {/* add_dynamic_components(item, process.env.REACT_APP_TPAGE_ROUTE) */}
        )}
        {/* { add_dynamic_components(item, process.env.REACT_APP_TPAGE_ROUTE)} */}
        {/* </GridLayout> */}
      </Fragment>
    </GenericStyle>
    // </Drawer>


    // <Fragment key="home_page">
    // <AllPages/>
    //   {/* <Tabs>
    //    <Tab onClick={handleClick} active={active === 0} id={0}>
    //       A
    //     </Tab>
    //    <Tab onClick={handleClick} active={active === 1} id={1}>
    //       CX
    //     </Tab>
    //     <Tab onClick={handleClick} active={active === 2} id={2}>
    //       Updates
    //     </Tab>
    //     <Tab onClick={handleClick} active={active === 3} id={3}>
    //       O
    //     </Tab>
    //   </Tabs> */}
    //   {/* <Table columns={columns} data={data} id_t={0} /> */}
    //   {/* <GridLayout
    //     className="layout"
    //     layout={layout}
    //     cols={12}
    //     rowHeight={30}
    //     width={1200}
    //     color="green"
    //   >
    //     <div key="a">
    //     <Table columns={columns} data={data} id_t={0} />
    //     </div>
    //      <div key="b">
    //      <Table columns={columns} data={data} id_t={0} />
    //      </div>
    //   </GridLayout> */}

    //   <Title message={process.env.REACT_APP_TITLE_MESSAGE} />

    //     {data.map((item) => add_dynamic_components(item, process.env.REACT_APP_TPAGE_ROUTE))}
    //   </Fragment>

  )
}




//export default App



