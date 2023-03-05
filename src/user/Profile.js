import React, { Component } from "react";
import { isauthenticated } from "../auth";
import { Navigate, Link } from "react-router-dom";
import { read } from "./apiuser";
import "../css/profile.css";
import Nav from "./nav.js";
import Dummyfooter from "./dummyfooter.js";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      redirecttosignin: false,
    };
  }

  init = async (userId) => {
    const token = isauthenticated().token;
    // console.log(userId,token)
    const res = await axios.get(`http://localhost:8080/users/${userId}`);
    console.log("res of user : ", res);
    if (res.status === 200) this.setState({ user: res.data });
    // read(userId, token).then((data) => {
    //   console.log("user data: ", data);
    //   if (data.error) {
    //     this.setState({ redirecttosignin: true });
    //     console.log("sahil");
    //   } else this.setState({ user: data });
    // });
  };

  componentDidMount() {
    const userId = window.location.href.split("/")[4];
    console.log("user detail:  ", userId);
    this.init(userId);
  }

  render() {
    const { redirecttosignin, user } = this.state;
    if (redirecttosignin) return <Navigate to="/signin" />;

    return (
      <>
        <Nav />
        <div className="UserPageContainer">
          <div className="Name">
            <h3 className="UserName">{user.name}</h3>
            <div className="container">
              <ul className="UserMenu">
                <Link className="Link" to={`/user/edit/${user._id}`}>
                  Edit Profile
                </Link>
              </ul>
            </div>
          </div>
          <div className="UserDetailSection">
            <h2 className="MainTitle">Your Detail</h2>
            <div className="UserDetail container">
              <table>
                <tbody>
                  <tr>
                    <td className="Title">
                      <h3>Email</h3>
                    </td>
                    <td>
                      <p className="value">{user.email}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="Title">
                      <h3>Joining Date</h3>
                    </td>
                    <td>
                      <p className="value">
                        {` ${new Date(user.created).toDateString()} `}{" "}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Dummyfooter />
      </>
    );
  }
}

export default Profile;
