import React from "react";
import { Link } from "react-router-dom";

const Backbutton = ({ destination = "/" }) => {
  return (
    <Link to={destination}>
      <div className="bg-sky-300 px-4 py-2 rounded-full w-fit shadow-2xl font-bold">
        Back {">"}
      </div>
    </Link>
  );
};

export default Backbutton;
