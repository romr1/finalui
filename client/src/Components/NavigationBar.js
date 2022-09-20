import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../images/logo.svg';

import { Badge, IconButton } from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import '../Styles/NavigationBar.css';

const Styles = styled.div`
  .navbar { background-color: #074b5a; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.2em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
`;
export const NavigationBar = () => (
  < Styles >
    <Navbar >
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="50"
          height="30"
          alt="A"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Nav>
          <Nav.Item><Nav.Link href="/Home">{process.env.REACT_APP_APP_NAME}</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Home/TPage">CX</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
      {/* <IconButton aria-label={notificationsLabel(100)}> */}
      <IconButton>
        <Badge badgeContent={5} color="primary">
          <CircleNotificationsIcon fontSize='large' style={{ color: 'white' }} />
        </Badge>
      </IconButton>
    </Navbar>
  </Styles >
  // // < Styles >
  // <Navbar >
  //   <Navbar.Brand href="/">
  //     <img
  //       src={logo}
  //       width="50"
  //       height="30"
  //       alt="A"
  //     />
  //   </Navbar.Brand>
  //   <Navbar.Toggle />
  //   <Navbar.Collapse >
  //     <Nav>
  //       <Nav.Item><Nav.Link href="/Home">{process.env.REACT_APP_APP_NAME}</Nav.Link></Nav.Item>
  //       <Nav.Item><Nav.Link href="/Home/TPage">CX</Nav.Link></Nav.Item>
  //     </Nav>
  //   </Navbar.Collapse>
  //   {/* <IconButton aria-label={notificationsLabel(100)}> */}
  //   <IconButton>
  //     <Badge badgeContent={5} color="primary">
  //       <CircleNotificationsIcon fontSize='large' style={{ color: 'white' }} />
  //     </Badge>
  //   </IconButton>
  // </Navbar>
  // </Styles >
)