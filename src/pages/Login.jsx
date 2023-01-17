import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const background =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

const Login = () => {
  const navigate = useNavigate();
  const { user, logIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(err.message);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="sm:block absolute w-full h-full object-cover"
          src={background}
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[500px] h-[600px] mx-auto bg-black/75 text-white rounded">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {err ? <p className="text-xs text-red-600 py-2">{err}</p> : null}
              <form
                onSubmit={loginHandler}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className="focus:bg-slate-400 text-black p-3 bg-slate-600 rounded"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="mt-5 focus:bg-slate-400 text-black p-3 bg-slate-600 rounded"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" required />
                    Remember Me
                  </p>
                  <p>Need Help</p>
                </div>
                <p className="text-sm py-5">
                  <span className="text-gray-600">New to Netflix?</span>{" "}
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
