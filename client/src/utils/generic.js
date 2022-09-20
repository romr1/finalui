import React, { Fragment, useState } from 'react';
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
export const [open, setOpen] = useState(true);

export const [darkMode, setDarkMode] = useState(true);
const classes = useStyles();
export const theme = createMuiTheme({
    palette: {
        type: darkMode ? "dark" : "light"
    }
});
export const handleDrawerToggle = () => {
    setOpen(!open);
};
export const handleDrawerClose = () => {
    setOpen(false);
};
export const toggleDarkMode = () => {
    setDarkMode(!darkMode);
};