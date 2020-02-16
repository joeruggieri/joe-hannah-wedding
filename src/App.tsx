import React from "react";
import { Info } from "./Info";
import { Header } from "./Header";

function App() {
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

export default App;
