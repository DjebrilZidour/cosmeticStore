import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Admin = (props) => {
  const navigate = useNavigate();
  const LOCAL_STORAGE_KEYS = {
  isLogged: "isUserLoggedIn",
};

const getIsUserLogged = () => {
  const isUserLogged =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.isLogged));
  if (typeof isUserLogged === "boolean") {
    return isUserLogged
  } else {
    return false
  }
};

const isUserLogged = getIsUserLogged()

if (!isUserLogged) {
  navigate("/admin-verification")
}

  
    const [myCommands, setMyCommands] = useState([]);
    const getCommands = () => {
        fetch("https://cosmeticstore-2ijr.onrender.com/product", {
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
    
    return(<>
      <section style={{display:props.state?"block":"hidden"}}>
              <h1 className="text-5xl text-green-500">Welcome Back Djebril</h1>
             
              {myCommands.map((command, index) => {
            return (
              <>
              <div
                key={index}
                className="my-4 py-4 border-2 border-blue-500 w-3/5 mx-auto rounded-xl"
              >
                <p>name : {command.name} </p>
                <p>phone : {command.phone} </p>
                <p>wilaya : {command.wilaya} </p>
                <p>time : {command.orderTime} </p>
              </div>
              </>
            );
          })}
          </section>
          <button></button>
      </>
         
          
      )
   
   
};
export default Admin