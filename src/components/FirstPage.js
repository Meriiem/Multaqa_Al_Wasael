import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import alKhan from "../assets/neighborhoods/al-khan.jpg";
import alMajaz from "../assets/neighborhoods/al-majaz.jpg";
import alNahda from "../assets/neighborhoods/al-nahda.jpg";
import alQasba from "../assets/neighborhoods/al-qasba.jpg";
import alTaawun from "../assets/neighborhoods/al-taawun.jpg";
import alQasimia from "../assets/neighborhoods/al-qasimia.jpg";
import universityCity from "../assets/neighborhoods/university-city.jpg";
import alNabba from "../assets/neighborhoods/al-nabba.jpg";
import butina from "../assets/neighborhoods/bu-tina.jpg";
import alHisn from "../assets/neighborhoods/al-hisn.jpg";

// Define some sample neighborhoods in Sharjah
const neighborhoods = [
  { name: "Al Khan", image: alKhan },
  { name: "Al Majaz", image: alMajaz },
  { name: "Al Nahda", image: alNahda },
  { name: "Al Qasba", image: alQasba },
  { name: "Al Taawun", image: alTaawun },
  { name: "Al Qasimia", image: alQasimia },
  { name: "University City", image: universityCity },
  { name: "Al Nabba", image: alNabba },
  { name: "Butina", image: butina },
  { name: "Al Hisn", image: alHisn },
];

// Define some animation variants for the cards
const cardVariants = {
  initial: { scale: 0.9, opacity: 0.8 },
  hover: { scale: 1, opacity: 1 },
  tap: { scale: 0.95 },
};

export default function FirstPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        Choose the neighborhood in Sharjah
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {neighborhoods.map((neighborhood) => (
          <Link to="/secondPage" key={neighborhood.name}>
            <motion.div
              className="card rounded-lg shadow-lg overflow-hidden"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <img
                src={neighborhood.image}
                alt={neighborhood.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {neighborhood.name}
                </h2>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
