import { useContext, useState } from "react";
import { UserContext } from "../../../../src/context/UserContext";
import UserService from "../../../../src/services/user.service";

const UserUpdate = () => {
  const { user } = useContext(UserContext);
  const [credentials, setCredentials] = useState({
    user: user._id,
    lastName: user.lastName,
    firstName: user.firstName,
    password: ""
  });
  const [error, setError] = useState(null);

  const handleChange = e => {
    setCredentials({ ...credentials, user: user._id, [e.target.name]: e.target.value });
    console.log(credentials);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await UserService.update(credentials);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={credentials.lastName || ""}
          onChange={handleChange}
        />
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={credentials.firstName || ""}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={credentials.password || ""}
          onChange={handleChange}
        />
        <input type="submit" value="Update" />
      </div>
    </form>
  );
};

export default UserUpdate;
