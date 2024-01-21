import React, { useState } from "react";
import happyImg from "../img/happy.jpg";
import unhappyImg from "../img/unhappy.jpg";
import { Scale } from "./Scale";
import { Reason } from "./Reason";

//Lien API
const URL = "http://localhost:3001/avis";

export const Satisfaction = (props) => {
  const { service, motif, handleShow } = props;
  const unhappy = "unhappy";
  const happy = "happy";
  const [appreciation, setAppreciation] = useState("");

  const rate = (note, reason) => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        motif,
        service,
        appreciation,
        note,
        reason,
      }),
    })
      .then((response) => {
        handleShow();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h3>{service ? `${motif} / ${service} ` : motif}</h3>

      <h5> Etes - vous satifaits ?</h5>

      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <div
              onClick={() => setAppreciation(happy)}
              className="row justify-content-center"
            >
              <img
                src={happyImg}
                style={{ height: 250, width: 250 }}
                className="m-3"
                alt="Happy"
              />

              <h3 className="text-center">Satisfait</h3>
            </div>
            {appreciation === happy && <Scale rate={rate} />}
          </div>
          <div className="col-6">
            <div
              onClick={() => setAppreciation(unhappy)}
              className="row justify-content-center"
            >
              <img
                src={unhappyImg}
                style={{ height: 250, width: 250 }}
                className="m-3"
                alt="UnHappy"
              />

              <h3 className="text-center">Insatisfait</h3>
            </div>
            {appreciation === unhappy && <Reason rate={rate} />}
          </div>
        </div>
      </div>
    </>
  );
};
