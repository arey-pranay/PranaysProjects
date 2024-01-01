// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
// const Timer = ({ initialMinutes }) => {
//   console.log(initialMinutes);
//   const [minutes, setMinutes] = useState(initialMinutes);
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(true);

//   useEffect(() => {
//     let interval;

//     if (isActive && minutes >= 0) {
//       interval = setInterval(() => {
//         if (seconds === 0) {
//           if (minutes === 0) {
//             clearInterval(interval);
//             setIsActive(false);
//           } else {
//             setMinutes(minutes - 1);
//             setSeconds(59);
//           }
//         } else {
//           setSeconds(seconds - 1);
//         }
//       }, 1000);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isActive, minutes, seconds]);

//   const toggleTimer = () => {
//     setIsActive(!isActive);
//   };

//   // const resetTimer = () => {
//   //   setIsActive(false);
//   //   setMinutes(initialMinutes);
//   //   setSeconds(0);
//   // };

//   return (
//     <div>
//       <div className="mt-12 ml-5 text-3xl md:text-6xl text-white">
//         <span>{String(minutes).padStart(2, "0")}:</span>
//         <span>{String(seconds).padStart(2, "0")}</span>
//       </div>
//       <div>
//         <button
//           onClick={toggleTimer}
//           className="mt-8 ml-6 text-white bg-cyan-500 rounded-2xl px-7 py-4"
//         >
//           <FontAwesomeIcon icon={faPlay} /> / <FontAwesomeIcon icon={faPause} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timer;
