import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./index.css";
import logo from "./assets/logo.png";
import connections from "./assets/users/connections.jpg";
import activity from "./assets/users/activity.jpg";
import society from "./assets/users/society.jpg";

function Contact() {
  return (
    <div className="section py-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-900">Contact Us</h2>
      <div className="flex flex-col md:flex-row justify-center ">
        <div className="">
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or need assistance, feel free to reach out
            to us via email or phone.
          </p>
          <p className="text-gray-700 mt-4">
            <strong>Email:</strong> info@multaqa.com
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +123 456 789
          </p>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="section py-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Services</h2>
      <div className="flex flex-col md:flex-row py-8  justify-center ">
        <div className="md:pl-8">
          <p className="text-gray-700 leading-relaxed">
            Explore the comprehensive range of services offered by Multaqa
            Al-Wasael and embark on a journey tailored to your needs.
          </p>

          <Link to="/firstPage">
            <button
              id="getStarted"
              className="bg-blue-500 text-white px-6 py-3 mt-8 rounded-full shadow hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="logo mb-8">
        <img src={logo} alt="Multaqa Al-Wasael Logo" className="h-16" />
      </div>
      <div className="navbar">
        <ul className="flex justify-center space-x-4 text-gray-700">
          <li>
            <a
              href="#"
              className="active font-semibold border-b-2 border-blue-500 pb-2"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:border-b-2 hover:border-blue-500 pb-2"
            >
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-blue-500 pb-2">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-blue-500 pb-2">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="banner text-center py-12">
        <h1 className="text-4xl font-bold mb-2 text-blue-900">
          Welcome to Multaqa Al-Wasael
        </h1>
        <p className="text-lg mb-4 text-gray-600">
          The unified platform for the diverse communities in Sharjah
        </p>
        <Link to="/firstPage">
          <button className="bg-blue-500 text-white px-4 py-2 mt-8 rounded shadow hover:bg-blue-600">
            Get Started
          </button>
        </Link>
      </div>
      <div className="section py-8" id="about">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
          What is Multaqa Al-Wasael?
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={connections}
              alt="What is Multaqa Al-Wasael?"
              className="w-full rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-600 leading-relaxed">
              Multaqa Al-Wasael is a platform that enables seamless connections
              between individuals in Sharjah. Whether you are looking for a
              service, an activity, or a community, you can find it here.
              Multaqa Al-Wasael is a centralized space, empowering users to
              effortlessly showcase their offerings, consolidating a myriad of
              resources into one comprehensive and accessible hub.
            </p>
          </div>
        </div>
      </div>

      <div className="section py-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
          Why choose Multaqa Al-Wasael?
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={society}
              alt="What is Multaqa Al-Wasael?"
              className="w-full rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-600 leading-relaxed">
              Multaqa Al-Wasael is more than just a platform. It is a vision of
              a connected and inclusive society, where everyone can find what
              they need and share what they have. Multaqa Al-Wasael is a bridge
              between the diverse and vibrant commuext-4x across Sharjah,
              fostering mutual understanding and collaboration. Multaqa
              Al-Wasael is a gateway to a world of opportunities, where you can
              discover new possibilities and grow your potential.
            </p>
          </div>
        </div>
      </div>

      <div className="section py-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
          How to use Multaqa Al-Wasael?
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={activity}
              alt="What is Multaqa Al-Wasael?"
              className="w-full rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-600 leading-relaxed">
              Multaqa Al-Wasael is easy to use and navigate. You can then browse
              the categories of services and activities, or search for specific
              keywords. You can also post your own offerings, or join existing
              ones. You can contact the users, and review their services and
              activities. You can also invite your friends and family to join
              Multaqa Al-Wasael, and enjoy the benefits of being part of this
              amazing platform.
            </p>
          </div>
        </div>
      </div>

      <Services />

      <Contact />
      <div className="footer text-center py-8 bg-gray-200">
        <p className="text-gray-600">
          © 2023 Multaqa Al-Wasael. All rights reserved. |
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-500">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
