import React, { Component, useEffect, useState } from "react";
import "../css/Login.css";
import { isauthenticated } from "../auth";
import "../css/editprofile.css";
import { Link, useParams } from "react-router-dom";
import { read, update, updateuserhomepage } from "./apiuser";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Nav from "./nav";
import Dummyfooter from "./dummyfooter.js";

export default function Editprofile() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { userId } = useParams();

  const getUserData = async () => {
    const data = await axios.get(`http://localhost:8080/users/${userId}`);
    setName(data.data.name);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const clicksubmit = async (e) => {
    e.preventDefault();
    const token = isauthenticated().token;
    const res = await axios.put(`http://localhost:8080/users/${userId}`, {
      name,
      password: password,
    });
    if (res.status == 200) {
      alert("Your detail updated successfully.");
    } else {
      alert("Your detail is not updated.");
    }
    console.log("res of update: ", res, token);
  };

  return (
    <>
      <Nav />
      <div
        className="container position"
        style={{ height: "72vh", marginBottom: "20px" }}
      >
        <div
          className="formContent mt"
          style={{
            marginTop: "-80px",
          }}
        >
          <form>
            <h2 className="loginnameh2"> Edit Your Profile </h2>
            <div className="form-group">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="ept"
                id="name"
                name="name"
                placeholder="name"
                value={name}
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="ept"
                id="login"
                name="password"
                placeholder="Password"
                value={password}
              />
            </div>

            <button onClick={clicksubmit} className="edit-btn1" type="submit">
              UPDATE
            </button>
          </form>
        </div>
      </div>
      <Dummyfooter />
    </>
  );
}
