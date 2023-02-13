import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function SignIn() {
  const [SForm, setSForm] = useState({ username: "", password: "", Email: "" });
  const [Users, setUsers] = useState([]);

  const onChangeInput = (e) => {
    setSForm({ ...SForm, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (SForm.username === "" || SForm.password === "" || SForm.Email === "") {
      prompt("bu alan boş olamasın");
      return false;
    }
    setUsers([...Users, SForm]);
    console.log(Users);
  };
  return (
    <>
      <div>
        <form className="w-full max-w-sm mx-auto py-24" onSubmit={onSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={onChangeInput}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                name="username"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                E-mail
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={onChangeInput}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                name="Email"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={onChangeInput}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                name="password"
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-blue-300 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
