import { useContext, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login";
import Message from "./components/Message";
import { Store } from "./context";
import SignUp from "./components/signUp";

function App() {
  const {user}:any= useContext(Store);
  const [switchScreen, setSwitchScreen] = useState('login')
  return (
    <>
      <Message />
      {user && user.id ? <Home /> : switchScreen === 'login' ? <Login setSwitchScreen={setSwitchScreen} /> : <SignUp setSwitchScreen={setSwitchScreen}/>}
    </>
  );
}

export default App;
