// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// The first page will display the choose the neighborhood in Sharjah list of some clickable options professionally organize them and add animation on hove.

export default function SecondPage() {
  const neighborhoods = [
    "Al Nahda",
    "Al Majaz",
    "Al Qasba",
    "Al Khan",
    "Al Taawun",
    "Al Mamzar",
    "Al Qasimia",
    "Al Nabaah",
    "Al Rolla",
    "Al Yarmook",
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Choose the neighborhood in Sharjah
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {neighborhoods.map((neighborhood) => (
          <Link
            to={`/services/${neighborhood}`}
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300 transition-colors duration-300"
          >
            <h2 className="text-2xl font-semibold text-center">
              {neighborhood}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

// The second page will be the list of services available, they will be clickable buttons along with descriptions, (ex, education, festival, event, etc).
function Services({ match }) {
  const neighborhood = match.params.neighborhood;
  const services = [
    {
      name: "Education",
      description: "Find the best schools and universities in Sharjah",
    },
    {
      name: "Festival",
      description: "Enjoy the cultural and artistic events in Sharjah",
    },
    {
      name: "Event",
      description: "Discover the latest happenings and activities in Sharjah",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Choose the service in {neighborhood}
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <Link
            to={`/list/${neighborhood}/${service.name}`}
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300 transition-colors duration-300"
          >
            <h2 className="text-2xl font-semibold text-center">
              {service.name}
            </h2>
            <p className="text-lg text-center">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// After choosing the type of activity the user will be taken to the third page where they can see a list of users who previously added their services where there will be the time, name, picture, description, and location and each service is clickable by the user. There should be a button on the top right where if the user wants to add their own service they will have a simple form that will show in the middle and they can add the name, time and location plus the date of the event and they can add thier email phone number and a picture that will be displayed.
function List({ match }) {
  const neighborhood = match.params.neighborhood;
  const service = match.params.service;
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState([
    {
      id: 1,
      time: "10:00 AM",
      name: "Sharjah Book Fair",
      picture: "https://via.placeholder.com/150",
      description: "The largest book fair in the region",
      location: "Expo Centre Sharjah",
    },
    {
      id: 2,
      time: "12:00 PM",
      name: "Sharjah Light Festival",
      picture: "https://via.placeholder.com/150",
      description: "A spectacular display of lights and colors",
      location: "Al Qasba",
    },
    {
      id: 3,
      time: "2:00 PM",
      name: "Sharjah Heritage Days",
      picture: "https://via.placeholder.com/150",
      description: "A celebration of the rich culture and history of Sharjah",
      location: "Heart of Sharjah",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newService = {
      id: services.length + 1,
      time: formData.get("time"),
      name: formData.get("name"),
      picture: formData.get("picture"),
      description: formData.get("description"),
      location: formData.get("location"),
    };
    setServices([...services, newService]);
    setShowForm(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        {service} in {neighborhood}
      </h1>
      <button
        className="bg-blue-500 text-white rounded-lg px-4 py-2 float-right mb-4"
        onClick={() => setShowForm(!showForm)}
      >
        Add your own service
      </button>
      {showForm && (
        <div className="bg-gray-200 rounded-lg p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label htmlFor="name" className="block text-lg font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="time" className="block text-lg font-semibold">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="block w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="location"
                  className="block text-lg font-semibold"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="block w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="picture"
                  className="block text-lg font-semibold"
                >
                  Picture
                </label>
                <input
                  type="url"
                  id="picture"
                  name="picture"
                  className="block w-full border rounded-lg px-4 py-2"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block text-lg font-semibold"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="block w-full border rounded-lg px-4 py-2"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white rounded-lg px-4 py-2 mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <Link
            to={`/detail/${service.id}`}
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300 transition-colors duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={service.picture}
                alt={service.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-2xl font-semibold">{service.name}</h2>
                <p className="text-lg">{service.time}</p>
              </div>
            </div>
            <p className="text-lg">{service.description}</p>
            <p className="text-lg">{service.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// when the user selects something, they will be taken to a page where there will be a solo page where the service selected is displayed along with phone number, and email and comments section.
function Detail({ match }) {
  const serviceId = match.params.serviceId;
  const [service, setService] = useState(null);
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Ali",
      comment: "This is a great event, I highly recommend it",
    },
    {
      id: 2,
      name: "Fatima",
      comment: "I had so much fun at this event, thank you for organizing it",
    },
    {
      id: 3,
      name: "Ahmed",
      comment: "This event was amazing, I learned a lot",
    },
  ]);
}

// // Services.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function ServicePage({}) {
//   const [services, setServices] = useState([]);

//   // A function to add a new service to the list
//   const [formVisible, setFormVisible] = useState(false); // Track form visibility

//   const addService = (service) => {
//     setServices([...services, service]);
//   };

//   const [imageSource, setImageSource] = useState("url");

//   const handleChange = (e) => {
//     if (e.target.name === "imageSource") {
//       setImageSource(e.target.value);
//     } else {
//       setImage(e.target.value);
//     }
//   };

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");
//   const [place, setPlace] = useState("");
//   const [time, setTime] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newService = {
//       name,
//       description,
//       image,
//       place,
//       time,
//     };
//     addService(newService);
//     setName("");
//     setDescription("");
//     setImage("");
//     setPlace("");
//     setTime("");
//     setFormVisible(false); // Hide the form after submission
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-center mt-8">
//         <Link
//           to="/"
//           className="bg-red-600 text-white px-4 py-2 mb-4 rounded-lg hover:bg-red-700"
//         >
//           Go Back
//         </Link>
//       </div>
//       <h1 className="text-4xl font-bold text-center mb-4">Services</h1>

//       <div className="flex justify-end mt-8">
//         <button
//           className="bg-blue-600 mb-4 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//           onClick={() => setFormVisible(!formVisible)} // Toggle form visibility
//         >
//           {formVisible ? "Close Form" : "Add a Custom Service"}
//         </button>
//       </div>

//       <div className="flex justify-center">
//         {" "}
//         {/* Center the form */}
//         {formVisible && (
//           <div className="form-container bg-gray-100 p-8 mt-8 rounded-lg shadow-lg">
//             {" "}
//             {/* Apply shadow to the container */}
//             <form onSubmit={handleSubmit}>
//               <h2 className="text-2xl font-bold text-center mb-4">
//                 Add a Custom Service
//               </h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex flex-col">
//                   <label htmlFor="name" className="text-gray-700 font-bold">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="border border-gray-300 p-2 rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label htmlFor="image" className="text-gray-700 font-bold">
//                     Image
//                   </label>
//                   <input
//                     type="text"
//                     id="image"
//                     value={image}
//                     onChange={(e) => setImage(e.target.value)}
//                     className="border border-gray-300 p-2 rounded-lg"
//                     placeholder="Enter an image URL"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col mt-4">
//                 <label htmlFor="localImage" className="text-gray-700 font-bold">
//                   Local Image
//                 </label>
//                 <input
//                   type="file"
//                   id="localImage"
//                   onChange={(e) =>
//                     setImage(URL.createObjectURL(e.target.files[0]))
//                   }
//                   className="border border-gray-300 p-2 rounded-lg"
//                   accept="image/*"
//                   required
//                 />

//                 <label
//                   htmlFor="description"
//                   className="text-gray-700 font-bold"
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="border border-gray-300 p-2 rounded-lg"
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 <div className="flex flex-col">
//                   <label htmlFor="place" className="text-gray-700 font-bold">
//                     Place
//                   </label>
//                   <input
//                     type="text"
//                     id="place"
//                     value={place}
//                     onChange={(e) => setPlace(e.target.value)}
//                     className="border border-gray-300 p-2 rounded-lg"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label htmlFor="time" className="text-gray-700 font-bold">
//                     Time
//                   </label>
//                   <input
//                     type="text"
//                     id="time"
//                     value={time}
//                     onChange={(e) => setTime(e.target.value)}
//                     className="border border-gray-300 p-2 rounded-lg"
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-center mt-8">
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>

//       <div className="grid grid-cols-3 gap-4">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg overflow-hidden"
//           >
//             <img
//               src={service.image}
//               alt={service.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-2xl font-bold text-gray-800">
//                 {service.name}
//               </h2>
//               <p className="text-gray-600">{service.description}</p>
//               {service.place && (
//                 <p className="text-gray-600">
//                   <span className="font-bold">Place:</span> {service.place}
//                 </p>
//               )}
//               {service.time && (
//                 <p className="text-gray-600">
//                   <span className="font-bold">Time:</span> {service.time}
//                 </p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ServicePage;
