import React from "react";

export const Servives = (props) => {
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
