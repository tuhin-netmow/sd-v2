"use client";
import React, { useState } from "react";
import { UserDetails } from "./DetailsInfo";

interface InitialInfoProps {
  setStep: React.Dispatch<React.SetStateAction<number>>; // Adjust the type according to your actual implementation
  step: number;
  setUserInfo: React.Dispatch<React.SetStateAction<UserDetails>>; // Adjust the type according to your actual implementation
  userInfo: any;
}

const InitialInfo: React.FC<InitialInfoProps> = ({
  setStep,
  step,
  setUserInfo,
  userInfo,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const handleStepsAndData = async () => {
    setUserInfo({
      ...userInfo,
      email,
      password,
      confirm_password,
    });

    console.log("Updated userInfo:", {
      ...userInfo,
      email,
      password,
      confirm_password,
    });

    setStep(step + 1);

    const res = await fetch("https://squaddeck.onrender.com/public/api/otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    console.log(res);
  };

  return (
    <>
      <div className="col-lg-6 fs-2 p-4">
        <div className="p-lg-5">
          <div>
            <h5 className="quote-color fs-2">Register Account</h5>
            <p className="text-muted fs-3 pb-4">
              Get your Free SquadDeck account now.
            </p>
          </div>

          <div className="mt-4">
            <form className="needs-validation" noValidate>
              <div className="mb-3 pb-4">
                <label htmlFor="useremail" className="form-label">
                  Email <span className="text-danger ">*</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control fs-2"
                  placeholder="Enter email address"
                  required
                />
                <div className="invalid-feedback">Please enter email</div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="password-input">
                  Password
                </label>
                <div className="position-relative auth-pass-inputgroup pb-4">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control pe-5 password-input fs-2"
                    onPaste={(e) => e.preventDefault()}
                    placeholder="Enter password"
                    aria-describedby="passwordInput"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                  />
                  <button
                    className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                    type="button"
                    id="password-addon"
                  >
                    <i className="ri-eye-fill align-middle"></i>
                  </button>
                  <div className="invalid-feedback">Please enter password</div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password-input">
                  Confirm Password
                </label>
                <div className="position-relative auth-pass-inputgroup pb-4">
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    className="form-control pe-5 password-input fs-2"
                    onPaste={(e) => e.preventDefault()}
                    placeholder="Enter password"
                    id="password-input"
                    aria-describedby="passwordInput"
                    required
                  />
                  <button
                    className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                    type="button"
                    id="password-addon"
                  >
                    <i className="ri-eye-fill align-middle "></i>
                  </button>
                  <div className="invalid-feedback">
                    Please confirm your password
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={handleStepsAndData}
                  className="btn btn-success w-100 fs-2"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialInfo;
