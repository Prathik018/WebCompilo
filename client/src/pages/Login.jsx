import { useState } from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // React Router navigation hook

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token); // Save token to localStorage
      navigate('/editor');

    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <MDBContainer fluid className="p-5 h-100 background-radial-gradient overflow-hidden">
      <MDBRow>
        <MDBCol md="6" className="text-center text-md-start d-flex flex-column justify-content-center">
          <h1 className="my-5 fs-1 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)', fontSize: '3rem' }}>
            Welcome Back
            <br />
            <span style={{ color: 'hsl(218, 81%, 75%)', fontSize: '2.8rem' }}>
              Log in to WebCompilo!
            </span>
          </h1>
          <p className="px-3" style={{ color: 'hsl(218, 81%, 85%)' }}>
            Continue your coding journey by logging into WebCompilo. Write, run, and test code instantly - anytime, anywhere.
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className="my-5 mx-14 bg-glass" style={{ height: '300px', width: '500px' }}>
            <MDBCardBody className="p-5 my-6 custom-card-body">
              <form onSubmit={(e) => { e.preventDefault(); login(); }}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <MDBBtn type="submit" className="w-100 mb-4" size="md">
                  Log In
                </MDBBtn>
              </form>
              <p className="text-center mt-2">
                Don't have an account?{' '}
                <Link to="/register" className="text-decoration-none">
                  Sign up here
                </Link>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
