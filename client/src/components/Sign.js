import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./styles/Sign.css";

const Sign = () => {
  const [sign, setSign] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/signs/${id}`)
      .then((res) => {
        console.log(res.data);
        setSign(res.data);
      })
      .catch((err) => console.log("GET SIGN BY ID ERROR", err));
  }, [id]);

  return (
    <>
      <div className="content">
        <div className="image">
          <img src={sign.boxArt} alt={sign.name} />
        </div>
        <div className="description">
          <h1>{sign.name}</h1>
          <h2>{sign.dates}</h2>
          <p>{sign.traits}</p>
        </div>
      </div>
    </>
  );
};

export default Sign;
