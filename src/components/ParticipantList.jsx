import { useState, useEffect } from "react";

import "./ParticipantList.css";
import ParticipantCard from "./ParticipantCard";

const ParticipantList = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Define an async function
      try {
        const username = "admin";
        const password = "P4ssword";
        const basicAuth = btoa(`${username}:${password}`);

        const rawResponse = await fetch("https://participant-api.onrender.com/participants/details", {
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

    fetchData(); // Invoke the async function
  }, []); // Empty dependency array indicates the effect runs once on mount

  return (
    <div>
      <ul>
        {state.length > 0 ? (
          state.map((participant) => (
            <li key={participant.email}>
              <ParticipantCard participant={participant} />
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
