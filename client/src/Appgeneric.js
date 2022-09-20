import React, { useState, useEffect } from 'react';
import horse from './horse.jpg';
import Login from './Components/Login';
import './App.css';

const Appgeneric = () => {

    const [data, setData] = useState([]);
    /*const person = {
    name: 'Chris',
    twitter: 'chris__sev',
    bio: 'The dude'
  };*/

    var array = [];

    useEffect(() => {
        //api call
        setData([{
            name: 'ba',
            age: 'not 30'
        },
        {
            name: 'ba2',
            age: '30'
        },
        {
            name: 'ba3',
            age: '31'
        },
        ])
    }, []);


    data.map((person, index) => {
        for (const [key, value] of Object.entries(person)) {
            //return <p> {key} : {value} </p>
            array.push(<p>{key}:{value}</p>);

        }

    })

    return array;
};

//    <div>
//    {data.map((person, index) => (
//        <p>{person.name} Age is {person.age}!</p>
//    ))}
//
//    </div>





//function App() {
////const [myData, setMyData] = useState(0);
////
////  useEffect(() => {
////    fetch('/table').then(res => res.json()).then(data => {
////      setMyData(data.myData);
////    });
////  }, []);
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={horse} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//          heloo
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
////         <p>The current time is {myData}.</p>
//      </header>
//    </div>
//  );
//}



//<div>
//{
//    data.forEach(person => {
//                <p>{person.name}</p>
//               Object.keys(person).map(key => (
//            <p>
//              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
//              {person[key]}
//            </p>
//          ))
//    })
//}
//
//    </div>



export default Appgeneric;
