import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { data as stationNames } from "../utils/data"; // Adjust the path as necessary

export default function Trainform() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [filteredFromStations, setFilteredFromStations] = useState([]);
  const [filteredToStations, setFilteredToStations] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFromInput(value);
    setFilteredFromStations(
      stationNames.filter((station) =>
        station.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setToInput(value);
    setFilteredToStations(
      stationNames.filter((station) =>
        station.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const onSubmit = (data) => {
    console.log(data); // Log the form data
  };

  const selectFromStation = (station) => {
    setFromInput(station);
    setFilteredFromStations([]); // Clear suggestions
  };

  const selectToStation = (station) => {
    setToInput(station);
    setFilteredToStations([]); // Clear suggestions
  };

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Get the date for the next 7 days in YYYY-MM-DD format
  const getNextSevenDays = () => {
    const dates = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toISOString().split("T")[0]);
    }
    return dates;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* From Location Card */}
        <motion.div className="relative">
          <h2 className="text-xl text-gray-400 mb-2">From</h2>
          <input
            type="text"
            value={fromInput}
            onChange={handleFromChange}
            placeholder="Enter starting point"
            className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          />
          {filteredFromStations.length > 0 && (
            <div className="absolute z-10 w-full bg-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto text-gray-700">
              {filteredFromStations.map((station) => (
                <div
                  key={station}
                  onClick={() => selectFromStation(station)}
                  className="p-2 hover:bg-gray-700 hover:text-white cursor-pointer"
                >
                  {station}
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* To Location Card */}
        <motion.div className="relative">
          <h2 className="text-xl text-gray-400 mb-2">To</h2>
          <input
            type="text"
            value={toInput}
            onChange={handleToChange}
            placeholder="Enter destination"
            className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          />
          {filteredToStations.length > 0 && (
            <div className="absolute z-10 w-full bg-gray-300 text-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredToStations.map((station) => (
                <div
                  key={station}
                  onClick={() => selectToStation(station)}
                  className="p-2 hover:bg-gray-700 hover:text-white cursor-pointer"
                >
                  {station}
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Date Picker */}
        <motion.div>
          <h2 className="text-xl text-gray-400 mb-2">Date</h2>
          <input
            type="date"
            min={getTodayDate()} // Today or later
            {...register("date", { required: "Date is required" })}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </motion.div>

        {/* Time Picker */}
        <motion.div>
          <h2 className="text-xl text-gray-400 mb-2">Time</h2>
          <input
            type="time"
            {...register("time", { required: "Time is required" })}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          />
          {errors.time && <p className="text-red-500">{errors.time.message}</p>}
        </motion.div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#4f46e5" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-8 py-4 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 mt-10"
        >
          Show Details
        </motion.button>
      </motion.div>
    </form>
  );
}




