import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Reason = ({ rate }) => {
  const note = 0;
  const reasons = [
    "Accueil",
    "Prise en charge",
    "Etat des chambres",
    "Qualité de la nourriture",
  ];
  const [formData, setFormData] = useState({ note, reason: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="row">
      <form className="d-flex flex-column">
        <label className="row">
          <h6 className="col-4"> Nom</h6>
          <input
            className="col-7"
            name="name"
            type="text"
            value={formData.name || ""}
            onChange={handleChange}
          />
        </label>
        <label className="row">
          <h6 className="col-4"> Téléphone</h6>

          <input
            className="col-7"
            name="phone"
            type="text"
            value={formData.phone || ""}
            pattern="0[157]{1}[0-9]{8}"
            maxLength={10}
            onChange={handleChange}
          />
        </label>
        <label>
          <h6>Raison</h6>
        </label>
        {reasons.map((reason) => {
          return (
            <label className="row">
              <di className="col-4">
                <input
                  style={{ height: 25, width: 25 }}
                  name="reason"
                  value={reason}
                  type="radio"
                  checked={formData.reasean === reason}
                  onChange={handleChange}
                />
              </di>
              <p className="col-8">{reason}</p>
            </label>
          );
        })}
        <Button type="submit">Enregistrer</Button>
      </form>
    </div>
  );
};
