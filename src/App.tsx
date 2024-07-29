import { useContext, useState } from "react";
import { Store } from "./context";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login";
import Message from "./components/Message";
import SignUp from "./components/signUp";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App({ config }: any) {
  const { user }: any = useContext(Store);
  const [switchScreen, setSwitchScreen] = useState("login");
  return (
    <>
      <Header />
      <main>
        <Message />
        {user && user.id ? (
          <Home config={config} />
        ) : switchScreen === "login" ? (
          <Login config={config} setSwitchScreen={setSwitchScreen} />
        ) : (
          <SignUp config={config} setSwitchScreen={setSwitchScreen} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
