import React from "react";

export const Reason = ({ rate }) => {
  const note = 0;
  const reasons = [
    "Accueil",
    "Prise en charge",
    "Etat des chambres",
    "Qualité de la nourriture",
  ];
  return (
    <div className="row">
      {reasons.map((reason) => {
        return (
          <button
            onClick={() => rate(note, reason)}
            className="btn m-1"
            style={{ backgroundColor: "GrayText", color: "white" }}
          >
            {reason}
          </button>
        );
      })}
    </div>
  );
};
