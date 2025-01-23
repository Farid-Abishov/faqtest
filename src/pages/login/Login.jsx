import { useState } from "react";
import logo from "../../assets/images/Group1.png";
import LoginInput from "../../components/login/loginInput";
import { loginUser } from "../../Api/auth"; // Import the loginUser function
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [userData, setUserData] = useState({ device_type: "web" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginHandle = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await loginUser(userData);
      // console.log('Login successful:', response);
      if (response.data.username === "admin") {
        navigate("/frquestions");
        console.log()
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center my-4">
        <h1 className="m-0 text-4xl font-semibold text-header-black">
          FAQ Support
        </h1>
        <img src={logo} alt="logo" />
      </div>

      <div className="shadow-custom-shadow flex flex-column justify-center items-center max-w-login-container-width max-h-login-container-height mx-auto rounded-2xl p-3">
        <div className="text-center w-entry-container-width my-40">
          <p className="font-semibold text-3xl uppercase my-4 font-entry-title">
            Giriş
          </p>
          <span className="text-custom-black">
            FAQ Support platformasına giriş
          </span>
          <LoginInput
            setUserData={setUserData}
            title="Elektron Poçt"
            type="email"
          />
          <LoginInput setUserData={setUserData} title="Şifrə" type="password" />
          <a href="#" className="underline block text-right mt-1">
            Şifrənizi unutduz?
          </a>
          <button
            onClick={loginHandle}
            className="bg-custom-red text-white rounded-md w-full h-10 mt-3"
            disabled={loading}
          >
            {loading ? "Daxil oluruq..." : "Daxil ol"}
          </button>
          {error && <p className="text-red-500 mt-2">{error.message}</p>}
        </div>
      </div>
    </>
  );
}