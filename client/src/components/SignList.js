import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles/SignList.css";

const SignList = () => {
  const [signs, setSigns] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/signs")
      .then((res) => {
        console.log(res.data);
        setSigns(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      {signs.map((sign) => (
        <div key={sign._id} className="card">
          <h2>{sign.name}</h2>
          <img src={sign.boxArt} alt={sign.name} />
          <h3>{sign.dates}</h3>
          <Link to={`/sign/${sign._id}`}>Traits</Link>
        </div>
      ))}
    </div>
  );
};

export default SignList;
