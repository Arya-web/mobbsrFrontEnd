import axios from "axios";
import React, { useState } from "react";

const ChangePass = () => {
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [newPass, setnewPass] = useState("");
  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = {
        phoneNumber: phone,
        password: password,
        newPassword: newPass
    };

    const changePassword = async () => {
      setloading(true);
      try {
        await axios({
          method: "post",
          url: "",
          data: params,
        })
          .then((res) => {
            if (res.data.status === true) {
              //completed successfully
            } else {
              //error thrown from backend
            }
          })
          .catch(console.error());
      } catch (error) {
        alert(error.message);
      }
      setloading(false);
    };

    changePassword();
  };

  return (
    <>
      <div className="main-div">
        <main className="w-100 m-auto">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h1 className="main-heading">Change Password</h1>
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <label className="col-md-4 col-form-label text-md-end">
                          Phone Number
                        </label>
                        <div className="col-md-6">
                          <input
                            id="Phone"
                            type="Phone"
                            className="form-control "
                            name="Phone"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label className="col-md-4 col-form-label text-md-end">
                          Password
                        </label>
                        <div className="col-md-6">
                          <input
                            id="password"
                            type="password"
                            className="form-control "
                            name="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label className="col-md-4 col-form-label text-md-end">
                          New Password
                        </label>
                        <div className="col-md-6">
                          <input
                            id="password"
                            type="password"
                            className="form-control "
                            name="password"
                            value={newPass}
                            onChange={(e) => setnewPass(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="row mb-0 mt-4">
                        <div className="d-flex col-md-8 offset-md-3">
                          <button
                            type="submit"
                            className="d-flex btn btn-primary py-1 px-4"
                          >
                            {loading && (
                              <div className="loader-1">
                                <span></span>
                              </div>
                            )}

                            {!loading && (
                              <span style={{ height: "32px" }}>
                                Change Password
                              </span>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ChangePass;
