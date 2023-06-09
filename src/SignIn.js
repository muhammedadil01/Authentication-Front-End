import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./Signin.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const semail = (val) => {
    setemail(val.target.value);
  };

  const spswrd = (val) => {
    setpassword(val.target.value);
  };

  const login = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const logindata = await axios.post(
        "http://localhost:5000/login",
        { email, password },
        config
      );
      console.log(logindata.data);
      navigate("/home")
    } catch (error) {
      console.log("could'nt signup", error);
    }
  };
  return (
    <div>
      <MDBContainer fluid style={{ backgroundColor: "#eee" }}>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12" style={{ paddingTop: "50px" }}>
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">
                  Please enter your login and password!
                </p>

                <MDBInput
                  wrapperClass="mb-4 w-100"
                  onChange={semail}
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  onChange={spswrd}
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  className="mb-4"
                  label="Remember password"
                />

                <MDBBtn size="lg" onClick={login}>
                  Login
                </MDBBtn>

                <hr className="my-4" />

                <MDBBtn
                  className="mb-2 w-100"
                  size="lg"
                  style={{ backgroundColor: "#dd4b39" }}
                >
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with google
                </MDBBtn>

                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Sign in with facebook
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default SignIn;
