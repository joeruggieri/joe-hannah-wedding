import React, { useState } from "react";
import { useCookies } from "react-cookie";

export const cookieName = "wedding-jh-cookie";
export const cookieContent = "accept-access";

export const HoldingPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies([cookieName]);
  const [input, setInput] = useState("");

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const setCookieAction = () => {
    setCookie(cookieName, cookieContent);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (input.toLowerCase().trim() === "jhwedding") {
      setCookieAction();
    }
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="holding-container">
        <header>
          <h1 className="main-header centered">
            Joe and Hannah are getting married!
          </h1>
        </header>
        <div className="centered code-hint">
          <p>Enter the RSVP code found on your invitation then click enter</p>
        </div>
        <input type="text" onChange={handleChange} placeholder="RSVP code" />
        <button className="btn btn-info code-button" type="submit">
          Enter
        </button>
      </div>
    </form>
  );
};
