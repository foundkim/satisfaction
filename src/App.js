import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "./aides.jpeg";
import { Servives } from "./components/Services";
import { Satisfaction } from "./components/Satisfaction";
import ThankPage from "./components/ThankPage";

function App() {
  const [active, setActive] = useState(false);

  const [currentService, setService] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="App"
    >
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
          <Satisfaction
            handleShow={handleShow}
            service={currentService}
            motif={motif}
          />
        )}
      </div>
      <ThankPage handleClose={handleClose} show={show} />
    </div>
  );
}

export default App;
