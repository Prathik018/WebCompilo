import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const About = () => {
  return (
    <MDBContainer fluid className="p-3   h-100 background-radial-gradient overflow-hidden">
      {/* About Page Content */}
      <MDBRow className="mb-5 justify-content-center">
        <MDBCol md="6">
          <MDBCard className="shadow-lg">
            <MDBCardBody className="text-center">
              <MDBCardTitle className="h3 mb-4 font-weight-bold" style={{ color: "black" }}>
                About WebCompilo
              </MDBCardTitle>
              <MDBCardText style={{ color: "black", textAlign: "justify" }}>
                WebCompilo is a platform designed for programmers of all levels to write, test, and deploy code seamlessly. With support for multiple languages like JavaScript, Python, C, C++, and Java, we make it easier for developers to experiment with their code in a user-friendly environment.
              </MDBCardText>
              <MDBCardText style={{ color: "black", textAlign: "justify" }}>
                Whether you are just starting your programming journey or you're a seasoned developer, WebCompilo provides the right tools to help you grow and share your knowledge with the programming community.
              </MDBCardText>
              <MDBCardTitle className="h4 mt-4" style={{ color: "black" }}>Developed By:</MDBCardTitle>
              <MDBCardText className="mb-4" style={{ color: "black", textAlign: "justify" }}>
                I’m Prathik Pai, a versatile student with a deep passion for coding, creativity, and cutting-edge technology. I have a strong foundation in C, Java, and Python, coupled with expertise in frontend technologies and Android development, allowing me to build functional and engaging digital experiences.
              </MDBCardText>
              <MDBCardText className="mb-4" style={{ color: "black", textAlign: "justify" }}>
                This project, WebCompilo, was created to provide an accessible, powerful platform for developers to write, test, and execute code on the go. With a goal of fostering learning, collaboration, and innovation, WebCompilo is your all-in-one tool for coding and development.
              </MDBCardText>

              <MDBCardTitle className="h5 mt-4" style={{ color: "black" }}>Connect with me:</MDBCardTitle>

              {/* Social Media Links */}
              <div className="d-flex justify-content-center gap-4 mt-3">
                <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='https://x.com/Prathik__Pai'>
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/prathikpai18/'>
                <MDBIcon fab icon='linkedin-in' />
                 </MDBBtn>

                <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='mailto:prathikvpai@gmail.com'>
                  <MDBIcon fab icon='google' />
                </MDBBtn>

                <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/Prathik018/'>
                  <MDBIcon fab icon='github' />
                </MDBBtn>

                <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='https://www.instagram.com/prathikk.pai/'>
                  <MDBIcon fab icon='instagram' />
                </MDBBtn>
              </div>

              {/* Button to go back to Home */}
              <MDBBtn color="primary" href="/" className="mt-4">
                Go Back Home
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;
