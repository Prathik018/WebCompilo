import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Home = () => {
  return (
    <MDBContainer fluid className="p-5 h-100 background-radial-gradient overflow-hidden">
      {/* First Row - Inspirational Quote and Buttons */}
      <MDBRow className="mb-5">
        <MDBCol md="6" className="d-flex flex-column justify-content-center text-center text-md-start">
          <h1 className="my-5 fs-1 fw-bold ls-tight px-3" style={{ color: "hsl(218, 81%, 95%)", fontSize: "3rem" }}>
            "The only way to learn a new programming language is by writing programs in it." 
            <br />
            <span style={{ color: "hsl(218, 81%, 75%)", fontSize: "2.8rem" }}>
              — Dennis Ritchie
            </span>
          </h1>
          <p className="px-3" style={{ color: "hsl(218, 81%, 85%) " }}>
            Join WebCompilo today and start your journey toward becoming a coding expert. Whether you're just starting or you're a seasoned pro, we provide the tools you need to write, test, and deploy code seamlessly.
          </p>
          <MDBBtn color="primary" size="lg" className="mb-4" href="/about">
            Learn More About Us
          </MDBBtn>
          <div className="d-flex justify-content-center gap-4">
            <Link to="/login">
              <MDBBtn color="success" size="md">Login</MDBBtn>
            </Link>
            <Link to="/register">
              <MDBBtn color="warning" size="md">Register</MDBBtn>
            </Link>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
