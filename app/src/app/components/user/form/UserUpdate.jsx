import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../src/context/UserContext";
import UserService from "../../../../src/services/user.service";
import TokenService from "../../../../src/services/token.service";

const UserUpdate = () => {
  const { user, setUser } = useContext(UserContext);
  const [credentials, setCredentials] = useState(user);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(user);

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const {accessToken} = await UserService.update(credentials, user._id);
      TokenService.setTokenInLocalStorage(accessToken);
      console.log("userData: ", accessToken);
      const userToken = await TokenService.getUserFromLocalToken();
      setUser(userToken);
      console.log("user: ", user);
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="form">
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
    <style>
    {`
        .title {
            text-align: center;
        }
        
        .form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        `}
  </style>
  </>
  );
};

export default UserUpdate;
