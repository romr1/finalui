import React, { useState } from 'react';
import '../Styles/Login.css';
import { useNavigate } from "react-router-dom";
import { GenericStyle } from '../app_styles';

import useSound from 'use-sound';
import boopSfx from '../sound/boopSfx.mp3';
//import MagicBell, { FloatingNotificationInbox } from '@magicbell/magicbell-react';
// import ToolboxLayout from "./GridLayout"
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

  return (
    // <ToolboxLayout />
    <GenericStyle>
      <BoopButton></BoopButton>
      <div className="login-wrapper">
        <h1>A Log In</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
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