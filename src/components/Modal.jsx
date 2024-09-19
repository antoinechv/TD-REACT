import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {children} {/* Le contenu dynamique à afficher dans le modal */}
      </div>
    </div>
  );
};

export default Modal;
