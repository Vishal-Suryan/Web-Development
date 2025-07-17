import { useContext } from "react";
import UserContext from "./UserContext";
import { useState } from "react";

function UpdateUser() {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };
  return (
    <div>
      <h2>Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          placeholder="Enter new name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default UpdateUser;
