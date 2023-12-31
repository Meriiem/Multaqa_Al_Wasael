import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import education from "../assets/activity/education.jpg";
import community from "../assets/activity/community.jpg";
import artisans from "../assets/activity/artisans.jpg";
import event from "../assets/activity/event.jpg";
import garden from "../assets/activity/garden.jpg";
import health from "../assets/activity/health.jpg";
import sport from "../assets/activity/sport.jpg";

const services = [
  {
    name: "Education",
    description: "Learn something new or teach others",
    imageUrl: education,
    numberOfServices: 5,
  },
  {
    name: "Festival",
    description: "Celebrate the culture and traditions",
    imageUrl: community,
    numberOfServices: 8,
  },
  {
    name: "Event",
    description: "Join or host a fun and exciting event",
    imageUrl: event,
    numberOfServices: 3,
  },
  {
    name: "Health and Wellness",
    description: "Stay fit with community wellness programs",
    imageUrl: health,
    numberOfServices: 6,
  },
  {
    name: "Community Garden",
    description: "Get involved in gardening and promote green initiatives",
    imageUrl: garden,
    numberOfServices: 6,
  },
  {
    name: "Local Artisans",
    description: "Support local artists and craftsmen in the neighborhood",
    imageUrl: artisans,
    numberOfServices: 7,
  },
  {
    name: "Sports and Recreation",
    description: "Participate in sports leagues and recreational activities",
    imageUrl: sport,
    numberOfServices: 10,
  },
  {
    name: "Community Outreach",
    description: "Engage in outreach programs to help those in need",
    imageUrl: community,
    numberOfServices: 2,
  },
];

const buttonVariants = {
  initial: { scale: 0.9, opacity: 0.8 },
  hover: { scale: 1, opacity: 1 },
  tap: { scale: 0.95 },
};

export default function SecondPage() {
  // Get the neighborhood name from the URL params
  const { neighborhood } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        Choose The Type Of Service You Are Interested In
      </h1>
      {/* <p className="text-xl text-gray-600 text-center mb-8">
        You Have Selected {neighborhood} As Your Neighborhood
      </p> */}

      <p className="text-xl text-gray-600 text-center mb-8">
        You Have Selected Al Majaz As Your Neighborhood
      </p>

      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <Link to="/thirdPage" key={service.name} className="m-4">
            <motion.button
              className="button card shadow-lg overflow-hidden text-black rounded-lg flex flex-col items-center"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              style={{ width: "300px", height: "auto" }}
            >
              <img
                src={service.imageUrl}
                alt={`${service.name} Image`}
                className="mb-2 w-full h-auto object-cover"
                style={{ maxHeight: "200px" }}
              />
              <div className="p-4 text-center">
                <h2 className="text-2xl font-semibold">{service.name}</h2>
                <p className="text-lg">{service.description}</p>
                <p className="text-gray-500 mt-2">
                  Number of services: {service.numberOfServices}
                </p>
              </div>
            </motion.button>
          </Link>
        ))}
      </div>
    </div>
  );
}
