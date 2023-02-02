import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../src/context/UserContext";

const MainNavbar = () => {
  const { user, signout } = useContext(UserContext);

  return (
    <div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to="/auth">Signin</Link>
                </li>
                <li>
                  <Link to="/auth">Signup</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to="/account">Account</Link>
                </li>
                <li>
                  <Link to={`/users/${user._id}`}>Update</Link>
                </li>
                <Link onClick={signout}>Logout</Link>
              </>
            )}
            <li>
              <Link to="/shops">Shops</Link>
            </li>
          </ul>
        </nav>
      </div>

      <style>
        {`
          .navbar {
            display: flex;
            justify-content: center;
            background-color: #f1f1f1;
            padding: 10px;
        }
        .navbar ul {
            list-style-type: none;
            overflow: hidden;
        }
        `}
      </style>
    </div>
  );
};

export default MainNavbar;
