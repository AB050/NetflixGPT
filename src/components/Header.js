import React from "react";
import { auth } from "../components/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute inset-x-0 top-0 px-8 py-2 bg-gradient-to-b from-black to-transparent z-40 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
      </div>

      {
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full"
            src={user.photoURL}
            alt="user-icon"
          />
          <button className="ml-2 text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      }
    </div>
  );
};

export default Header;
