import axios from "axios";
import React, { useEffect, useState } from "react";

const t = 10;

const ForgotPassword = () => {
  const [phone, setphone] = useState("");
  const [otp, setotp] = useState(
    Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
  );
  const [loading, setloading] = useState(false);
  const [otpField, setotpField] = useState(false);
  const [time, settime] = useState(t);
  const [firstRender, setfirstRender] = useState(true);

  const resetOTP = () => {
    settime(t);
    settime((time) => time - 1); //force timer
    genOTP();
    setotpField(true);
    alert(otp);
  };

  function genOTP() {
    setotp(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
  }

  useEffect(() => {
    if (firstRender) {
      setfirstRender(false);
    } else {
      if (time > 0) {
        const otpTimer = setTimeout(() => {
          settime((time) => time - 1);
        }, 1000);

        return () => {
          clearTimeout(otpTimer);
        };
      } else {
        alert("OTP TIMED OUT");
      }
    }
  }, [time]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = {
      phoneNumber: phone,
    };

    const forgotPass = async () => {
      setloading(true);
      resetOTP();
      //   try {
      //     //verify phone
      //     await axios({
      //       method: "post",
      //       url: "",
      //       data: params,
      //     })
      //       .then((res) => {
      //         if (res.data.status === true) {
      //           //phone verified
      //           genOTP();
      //           alert(otp);
      //         } else {
      //           //error thrown from backend
      //         }
      //       })
      //       .catch(console.error());
      //   } catch (error) {
      //     alert(error.message);
      //   }
      setloading(false);
    };

    forgotPass();
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();

    const params = {
      phoneNumber: phone,
      OTP: otp,
    };

    const verifyOTP = async () => {
      setloading(true);
      try {
        //verify otp
        await axios({
          method: "post",
          url: "",
          data: params,
        })
          .then((res) => {
            if (res.data.status === true) {
              //phone verified
              genOTP();
              alert(otp);
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

    verifyOTP();
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
                    <h1 className="main-heading">Forgot Password</h1>
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
                          />
                        </div>
                      </div>

                      <div className="row mb-0 mt-4">
                        <div className="d-flex col-md-8 offset-md-3 justify-content-center">
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
                              <span style={{ height: "32px" }}>Send</span>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                    {otpField && (
                      <form
                        onSubmit={handleOTPSubmit}
                        className="d-flex  justify-content-evenly align-items-center"
                      >
                        <div className="row mb-3 mt-4">
                          <label className="col-md-4 col-form-label text-md-end">
                            OTP
                          </label>
                          <div className="col-md-6">
                            <input
                              id="OTP"
                              type="OTP"
                              className="form-control "
                              name="OTP"
                              value={phone}
                              onChange={(e) => setotp(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="btn btn-primary py-1 px-4"
                          >
                            {loading && (
                              <div className="loader-1">
                                <span></span>
                              </div>
                            )}

                            {!loading && (
                              <span style={{ height: "32px" }}>Send</span>
                            )}
                          </button>
                        </div>
                        <div>
                          {time > 0 ? (
                            <span>
                              {~~(time / 60)} min {time % 60} secs
                            </span>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-primary py-1 px-4"
                              onClick={resetOTP}
                            >
                              Rest OTP
                            </button>
                          )}
                          <span></span>
                        </div>
                      </form>
                    )}
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

export default ForgotPassword;
