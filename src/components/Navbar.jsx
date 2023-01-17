import React from "react";
import LogoNetflix from "../assets/Netflix_Logo_RGB.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-between px-2 md:px-7 z-[100] absolute w-full">
      <Link to="/">
        <img
          className="cursor-pointer md:w-[225px] md:h-[90px] w-[120px] h-[75px]"
          src={LogoNetflix}
          alt=""
        />
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white px-4 py-[4px] mr-2 md:mr-7 border border-white md:text-sm text-xs hover:bg-slate-50 hover:text-black rounded">
              Account
            </button>
          </Link>
          <button
            onClick={logOutHandler}
            className="bg-red-600 px-4 py-1 rounded cursor-pointer text-white md:text-sm text-xs hover:bg-transparent hover:border"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white px-4 py-[4px] mr-2 md:mr-7 border border-white md:text-sm text-xs hover:bg-slate-50 hover:text-black rounded">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-4 py-1 rounded cursor-pointer text-white md:text-sm text-xs hover:bg-transparent hover:border">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
