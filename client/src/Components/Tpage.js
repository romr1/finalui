import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
// import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { sendDataToServer } from "../utils/dataFromServer"
import Title from "./Title"
import add_dynamic_components from '../utils/makeData'
import BaseInformation from './BaseInformation';
import { useParams } from 'react-router-dom';
import { createFalse } from "typescript";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    }
}));

export function TPage() {
    const classes = useStyles();
    const [open, setOpen] = useState(createFalse);
    const [darkMode, setDarkMode] = useState(true);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light"
        }
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    let route=process.env.REACT_APP_HOST+'/t'
    // let data = getDataFromServer(route);
    
    const { t_id } = useParams();
    let data=sendDataToServer(route,t_id)
        data = data.slice(1)  //slice(1) because we dont need the message for how many return results  
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <Header
                    handleDrawerToggle={handleDrawerToggle}
                    toggleDarkMode={toggleDarkMode}
                    darkMode={darkMode}
                />
                <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <Title message="Summery of" name="t_name" pk={t_id} />
                    <BaseInformation info_id={t_id}/>
                    {/* <div className="rectangle" > */}
                    {  
                        data.map((item) =>
                            add_dynamic_components(item, process.env.REACT_APP_TPAGE_ROUTE)
                    )}
                    {/* {add_dynamic_components(data, process.env.REACT_APP_TPAGE_ROUTE)} */}
                    {/* </div> */}
                </main>
            </div>
        </ThemeProvider>
    );
}




// import React, { Fragment, useState } from 'react';
// import { GenericStyle } from '../app_styles';
// import { NavigationBar } from './NavigationBar';
// import Title from './Title';
// import BaseInformation from './BaseInformation';
// import { useParams, Link } from 'react-router-dom';
// import { getDataFromServer, getColumnsWithFilters } from "../utils/dataFromServer";
// import Sidebar from './Sidebar';
// import Header from "./Header";
// import { GridLayout } from "react-grid-layout"
// import "react-grid-layout/css/styles.css"
// import "react-resizable/css/styles.css"
// import add_dynamic_components from '../utils/makeData'
// import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { AllPages } from './AllPages';
// import AllTable from './AllTable';
// import Box from '@mui/material/Box';
// export function TPage() {

//     const { t_id } = useParams();
//     let data = getDataFromServer('/t');
//     data = data.slice(1)  //slice(1) because we dont need the message for how many return results

//     const layout = [
//         { i: "a", x: 150, y: 0, w: 1, h: 2, static: true },
//         { i: "b", x: 200, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
//         { i: "c", x: 4, y: 0, w: 1, h: 2 }
//     ];

//     return (
//         // <Box sx={{ display: 'inline-flex' ,alignItems: 'center'}}>
//         <GenericStyle>
//             <Fragment key="tpage_id">
//                 <AllPages />
//                 <Title message="Summery of" name="t_name" pk={t_id} />
//                 <BaseInformation />

//                 {/* <GridLayout
//                         className="layout"
//                         layout={layout}
//                         cols={12}
//                         rowHeight={30}
//                         width={1200}
//                         color="green"
//                    > */}
//                 {data.map((item) =>
//                     // <div
//                     //     key="a"
//                     //     className="widget"
//                     //     data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
//                     // >
//                     <AllTable item_in_data={item} />
//                     // {/* add_dynamic_components(item) */}
//                     //  </div>
//                 )}
//                 {/* </GridLayout> */}
//             </Fragment>

//         </GenericStyle>
//         // {/* // </ThemeProvider> */}
//         // </Box>
//     )
// }