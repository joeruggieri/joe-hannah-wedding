import React from "react";

export const Header: React.FC = () => (
  <header>
    <h1 className="main-header">Joe and Hannah</h1>
    <h1 className="centered sub-head">
      are getting married and you're invited!
    </h1>

    <div className="centered">
      <div>
        <p className="info">
          Friday 25th September 2020{" "}
          <a
            href="https://www.acehotel.com/london/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ace Hotel, Shoreditch
          </a>
        </p>
      </div>
      <div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfu0GqfUjyAUkuKuLIjk6l0Tv9q7M0CaS3O6xXA4ExOWhKQJg/viewform"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button type="button" className="btn btn-info rsvp-button">
            RSVP
          </button>
        </a>
      </div>
    </div>
  </header>
);
