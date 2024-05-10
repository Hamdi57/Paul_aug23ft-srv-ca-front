import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import "./ParticipantCard.css";

const ParticipantCard = ({ participant, clickHandler, expanded, login }) => {
  const [extendedData, setExtendedData] = useState();
  useEffect(() => {
    const fetchExtendedData = async () => {
      console.log("test");
      if (!expanded) return;
      try {
        const basicAuth = btoa(`${login.username}:${login.password}`);

        const rawResponse = await fetch(`${login.baseUrl}/participants/${participant.email}`, {
          headers: {
            Authorization: `Basic ${basicAuth}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const response = await rawResponse.json();
        setExtendedData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExtendedData(); // Invoke the async function
  }, [expanded]);
  // const
  const cardClickHandler = (event) => {
    clickHandler(participant.email);
  };

  return (
    <div className={`card ${expanded ? "expanded" : ""}`} onClick={cardClickHandler} data-email={participant.email}>
      <div className="main-details">
        <div className="name-container">
          <img className="participant-icon" src="/participant.svg" alt="participant icon" style={{ width: "36px" }} />
          <div className="name-text-container">
            <div className="name-text">
              {participant.participant.firstName} {participant.participant.lastName}
            </div>
            {expanded && extendedData && <div className="extra-details-dob">Date of birth: {extendedData.details.dob}</div>}
          </div>
        </div>
        <div className="email-text">{participant.email}</div>
      </div>
      {expanded && extendedData && (
        <div className="extra-details-container">
          <div className="extra-details">
            Home
            <div className="extra-details-text">City: {extendedData.home.city}</div>
            <div className="extra-details-text">Country: {extendedData.home.country}</div>
          </div>
          <div className="extra-details">
            Work
            <div className="extra-details-text">Company Name: {extendedData.work.companyName}</div>
            <div className="extra-details-text">
              Salary: {extendedData.work.salary} {extendedData.work.currency}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ParticipantCard.propTypes = {
  login: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    baseUrl: PropTypes.string.isRequired,
  }).isRequired,
  expanded: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  participant: PropTypes.shape({
    email: PropTypes.string.isRequired,
    participant: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      // Add more validations for other properties if needed
    }).isRequired,
  }).isRequired,
};

export default ParticipantCard;
