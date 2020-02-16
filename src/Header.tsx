import React from "react";

export const Header: React.FC = () => (
  <header>
    <h1 className="main-header">Joe and Hannah</h1>
    <p className="centered sub-head">are getting married and you're invited!</p>

    <div className="centered">
      <div>
        <p className="info">
          FRIDAY 25th SEPTEMBER, 2020 ---{" "}
          <a
            href="https://www.acehotel.com/london/"
            rel="noopener noreferrer"
            target="_blank"
          >
            ACE HOTEL, SHOREDITCH
          </a>
        </p>
      </div>
      <div>
        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
          <button type="button" className="btn btn-info">
            RSVP
          </button>
        </a>
      </div>
    </div>
  </header>
);
