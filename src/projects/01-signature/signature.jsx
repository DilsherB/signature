import { useState } from "react";
import Title from "../components/Title";

const signature = () => {
  const inputStyle = {
    border: "none",
    borderBottom: "1px solid #000",
    outline: "none",
    fontSize: "1.5rem",
    margin: "1rem 0",
    padding: "0.5rem 1rem",
  };
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Title classes={"title"} text={!name ? "Name" : name} />
        <Title classes={"subtitle"} text={date ? date : "DoB"} />
        <ul style={{ listStyleType: "none" }}>
          <li>Here in this app I used Vite + React.</li>
          <li>
            I practiced here conditional rendering, props, propTypes, useState,
            importing and using react components of React.
          </li>
          <li>I practiced here inline styling, css file stying of CSS.</li>
        </ul>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleName}
          style={inputStyle}
        />
        <div>
          <span style={{ fontSize: "2rem", marginRight: "1rem" }}>DoB: </span>
          <input
            type="date"
            value={date}
            onChange={handleDate}
            style={inputStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default signature;
