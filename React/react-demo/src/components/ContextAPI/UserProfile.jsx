import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>User Profile</h1>
      <p>name: {user.name}</p>
    </div>
  );
};

export default UserProfile;
