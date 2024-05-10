import { useState, useEffect } from "react";

import "./ParticipantList.css";
import ParticipantCard from "./ParticipantCard";

const ParticipantList = () => {
  const baseUrl = `https://participant-api.onrender.com`;
  // const baseUrl = `http://localhost:3000`;
  const username = "admin";
  const password = "P4ssword";

  const [state, setState] = useState([]);
  const [expandedEmail, setExpandedEmail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const basicAuth = btoa(`${username}:${password}`);

        const rawResponse = await fetch(`${baseUrl}/participants/details`, {
          headers: {
            Authorization: `Basic ${basicAuth}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const response = await rawResponse.json();
        setState(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const participantClickHandler = (email) => {
    setExpandedEmail(email);
    console.log(email);
  };
  return (
    <div>
      <ul>
        {state.length > 0 ? (
          state.map((participant) => (
            <li key={participant.email}>
              <ParticipantCard expanded={expandedEmail === participant.email} login={{ baseUrl, username, password }} participant={participant} clickHandler={participantClickHandler} />
            </li>
          ))
        ) : (
          <li className="loading">Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default ParticipantList;
