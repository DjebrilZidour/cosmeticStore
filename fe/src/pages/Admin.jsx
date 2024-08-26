import React, { useState } from "react";
const Admin = () => {
    const [myCommands, setMyCommands] = useState([]);
    const getCommands = () => {
        fetch("http://localhost:1337/product", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((response) =>
          response.json().then((responseData) => setMyCommands(responseData.data))
        );
      };
    getCommands()
    return(
        <section>
            <h1 className="text-5xl text-green-500">Welcome Back Djebril</h1>
           
            {myCommands.map((command, index) => {
          return (
            <div
              key={index}
              className="my-4 py-4 border-2 border-blue-500 w-3/5 mx-auto rounded-xl"
            >
              <p>name : {command.name} </p>
              <p>phone : {command.phone} </p>
              <p>wilaya : {command.wilaya} </p>
              <p>time : {command.orderTime} </p>
            </div>
          );
        })}
        </section>
        
    )
};
export default Admin