import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample data for train arrivals
const trainArrivals = [
  { trainName: 'Express Train A', arrivalTime: '10:30 AM', status: 'On Time' },
  { trainName: 'Local Train B', arrivalTime: '10:45 AM', status: 'Delayed' },
  { trainName: 'Rapid Train C', arrivalTime: '11:00 AM', status: 'On Time' },
  { trainName: 'Intercity Train D', arrivalTime: '11:15 AM', status: 'On Time' },
  { trainName: 'Night Train E', arrivalTime: '11:30 AM', status: 'Cancelled' },
  { trainName: 'Luxury Train F', arrivalTime: '11:45 AM', status: 'On Time' },
  { trainName: 'Express Train G', arrivalTime: '12:00 PM', status: 'Delayed' },
];

const TrainArrivalInfo = () => {
  const [showMore, setShowMore] = useState(false);

  // Determine how many trains to display
  const displayedTrains = showMore ? trainArrivals : trainArrivals.slice(0, 3);

  // Static data for "From", "To", and "Date"
  const fromStation = 'Station A'; // Example static data
  const toStation = 'Station B'; // Example static data
  const travelDate = 'Tomorrow'; // Example static data for date

  return (
    <motion.div
      className="w-full max-w-2xl p-6 bg-gray-900 rounded-lg shadow-lg mt-8 text-center overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* From, To, and Date Information */}
      <div className="mb-4 text-left">
        <h3 className="text-xl text-white font-semibold">Journey Details</h3>
        <p className="text-lg text-gray-400">From: {fromStation}</p>
        <p className="text-lg text-gray-400">To: {toStation}</p>
        <p className="text-lg text-gray-400">Date: {travelDate}</p>
      </div>

      <h3 className="text-2xl text-white font-semibold mb-4">Train Arrivals</h3>

      {/* Scrollable Box for Train Arrival List */}
      <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-800 mb-4">
        {displayedTrains.map((train, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-4"
            initial={{ opacity: 0, scale: 0.9 }} // Initial state for scaling effect
            animate={{ opacity: 1, scale: 1 }} // Animate to full size
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col text-left">
              <h4 className="text-lg text-white font-medium">{train.trainName}</h4>
              <p className="text-sm text-gray-400">{train.arrivalTime}</p>
            </div>
            <span
              className={`text-sm ${
                train.status === 'On Time'
                  ? 'text-green-500'
                  : train.status === 'Delayed'
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}
            >
              {train.status}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {trainArrivals.length > 3 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md transition duration-300 hover:bg-indigo-500"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </motion.div>
  );
};

export default TrainArrivalInfo;


