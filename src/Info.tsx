import React from "react";

export const Info: React.FC = () => (
  <>
    <div className="row">
      <div className="col-sm info-block">
        <h2>Schedule</h2>
        <p>Please arrive from 2.30pm. Our ceremony will start at 3pm.</p>
        <p>Drinks, canap&eacute;s, dinner and merriment to follow.</p>
        <p>Carriages will be at midnight.</p>
      </div>

      <div className="col-sm info-block">
        <h2>Getting there</h2>
        <p>
          <a
            href="https://www.acehotel.com/london/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ace Hotel, Shoreditch, London, E1 6JQ
          </a>
          <br />(
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://citymapper.com/go/1fjpqb2biu"
          >
            Use Citymapper
          </a>
          )
        </p>
        <p>
          Nearby stations:
          <ul>
            <li>Shoreditch Highstreet Overground station (6 minute walk)</li>
            <li>Old Street station (10 minute walk)</li>
            <li>London Liverpool Street station (15 minute walk)</li>
          </ul>
        </p>
        <p></p>
      </div>
    </div>

    <div className="row">
      <div className="col-sm info-block">
        <h2>Dress code</h2>
        <p>Comfortably formal.</p>
      </div>

      <div className="col-sm info-block">
        <h2>Honeymoon wish</h2>
        <p>Your presence is more than enough for us, we do not expect gifts.</p>
        <p>
          However if you'd like to give a gift to send us on our way, a donation
          to our honeymoon would be appreciated.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-sm info-block">
        <h2>Accommodation</h2>
        <p>
          There are lots of accommodation options nearby in Shoreditch, Aldgate
          and Liverpool Street.
        </p>
        <p>
          If you'd like to stay at{" "}
          <a
            href="https://www.acehotel.com/london/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ace Hotel
          </a>
          , you can use code{" "}
          <b>
            <i>WEDS</i>
          </b>{" "}
          to get 20% off.
        </p>
      </div>

      <div className="col-sm info-block">
        <h2>Questions?</h2>
        <p>
          If you have any questions, feel free to email us at{" "}
          <a href="mailto:joe.ruggieri@gmail.com">joe.ruggieri@gmail.com</a> or{" "}
          <a href="mailto:hpenfoundmarks@gmail.com">hpenfoundmarks@gmail.com</a>
          .
        </p>
      </div>
    </div>
  </>
);
