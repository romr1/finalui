import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DevicesIcon from "@material-ui/icons/Devices";
import EventIcon from "@material-ui/icons/Event";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from 'react-router-dom';
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

export default function ({ open, handleDrawerClose }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className="">
        <List>
          {/* <ListItem button >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem> */}
          <ListItem button component={Link} to={process.env.REACT_APP_SIDE_BAR1_ROUTE}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={process.env.REACT_APP_SIDE_BAR1} />

          </ListItem>
          <ListItem button component={Link} to={process.env.REACT_APP_SIDE_BAR2_ROUTE}>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary={process.env.REACT_APP_SIDE_BAR2} />
          </ListItem>
          <ListItem button component={Link} to={process.env.REACT_APP_SIDE_BAR3_ROUTE}>
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary={process.env.REACT_APP_SIDE_BAR3} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
        </List>
        <Divider />
        <List>
          {/* <ListItem button>
            <ListItemIcon>
              <DevicesIcon />
            </ListItemIcon>
            <ListItemText primary="Devices" />
          </ListItem> */}
          {/* <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem> */}
        </List>
      </div>
    </Drawer>
  );
}



// import React from 'react';
// import { push as Menu } from 'react-burger-menu';
// import '../Styles/Sidebar.css';

// //https://github.com/negomi/react-burger-menu#animations
// export default props => {
//   return (
//     // <Menu  >isOpen={true}
//     <Menu  >
//       <a className="menu-item" href="/">
//         Home
//       </a>
//       <a className="menu-item" href="/products">
//         {process.env.REACT_APP_SIDE_BAR1}
//       </a>
//       <a className="menu-item" href="/pizzas">
//         {process.env.REACT_APP_SIDE_BAR2}
//       </a>
//       <a className="menu-item" href="/desserts">
//         {process.env.REACT_APP_SIDE_BAR3}
//       </a>
//     </Menu>
//   );
// };
