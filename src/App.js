import React from 'react';
// import jwt from 'jsonwebtoken';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ListingsList from './features/Listings/ListingsList';
import { GoogleLogin } from 'react-google-login';



function App() {
  
  const responseGoogle = (response) => //Tar emot google-token och skickar den till api. När den är skickad tar den
  {                                     //token från api och loggar den i konsolen.
    console.log(response);
    let tokenId = {"tokenId" : response.tokenId};
    console.log(tokenId);
    fetch('https://localhost:44382/api/auth/google', 
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tokenId)
        }
    ).then(res => res.json()).then(data => console.log("API-resp: ", data));
        

  }
  
  return (
    <Router>
    <div>
      <Switch>
          <Route exact path="/" render={() =>(
            <React.Fragment>
              <GoogleLogin //Google-komponenten.
                clientId="880466237394-aethf4onogo5ovh789ngqpogq0a0v6sr.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}>
                  <span>log in with google</span>
                </GoogleLogin>
              <ListingsList />
            </React.Fragment>
          )}/>
          <Redirect to="/" />
        </Switch>

    </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
