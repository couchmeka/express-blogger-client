import { useState } from "react";
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Registration Page</h1>
      <h3>{registerMessage}</h3>
      <label>email</label>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          const registerResult = await auth.register(email, password);
          if (registerResult.success) {
						navigate("/login");
          }
          if (!registerResult.success) {
            setRegisterMessage(registerResult.message);
          }
        }}
      >
        Signup
      </button>
    </div>
  );
};

export default RegistrationPage;
