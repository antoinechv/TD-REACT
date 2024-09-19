import React from "react";

const ContactItem = ({ user, onClick }) => {
  return (
    <a
      className="cursor-pointer p-2 border-b-[1px] w-full flex gap-2"
      onClick={onClick}
    >
      <span className="text-base font-semibold"> {user.name.first}</span>
      <span> {user.name.last}</span>
    </a>
  );
};

export default ContactItem;
