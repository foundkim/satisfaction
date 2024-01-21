import React from "react";

export const Scale = ({ rate }) => {
  const intensity = [
    {
      value: 1,
      color: "#005C99",
    },
    {
      value: 2,
      color: "#0099CC",
    },
    {
      value: 3,
      color: "#33CCFF",
    },
    {
      value: 4,
      color: "#66FFCC",
    },
    {
      value: 5,
      color: "#00CC66",
    },
  ];
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {intensity.map((index) => {
          const note = index.value;
          const reason = "";
          return (
            <button
              onClick={() => rate(note, reason)}
              style={{
                borderRadius: "50%",
                height: 50,
                width: 50,
                backgroundColor: index.color,
              }}
              className="p-2 btn"
            >
              {" "}
              <h5 className="text-center ">{index.value}</h5>
            </button>
          );
        })}
      </div>
    </>
  );
};
