import React from "react";

const ContactCard = ({ user, onClick }) => {
  return (
    <div>
      <button
        className="fixed top-2 left-2 bg-gray-500 text-white px-2 rounded-full"
        onClick={onClick}
      >
        x
      </button>

      <div className="bg-gray-300 flex flex-col items-center gap-5 p-8 ">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-20 rounded-full h-20 object-cover "
        />
        <h2 className="text-xl font-semibold  text-white ">
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <h3 className="text-lg font-semibold text-white">
          {user.login.username}
        </h3>
        <h4 className="text-md font-medium text-white"> {user.dob.age} ans</h4>
      </div>

      <div className="bg-slate-100 flex flex-col gap-5 p-5 h-screen">
        <div className="flex flex-col  bg-white m-2 p-4  rounded-md">
          <span className="text-sm font-semibold">téléphone</span>
          <a className="text-blue-500 cursor-pointer">{user.phone}</a>
        </div>
        <div className="flex flex-col  bg-white m-2 p-4  rounded-md">
          <span className="text-sm font-semibold">domicile</span>
          <a className="text-blue-500 cursor-pointer">{user.cell}</a>
        </div>
        <div className="flex flex-col  bg-white m-2 p-4  rounded-md">
          <span className="text-sm font-semibold">Email</span>
          <a href={`mailto:${user.email}`} className="text-blue-500 underline">
            {user.email}
          </a>
        </div>

        <div className="flex flex-col  bg-white m-2 p-4  rounded-md">
          <span className="text-sm font-semibold">adresse</span>
          <a className="text-blue-500 cursor-pointer">
            {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}
          </a>
        </div>
        <div className="flex flex-col  bg-white m-2 p-4  rounded-md">
          <span className="text-sm font-semibold">anniversaire</span>
          <a className="text-blue-500 cursor-pointer">
            {new Date(user.dob.date).toLocaleDateString()}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
