import React, { useState } from "react";

const ServiceItem = (props) => {
  const { service, setService, setActive } = props;
  return (
    <h4
      onClick={() => {
        setService(service);
        setActive(true);
      }}
      className="m-2 p3"
      style={{ textDecoration: "underline", color: "blue" }}
    >
      {" "}
      <h3>{service}</h3>
      <hr />
    </h4>
  );
};

export const Servives = (props) => {
  const { services, setService, setActive } = props;
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="row">
        {services.map((service) =>
          typeof service === "string" ? (
            <ServiceItem
              service={service}
              setActive={setActive}
              setService={setService}
            />
          ) : (
            <>
              <h4 onClick={() => setShow(!show)}> Autres specialités</h4>
              {show &&
                service.specialities.map((speciality) => (
                  <ServiceItem
                    service={speciality}
                    setActive={setActive}
                    setService={setService}
                  />
                ))}
            </>
          )
        )}
      </div>
    </>
  );
};
