import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage();
  }, []);

const getMessage = async () => {
  try {
    const response = await axios.get("http://localhost:5000/message");
    setMessage(response.data.message); 
  } catch (error) {
    console.error('Error fetching message:', error);
  }
};


  return (
    <div>
      <h1>Basic Server/Client App</h1>
      <div>
        <h3>Message from server</h3>
        <div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
