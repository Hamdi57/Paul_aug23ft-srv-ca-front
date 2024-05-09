import PropTypes from "prop-types";

import "./ParticipantCard.css";

const ParticipantCard = ({ participant }) => {
  return (
    <div className="card">
      <div className="name-container">
        <img src="/participant.svg" alt="participant icon" style={{ width: "36px" }} />
        <div className="name-text">
          {participant.participant.firstName} {participant.participant.lastName}
        </div>
      </div>
      <div className="email-text">{participant.email}</div>
      {/* Add more details as needed */}
    </div>
  );
};

ParticipantCard.propTypes = {
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
