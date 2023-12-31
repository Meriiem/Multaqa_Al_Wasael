// This is the code for the third page
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import r1 from "../assets/users/r1.jpg";
import r2 from "../assets/users/r2.jpg";
import r3 from "../assets/users/r3.jpg";
import r4 from "../assets/users/r4.jpg";
import r5 from "../assets/users/r5.jpg";
import r6 from "../assets/users/r6.jpg";

const users = [
  {
    name: "Ali",
    image: r1,
    service: "Education",
    neighborhood: "Al Majaz", // Updated neighborhood
    time: "10:00 AM",
    date: "01/01/2024",
    location: "Al Majaz Library", // Updated location
    email: "ali@example.com",
    phone: "055-123-4567",
    description: "I will teach you how to play the guitar",
  },
  {
    name: "Fatima",
    image: r2,
    service: "Festival",
    neighborhood: "Al Majaz",
    time: "12:00 PM",
    date: "02/02/2024",
    location: "Al Majaz Park", // Updated location
    email: "fatima@example.com",
    phone: "055-234-5678",
    description: "I will show you how to plant and care for a garden", // Updated description
  },
  {
    name: "Ahmed",
    image: r3,
    service: "Event",
    neighborhood: "Al Majaz", // Updated neighborhood
    time: "2:00 PM",
    date: "03/03/2024",
    location: "Al Majaz Stadium", // Updated location
    email: "ahmed@example.com",
    phone: "055-345-6789",
    description: "I will organize a gardening workshop for everyone", // Updated description
  },
  {
    name: "Maryam",
    image: r4,
    service: "Local Artisans",
    neighborhood: "Al Majaz", // Updated neighborhood
    time: "8:00 PM",
    date: "06/06/2024",
    location: "Al Majaz Art Gallery", // Updated location
    email: "maryam@example.com",
    phone: "055-678-9012",
    description: "I will showcase my garden-themed paintings and sculptures", // Updated description
  },
  {
    name: "Omar",
    image: r5,
    service: "Community Garden",
    neighborhood: "Al Majaz", // Updated neighborhood
    time: "6:00 PM",
    date: "05/05/2024",
    location: "Al Majaz Garden", // Updated location
    email: "omar@example.com",
    phone: "055-567-8901",
    description: "I will help you plant flowers and herbs in Al Majaz Garden", // Updated description
  },
  {
    name: "Sara",
    image: r6,
    service: "Health and Wellness",
    neighborhood: "Al Majaz", // Updated neighborhood
    time: "4:00 PM",
    date: "04/04/2024",
    location: "Al Majaz Health Center", // Updated location
    email: "sara@example.com",
    phone: "055-456-7890",
    description: "I will guide you through a yoga session",
  },
];

// Define some animation variants for the cards
const cardVariants = {
  initial: { scale: 0.9, opacity: 0.8 },
  hover: { scale: 1, opacity: 1 },
  tap: { scale: 0.95 },
};

export default function ThirdPage() {
  const { neighborhood, service } = useParams();

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddActivityClick = () => {
    document.getElementById("form").classList.remove("hidden");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      time,
      date,
      location,
      email,
      phone,
      description,
      image,
      service,
      neighborhood,
    };
    users.push(newUser);
    document.getElementById("form").classList.add("hidden");
    setName("");
    setTime("");
    setDate("");
    setLocation("");
    setEmail("");
    setPhone("");
    setDescription("");
    setImage("");
    alert("Your service has been added successfully!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCardClick = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        id="getStarted"
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 float-right"
        onClick={handleAddActivityClick}
      >
        Add Activity
      </button>

      <h1 className="text-4xl font-bold text-center mb-4">
        Choose the Activity you Want to Explore
      </h1>
      {/* <p className="text-xl text-gray-600 text-center mb-8">
        You have selected {service} in {neighborhood}
      </p> */}

      <p className="text-xl text-gray-600 text-center mb-8">
        You have selected Community Garden in Al Majaz
      </p>

      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.name} className="flex flex-col">
            <motion.div
              className="card rounded-lg shadow-lg overflow-hidden mb-4"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleCardClick(user)}
              style={{ width: "100%", height: "100%" }} // Set a fixed height
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-48 object-cover"
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {user.name}
                </h2>
                <p className="text-lg text-gray-600">{user.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-3xl font-bold text-center mb-4">
              {selectedUser.name}'s Info
            </h2>
            <img
              src={selectedUser.image}
              alt={selectedUser.name}
              className="w-full h-48 object-cover mb-4"
            />
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${selectedUser.email}`}
                className="flex items-center"
              >
                {selectedUser.email}
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${selectedUser.phone}`}
                className="flex items-center"
              >
                {selectedUser.phone}
              </a>
            </p>
            <p>
              <strong>Description:</strong> {selectedUser.description}
            </p>
            <p>
              <strong>Location:</strong> {selectedUser.location}
            </p>
            <p>
              <strong>Date:</strong> {selectedUser.date}
            </p>
            <p>
              <strong>Time:</strong> {selectedUser.time}
            </p>
            <button
              className="button bg-red-600 text-white px-4 py-2 rounded-lg mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div
        id="form"
        className="form hidden fixed inset-0 z-10 bg-gray-900 bg-opacity-50 flex items-center justify-center"
        style={{ overflowY: "auto" }}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          style={{ maxHeight: "80vh", overflowY: "auto" }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            Add your own service
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-600 mb-2">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="input w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-600 mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-600 mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-600 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input w-full border border-gray-300 px-4 py-2 rounded-lg"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-600 mb-2">
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="input w-full border border-gray-300 px-4 py-2 rounded-lg"
                accept="image/*"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="button bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={() =>
                  // Hide the form by using a CSS class
                  document.getElementById("form").classList.add("hidden")
                }
              >
                Cancel
              </button>
              <button
                type="submit"
                className="button bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
