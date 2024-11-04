"use client"; // Ensure the page runs on the client side
import { useState } from "react";
import { motion } from "framer-motion";
import Trainform from "./components/Trainform";
import Contributors from "./components/Contribute";
import TrainArrivalInfo from "./components/TrainTime";

// Animation for each letter of "NextStop"
const letterAnimations = {
  n: { initial: { y: -100 }, animate: { y: 0 }, transition: { delay: 0.1, duration: 0.5 }},
  e: { initial: { y: 100 }, animate: { y: 0 }, transition: { delay: 0.2, duration: 0.5 }},
  x: { initial: { x: -100 }, animate: { x: 0 }, transition: { delay: 0.3, duration: 0.5 }},
  t: { initial: { x: 100 }, animate: { x: 0 }, transition: { delay: 0.4, duration: 0.5 }},
  s: { initial: { y: -100 }, animate: { y: 0 }, transition: { delay: 0.5, duration: 0.5 }},
  t2: { initial: { y: 100 }, animate: { y: 0 }, transition: { delay: 0.6, duration: 0.5 }},
  o: { initial: { x: -100 }, animate: { x: 0 }, transition: { delay: 0.7, duration: 0.5 }},
  p: { initial: { x: 100 }, animate: { x: 0 }, transition: { delay: 0.8, duration: 0.5 }},
};

export default function NextStop() {
  const [from, setFrom] = useState("yes");
  const [to, setTo] = useState("no");
  const [predictedTime, setPredictedTime] = useState("30 mins");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPredictedTime("30 mins"); // Example data for travel time
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Form and Travel Time Section (Left Side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center lg:items-start"
        >
          {/* Animated "NextStop" Title */}
          <div className="flex space-x-1 mb-8 text-white text-5xl font-bold">
            <motion.span {...letterAnimations.n}>N</motion.span>
            <motion.span {...letterAnimations.e}>e</motion.span>
            <motion.span {...letterAnimations.x}>x</motion.span>
            <motion.span {...letterAnimations.t}>t</motion.span>
            <motion.span {...letterAnimations.s}>S</motion.span>
            <motion.span {...letterAnimations.t2}>t</motion.span>
            <motion.span {...letterAnimations.o}>o</motion.span>
            <motion.span {...letterAnimations.p}>p</motion.span>
          </div>

          {/* Input Form Section */}
         <Trainform/>

          {/* Predicted Time Section */}
          {/* {from && to && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-2xl p-6 bg-indigo-600 rounded-lg shadow-lg mt-8 text-center"
            >
              <h3 className="text-2xl text-white font-semibold">
                Predicted Travel Time
              </h3>
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-4xl text-white mt-4"
              >
                {predictedTime}
              </motion.p>
            </motion.div>
          )} */}

          {/* Submit Button */}
          {/* <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#4f46e5" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="px-8 py-4 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 mt-10"
          >
            Calculate
          </motion.button> */}
        </motion.div>

        {/* Train Prediciton Section (Right Side) */}
      <TrainArrivalInfo/>
      </motion.div>
    </div>
    <Contributors/>
    </>
  );
}



