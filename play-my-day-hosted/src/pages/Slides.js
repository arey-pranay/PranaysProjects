import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faPause,
  faPlay,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { getDatabase, ref, get, child } from "firebase/database";
import { app } from "../Firebase/Firebase";
import "./SlideStyles.css";
import CardPopUp from "./CardPopUp";
import beepSound from "./beep2.mp3"; // Replace with the path to your audio file

const Slider = (user) => {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);
  const [itemz, setItemz] = useState([{ name: "0 Loading", duration: "00" }]);

  useEffect(() => {
    const items = sliderRef.current.querySelectorAll(".slider .item");

    function loadShow() {
      let stt = 0;
      items[active].style.transform = "none";
      items[active].style.zIndex = 1;
      items[active].style.filter = "none";
      items[active].style.opacity = 1;
      for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
      stt = 0;
      for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }

    loadShow();

    // Add event listeners for next and prev buttons
    const nextButton = sliderRef.current.querySelector("#next");
    const prevButton = sliderRef.current.querySelector("#prev");
    // nextButton.addEventListener("click", handleNextClick);
    // prevButton.addEventListener("click", handlePrevClick);

    // Clean up event listeners
    return () => {
      nextButton.removeEventListener("click", handleNextClick);
      prevButton.removeEventListener("click", handlePrevClick);
    };
  }, [active]);

  const handleNextClick = () => {
    try {
      setActive((prevActive) =>
        prevActive + 2 < itemz.length + 1 ? prevActive + 1 : 0
      );
      // console.log(active);
    } catch (error) {
      alert(error);
    }
  };

  const handlePrevClick = () => {
    setActive((prevActive) =>
      prevActive - 1 >= 0 ? prevActive - 1 : itemz.length - 1
    );
  };

  const loadItemz = () => {
    const invalidCharacterRegex = /[.$[\]]/g;
    const rawUsername = user.user.user.email.split("@")[0];
    const username = rawUsername.replace(invalidCharacterRegex, "-");
    const db = getDatabase(app);
    get(child(ref(db), `user/${username}`)).then((snapshot) => {
      const userData = snapshot.val();
      const newTasks = [];

      // Loop through the keys (e.g., 'a', 'b', 'c', etc.)
      for (const key in userData) {
        if (userData.hasOwnProperty(key)) {
          const taskData = userData[key];
          const newTask = {
            name: taskData[0],
            duration: taskData[1],
          };

          newTasks.push(newTask);
        }
      }
      setItemz(newTasks);
    });
  };

  useEffect(() => {
    loadItemz();
  }, []); // Load itemz initially
  // const [showPopup, setShowPopup] = useState(false);
  // const [popupTask, setPopupTask] = useState("");
  // const [popupTime, setPopupTime] = useState("");
  // const handlePopOut = (task, time) => {
  //   setPopupTask(task);
  //   setPopupTime(time);
  //   setShowPopup(true);
  // };
  // const closePopup = () => {
  //   setShowPopup(false);
  // };
  return (
    <div className="-z-10 ">
      <div className="slider text-center" ref={sliderRef}>
        {itemz.map((item, index) => (
          <div
            className={`item ${index === active ? "active" : ""} text-right`}
            key={index}
          >
            <h1 className="text-3xl md:text-4xl my-4 mx-4 font-sans text-cyan-200 font-extrabold">
              {item.name.split(" ").slice(1).join(" ")}
            </h1>
            <Timer initialMinutes={item.duration} />
            {/* <button
              onClick={() =>
                handlePopOut(item.name.split(" ")[1], item.duration)
              }
            >
              Pop Out
            </button> */}
          </div>
        ))}
        <button id="next" onClick={handleNextClick}>
          &gt;
        </button>
        <button id="prev" onClick={handlePrevClick}>
          &lt;
        </button>
      </div>
      {/* {showPopup && (
        <CardPopUp task={popupTask} time={popupTime} onClose={closePopup} />
      )} */}
    </div>
  );
};

const Timer = ({ initialMinutes }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [alert, setAlert] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setMinutes(initialMinutes); // Initialize minutes when initialMinutes prop changes
    setSeconds(0); // Reset seconds
    setIsActive(false); // Stop the timer
  }, [initialMinutes]);
  useEffect(() => {
    let interval;

    if (isActive && minutes >= 0) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setMinutes("Done ");
            setSeconds("D");
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
          if (minutes === 0 && seconds === 12) {
            if (audioRef.current && alert) {
              audioRef.current.play();
            }
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds, alert]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };
  const toggleAlert = () => {
    setAlert(!alert);
  };

  return (
    <div>
      <div className="mt-6 ml-5 text-3xl md:text-6xl text-white">
        <span>{String(minutes).padStart(2, "0")}:</span>
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
      <div className="flex justify-around ">
        <audio ref={audioRef}>
          <source src={beepSound} type="audio/mpeg" />
        </audio>
        <button
          onClick={toggleTimer}
          className="mt-12 text-white bg-cyan-300 rounded-2xl px-10 py-4"
        >
          {isActive ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        <button
          onClick={toggleAlert}
          className="mt-12 text-cyan-900 bg-purple-50 rounded-2xl px-4 py-2"
        >
          {alert ? (
            <FontAwesomeIcon icon={faBell} />
          ) : (
            <FontAwesomeIcon icon={faVolumeMute} />
          )}
          <p className=" text-xs">currently</p>
        </button>
      </div>
    </div>
  );
};

export { Timer };

export default Slider;
