import React, { useState, useRef } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
// import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { getDataFromServer } from "../utils/dataFromServer"
import Title from "./Title"
import add_dynamic_components from '../utils/makeData'
import { Add_form_for_search } from '../utils/generic2'
import { Link } from 'react-router-dom';
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

export function Home2() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
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
  let host=process.env.REACT_APP_HOST+process.env.REACT_APP_MAIN_TABLE_ROUTE
  let next_page_route='/Home/TPage/'
  const data = getDataFromServer(host);
  const [pk_search, setSearch] = useState("");
  
//const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target[0].value);
    console.log(pk_search)
    if (pk_search>0){
      window.location.href=next_page_route+pk_search
    }
  };

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
          <Title message={process.env.REACT_APP_TITLE_MESSAGE} />
          {/* <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Search</button>
          </form> */}

          {Add_form_for_search(process.env.REACT_APP_SEARCH_TEXT_1)}
          {Add_form_for_search(process.env.REACT_APP_SEARCH_TEXT_2)}
          {Add_form_for_search(process.env.REACT_APP_SEARCH_TEXT_3)}
          {Add_form_for_search(process.env.REACT_APP_SEARCH_TEXT_4)}
          {data.map((item) =>
          //  <div class="rectangle"> 
            add_dynamic_components(item, process.env.REACT_APP_TPAGE_ROUTE)
            // </div>
          )}
          {/* <Content /> */}
        </main>
      </div>
    </ThemeProvider>
  );
}
