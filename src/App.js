import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Servives = (props) => {
  const { services, setService, setActive } = props;

  return (
    <>
      <div className="row">
        {services.map((service) => (
          <h4
            onClick={() => {
              setService(service);
              setActive(true);
            }}
            className="m-2 p3"
            style={{ textDecoration: "underline", color: "blue" }}
          >
            <h3>{service}</h3>
            <hr />
          </h4>
        ))}
      </div>
    </>
  );
};

const Satisfaction = (props) => {
  const { service, motif } = props;
  return (
    <>
      <h3>{service ? `${motif} / ${service} ` : motif}</h3>

      <h5> Etes - vous satifaits ?</h5>
    </>
  );
};

function App() {
  const [active, setActive] = useState(false);

  const [currentService, setService] = useState("");

  const [motif, setMotif] = useState("");
  const motifWithServices = [
    {
      name: "Consultation",
      services: ["Diabétologie", "medecine generale"],
      color: "success",
    },
    {
      name: "Examen",
      services: ["Imagerie", "Laboratoire"],
      color: "primary",
    },
    {
      name: "Hospitalisation",
      services: [],
      color: "secondary",
    },
    {
      name: "Urgence",
      services: [],
      color: "danger",
    },
  ];

  return (
    <div className="App">
      <h1> Test</h1>

      <div className="container">
        {!active ? (
          <div className="row">
            {motifWithServices.map((motifWithService) => (
              <>
                {" "}
                <button
                  onClick={() => {
                    setMotif(motifWithService.name);

                    motifWithService.services.length === 0
                      ? setActive(true)
                      : setActive(false);
                  }}
                  className={`btn btn-${motifWithService.color} m-2`}
                >
                  {motifWithService.name}
                </button>
                {motif === motifWithService.name && (
                  <Servives
                    setService={setService}
                    setActive={setActive}
                    services={motifWithService.services}
                  />
                )}
              </>
            ))}
          </div>
        ) : (
          <Satisfaction service={currentService} motif={motif} />
        )}
      </div>
    </div>
  );
}

export default App;
