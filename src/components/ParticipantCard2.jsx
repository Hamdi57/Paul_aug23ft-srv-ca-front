import { useState } from "react";
import PropTypes from "prop-types";
import "./ParticipantCard.css";

const ParticipantCard = ({ participant }) => {
  const [expanded, setExpanded] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState(null);

  const handleExpand = async () => {
    try {
      // Make a new call to a different API endpoint to fetch additional details using participant's email
      const response = await fetch(`https://participant-api.onrender.com/participants/${participant.email}/details`);
      const data = await response.json();
      setAdditionalDetails(data.additionalDetails);
      setExpanded(true);
    } catch (error) {
      console.error("Error fetching additional details:", error);
    }
  };

  return (
    <div className={`card ${expanded ? "expanded" : ""}`} onClick={!expanded ? handleExpand : null}>
      <div className="name-container">
        <img className="participant-icon" src="/participant.svg" alt="participant icon" style={{ width: "36px" }} />
        <div className="name-text">
          {participant.participant.firstName} {participant.participant.lastName}
        </div>
      </div>
      <div className="email-text">{participant.email}</div>
      {expanded && additionalDetails && (
        <div className="additional-details">
          {/* Render additional details here */}
          <div>Additional Details:</div>
          <div>{additionalDetails}</div>
        </div>
      )}
    </div>
  );
};

ParticipantCard.propTypes = {
  participant: PropTypes.shape({
    email: PropTypes.string.isRequired,
    participant: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ParticipantCard;
