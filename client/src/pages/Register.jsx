import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css/Register.css";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token); // Optional: Save token if needed
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data?.msg || err.message);
      setError(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <MDBContainer
      fluid
      className="p-5 h-100 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 fs-1 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)", fontSize: "3rem" }}
          >
            Start Your Coding Journey
            <br />
            <span style={{ color: "hsl(218, 81%, 75%)", fontSize: "2.8rem" }}>
              with WebCompilo!
            </span>
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%) " }}>
            Unleash your potential with a powerful cloud-based compiler built
            for developers, students, and enthusiasts alike. Whether you're
            writing your first "Hello World" or deploying complex algorithms in
            Java, C++, Python, or JavaScript — WebCompilo gives you the speed,
            flexibility, and syntax precision you need. Sign up now to write,
            run, and test code instantly - anytime, anywhere, with zero setup!
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard
            className="my-5 mx-14 bg-glass"
            style={{ height: "300px", width: "500px" }}
          >
            <MDBCardBody className="p-5 my-6 custom-card-body">
              <form onSubmit={handleSignup}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass="mb-2"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {error && (
                  <p className="text-danger text-center mb-3">{error}</p>
                )}

                <MDBBtn type="submit" className="w-100 mb-4" size="md">
                  Sign Up
                </MDBBtn>

                <p className="text-center mt-2">
                  Already have an account?{" "}
                  <Link to="/login" className="text-decoration-none">
                    Log in here
                  </Link>
                </p>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
