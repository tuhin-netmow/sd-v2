/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import "../../public/assets/css/app.css";
import "../../public/assets/scss/themes.scss";
import Link from "next/link";
import InitialInfo from "./InitialInfo";
import EmailOtp from "./EmailOtp";
import EmailDone from "./EmailDone";
import DetailsInfo, { UserDetails } from "./DetailsInfo";
import Image from "next/image";
import Script from "next/script";

const Register = () => {
  const [step, setStep] = useState<number>(1);
  const [userInfo, setUserInfo] = useState<UserDetails>({
    organisation_name: "",
    subdomain: "",
    phone: "",
    sports_category: "",
    country: "",
    email: "",
    password: "",
    confrim_password: "",
  });
  const getCurrentYear = () => {
    const yearAndData = new Date().getFullYear();
    return yearAndData;
  };
  console.log("u ", userInfo);
  return (
    <>
      {/* <!-- auth-page wrapper --> */}
      <div className="auth-page-wrapper auth-bg-cover d-flex justify-content-center align-items-center min-vh-100 ">
        <div className="bg-overlay"></div>
        {/* <!-- auth-page content --> */}
        <div className="auth-page-content overflow-hidden ">
          <div className="container">
            <div className="row mx-5">
              <div className="col-lg-12">
                <div className="card overflow-hidden m-5">
                  <div className="row justify-content-center g-0">
                    <div className="col-lg-6">
                      <div className="p-lg-5 p-4 auth-one-bg h-100">
                        <div className="bg-overlay"></div>
                        <div className="position-relative h-100 d-flex flex-column">
                          <div className="mb-4">
                            <Link href="/" className="d-block">
                              <Image
                                src="/assets/img/main_logo.png"
                                alt=""
                                width={165}
                                height={30}
                              />
                            </Link>
                          </div>
                          <div className="mt-auto">
                            <div className="mb-3">
                              <i className="ri-double-quotes-l display-4 quote-color"></i>
                            </div>

                            <div
                              id="carouselExampleCaptions"
                              className="carousel slide"
                              data-bs-ride="carousel"
                            >
                              <div className="carousel-indicators">
                                <button
                                  type="button"
                                  data-bs-target="#carouselExampleCaptions"
                                  data-bs-slide-to="0"
                                  className="active"
                                  aria-current="true"
                                  aria-label="Slide 1"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#carouselExampleCaptions"
                                  data-bs-slide-to="1"
                                  aria-label="Slide 2"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#carouselExampleCaptions"
                                  data-bs-slide-to="2"
                                  aria-label="Slide 3"
                                ></button>
                              </div>
                              <div className="carousel-inner text-center text-white-50 pb-5">
                                <div className="carousel-item active">
                                  <p className="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " The theme is really great with an amazing
                                    customer support. Thanks very much!"
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* <!-- end carousel --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {step === 1 && (
                      <InitialInfo
                        setUserInfo={setUserInfo}
                        userInfo={userInfo}
                        step={step}
                        setStep={setStep}
                      />
                    )}
                    {step === 2 && (
                      <EmailOtp
                        userEmail={userInfo.email}
                        step={step}
                        setStep={setStep}
                      />
                    )}
                    {step === 3 && <EmailDone step={step} setStep={setStep} />}
                    {step === 4 && (
                      <DetailsInfo
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        step={step}
                        setStep={setStep}
                      />
                    )}
                  </div>
                </div>
                {/* <!-- end card --> */}
              </div>
              {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end auth page content --> */}

        {/* <!-- footer --> */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <p className="mb-0 fs-2">
                    &copy; {getCurrentYear()} SquadDeck. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Netmow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- end Footer --> */}
      </div>
      {/* <!-- end auth-page-wrapper --> */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Register;
