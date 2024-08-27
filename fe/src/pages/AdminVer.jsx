import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";



const Input = (props) => {
  const { label, type, value, setValue } = props;

  return (
    <div className="mb-6 pt-3 rounded bg-gray-200">
      <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
        {label}
      </label>
      <input
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)} // Use setValue to update the state
        className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-400 transition duration-500 px-3 pb-3"
      />
    </div>
  );
};



const AdminVer = () => {
  const [typedEmail, setTypedEmail] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const submitLogin = () => {
    if (typedEmail === "djebril" && typedPassword === "djebrildjebril") {
      navigate("/admin", { state: {etat:"true"} });
    } else {
      alert("Try again, man!"); // Show an alert or some UI for incorrect credentials
    }
  };

  return (
    <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl flex flex-col justify-center">
      <section>
        <h3 className="font-bold text-2xl text-center">Welcome Admin</h3>
      </section>

      <section className="mt-10 flex flex-col">
        <Input
          label="Email"
          type="email"
          value={typedEmail}
          setValue={setTypedEmail} // Pass the setTypedEmail function
        />
        <Input
          label="Password"
          type="password"
          value={typedPassword}
          setValue={setTypedPassword} // Pass the setTypedPassword function
        />
        <button onClick={submitLogin}>Access Dashboard</button>
      </section>
    </main>
  );
};

export default AdminVer;
