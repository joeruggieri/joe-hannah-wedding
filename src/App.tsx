import React from "react";
import { useCookies } from "react-cookie";
import { Header } from "./Header";
import { cookieContent, cookieName, HoldingPage } from "./HoldingPage";
import { Info } from "./Info";

function App() {
  const [cookies] = useCookies([cookieName]);

  if (cookies[cookieName] === cookieContent) {
    return (
      <div className="App container">
        <img src="/images/lights-1.png" alt="" className="lights-pic" />
        {/* <img
        src="/images/joe-hannah-1.png"
        alt="Joe and Hannah"
        className="joe-hannah-pic"
      /> */}
        <Header />
        <Info />
        {/* <img src="/images/doggle-1.png" alt="RSVP" width="200px" /> */}
      </div>
    );
  }

  return <HoldingPage />;
}

export default App;
