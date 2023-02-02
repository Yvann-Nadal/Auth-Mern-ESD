import Signin from "../../components/auth/Signin";
import Signup from "../../components/auth/Signup";

const AuthPage = () => {
  return (
    <div className="auth">
      <h2>Signup</h2>
      <Signup />

      <hr />

      <h2>Signin</h2>
      <Signin />
      <style>
        {`
            .auth {
                text-align: center;
            }
        `}
      </style>
    </div>
  );
};

export default AuthPage;
