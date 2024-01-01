import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Timer } from "./Slides";

const CardPopUp = ({ task, time, onClose }) => {
  return (
    <div className="popup bg-purple-900 rounded-3xl w-min pr-6 pl-0 py-4 m-6">
      <button className="ml-36" onClick={onClose}>
        ❌
      </button>
      <h1 className="text-3xl md:text-4xl mt-10 mx-4 font-sans text-cyan-200 font-extrabold">
        {task}
      </h1>
      <div>
        <Timer initialMinutes={time} />
      </div>
    </div>
  );
};

export default CardPopUp;
