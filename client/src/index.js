import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/Login';
//import { Home } from './Components/Home';
import { Home2 } from './Components/Home2';
import { TPage } from './Components/Tpage';
import { Ppage } from './Components/Ppage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const envSettings = window;
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Home" >
          <Route path="" element={<Home2 />} />
            <Route path="TPage"  >
              <Route path=":t_id">
                <Route path="" element={<TPage />} />
                <Route path='products' element={<Ppage />} />
              </Route>
              


            </Route>

            <Route path={`TPage/${envSettings.REACT_APP_SEARCH_TEXT_1}`}>
              <Route path=":t_id">
                <Route path="" element={<TPage />} />
               
              </Route>
            </Route>

            <Route path={`TPage/${process.env.REACT_APP_SEARCH_TEXT_2}`} >
              <Route path=":t_id">
                <Route path="" element={<TPage />} />
               
              </Route>
            </Route>
            <Route path={`TPage/${process.env.REACT_APP_SEARCH_TEXT_3}`} >
              <Route path=":t_id">
                <Route path="" element={<TPage />} />
               
              </Route>
            </Route>
            <Route path={`TPage/${process.env.REACT_APP_SEARCH_TEXT_4}`} >
              <Route path=":t_id">
                <Route path="" element={<TPage />} />
               
              </Route>
            </Route>
        </Route>
        <Route path={process.env.REACT_APP_SIDE_BAR2_ROUTE} element={<Home2 />}/>
        <Route path={process.env.REACT_APP_SIDE_BAR3_ROUTE} element={<Home2 />}/>
        <Route path="/" element={<Login />}>
        </Route>
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

//import {createRoot} from 'react-dom/client';
//import App from './App';
/*import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router

root.render(
  <Router>
    <App />
  </Router>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


