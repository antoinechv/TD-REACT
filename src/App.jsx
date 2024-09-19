import { useState } from "react";
import ContactCard from "./components/ContactCard";
import ContactItem from "./components/ContactItem";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchNewUser = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const newUser = await response.json();
      setData((prevData) => [...prevData, newUser.results[0]]);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredContacts = data.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  return (
    <div className=" w-screen h-screen flex flex-col  bg-white px-2  overflow-scroll gap-5">
      {loading && <p>Loading...</p>}

      <div className="flex flex-col gap-2 sticky top-0 bg-white py-5">
        <div className="flex flex-row justify-between items-center ">
          <h1 className="text-2xl font-black">Contacts</h1>
          <button
            onClick={fetchNewUser}
            className=" px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Ajouter
          </button>
        </div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Recherche"
          value={searchTerm} // L'entrée de recherche est liée à l'état `searchTerm`
          onChange={handleSearch} // Appeler la fonction handleSearch à chaque changement
          className="bg-gray-100 text-gray-700 p-2 rounded-md"
        />
      </div>

      <div className="flex flex-col gap-5 items-center">
        {filteredContacts.length > 0 ? ( // Utilisation des contacts filtrés
          filteredContacts.map((user, index) => (
            <ContactItem
              key={index}
              user={user}
              onClick={() => openModal(user)}
            />
          ))
        ) : (
          <p>Aucun contact trouvé</p> // Message si aucune correspondance
        )}
      </div>
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0">
          <div className=" w-full h-screen bg-white ">
            <ContactCard onClick={closeModal} user={selectedUser} />
          </div>
        </div>
      )}
    </div>
  );
}
