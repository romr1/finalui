import React, { useState } from 'react';
import '../Styles/Login.css';
import { useNavigate } from "react-router-dom";
import { GenericStyle } from '../app_styles';

import useSound from 'use-sound';
import boopSfx from '../sound/boopSfx.mp3';
//import MagicBell, { FloatingNotificationInbox } from '@magicbell/magicbell-react';
// import ToolboxLayout from "./GridLayout"



// async function loginUser(credentials) {
//   return fetch('http://localhost:8080/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }



export default function Login() {
  const navigate = useNavigate();
  const route_to_home = e => {
    navigate("/Home")
  }

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const BoopButton = () => { //https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/
    const [play] = useSound(boopSfx);
    return <button onClick={play}>Boop!</button>;
  };
  // const Notifications = () => {
  //   return (
  //     <MagicBell
  //       apiKey="[MAGICBELL_API_KEY]"
  //       userEmail="dan@example.com">
  //       {(props) => (
  //         <FloatingNotificationInbox {...props} />
  //       )}
  //     </MagicBell>
  //   )

  // };
  const handleSubmit = async e => {
    // e.preventDefault();
    // const token = await loginUser({
    //   username,
    //   password
    // });
    // setToken(token);
  }
  return (
    // <ToolboxLayout />
    <GenericStyle>
      <BoopButton></BoopButton>
      <div className="login-wrapper">
        <h1>{process.env.REACT_APP_LOGIN_MESSAGE}</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p class="bolder">Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} class="input"/>
          </label>
          <label>
            <p class="bolder">Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} class="input"/>
          </label>
          <div>
            <br></br>
            <button class="button" type="submit" onClick={route_to_home}><span>Submit </span></button>
          </div>
        </form>
      </div>
    </GenericStyle>
  )
}