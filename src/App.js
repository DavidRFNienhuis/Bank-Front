import React, {useState} from "react"
import './App.css';
import NavBar from "./navbar";
import AllData from "./alldata";
import Home from "./home";
import Balance from "./balance";
import CreateAccount from "./createaccount";
import Login from "./login";
import Withdraw from "./withdraw";
import Deposit from "./deposit";



function App() {
  return (
    <div className="App">
      <NavBar>      </NavBar>
      <Home>      </Home>
      <Balance>    </Balance>
      <CreateAccount>  </CreateAccount>
      <Login>  </Login>
      <Withdraw>  </Withdraw>
      <Deposit>  </Deposit>

        


      
    </div>
  );
}

export default App;
