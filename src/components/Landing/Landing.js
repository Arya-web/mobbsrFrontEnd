import React, { useEffect, useState } from "react";
import "./Landing.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Landing = () => {
  const [authenticated, setauthenticated] = useState(false);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setauthenticated(true);
    }
  }, []);

  const handleNav = (page) => {
    navigate(`/${page}`, { state: { refferer: location.pathname } });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    const user = {
      phoneNumber: sessionStorage.getItem("user"),
    };

    const userLogout = async () => {
      setloading(true);
      try {
        await axios({
          method: "post",
          url: "https://mobbsr.onrender.com/apis/logout",
          data: user,
        })
          .then((res) => {
            if (res.data.status === true) {
              sessionStorage.removeItem("user");
              navigate("/login", { state: { refferer: location.pathname } });
            } else {
              alert(res.data.response);
            }
          })
          .catch(console.error());
      } catch (error) {
        alert(error.message);
      }
      setloading(false);
    };

    userLogout();
  };

  return (
    <>
      <div className="landing">
        <div className="container">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="main-heading">Landing Page</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                molestie nunc quis felis tincidunt commodo. Mauris sodales, enim
                sed dictum bibendum, nunc lacus bibendum dolor, at pharetra
                ligula magna ac quam. Quisque faucibus feugiat erat, eget
                ultrices risus. Fusce nec leo id mauris varius molestie. Nam
                venenatis, ligula eu posuere gravida, ante ligula vestibulum
                libero, sed tincidunt ex metus ac nulla. Nam tincidunt
                vestibulum quam, id sagittis ipsum ultrices non. Donec sed
                pellentesque tellus. Sed vel erat nec ligula bibendum tempor.
                Fusce congue nunc sit amet erat commodo viverra a vitae dolor.
                Suspendisse vitae nibh et lacus viverra ornare vel eget purus.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              {!authenticated && (
                <div className="d-flex justify-content-evenly">
                  <span onClick={() => handleNav("register")}>
                    <button type="button" className="btn btn-primary py-1 px-4">
                      Register
                    </button>
                  </span>
                  <span onClick={() => handleNav("login")}>
                    <button type="button" className="btn btn-primary py-1 px-4">
                      Login
                    </button>
                  </span>
                </div>
              )}
              {authenticated && (
                <>
                  <div className="d-flex justify-content-evenly">
                    <span onClick={() => handleNav("update_user")}>
                      <button
                        type="button"
                        className="btn btn-primary py-1 px-4"
                      >
                        Update User
                      </button>
                    </span>
                    <span onClick={() => handleNav("change_pass")}>
                      <button
                        type="button"
                        className="btn btn-primary py-1 px-4"
                      >
                        Change Password
                      </button>
                    </span>
                    <span>
                      <button
                        type="button"
                        className="btn btn-primary py-1 px-4"
                        onClick={handleLogout}
                      >
                        {loading && (
                          <div className="loader-1">
                            <span></span>
                          </div>
                        )}
                        {!loading && (
                          <span style={{ height: "32px" }}>Logout</span>
                        )}
                      </button>
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
