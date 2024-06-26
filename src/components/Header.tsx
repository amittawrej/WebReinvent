import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";
// import { Navigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {

    console.log("logged out");
    navigate("/signin");
    dispatch(logout());
  };
  return (
    <header className="flex space-x-20 h-10 bg-yellow-700">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className=" flex px-3 py-1.5 mr-2 border border-gray-300 rounded-md focus:outline-none bg-yellow-600"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
