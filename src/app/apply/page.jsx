'use client'

import React from "react";
import PageHeader from "../components/PageHeader";

import styled from 'styled-components';
import WhatAppsLogo from "../components/WhatAppsLogo";


const ContactWrapper = styled.div`

`;
const StyledH5 = styled.h5`
  color: red;
  font-size: 26px;

`;
const StyledH52 = styled.h5`
  color: #f5b417;
  font-size: 26px;

`;
const Container = styled.div`
  text-align: center;
`;
const Container2 = styled.div`
  text-align: center;
`;
const InnerBox = styled.div`
  border-right: 1px solid #aaa;
  /* width: 50px; */

`;
const Highlgh = styled.h1`
  color: #301a52;
  font-size: 80px;
    font-weight: 800;
`;
const Highlgh2 = styled.h1`
  color: #ffffff;
  font-size: 60px;
    font-weight: 800;
`;
const FormContainer = styled.div`
width: 92%;
height: 60%;
`;
const BoxContainer = styled.div`
text-align: center;
`;
const UpperFooter = styled.div`

`;
const Box1 = styled.div`
color: #000;
`;
const Box2 = styled.div`
color: #000;
`;
const Box3 = styled.div`
color: #000;
`;

const Form2 = styled.div`
  width: 60%;
  background-color: #ffffff; /* correct white */
  margin: 10px;
  padding: 20px;
  border-radius: 8px; /* optional */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* optional for elevation */

    @media (max-width: 580px) {
  width: 100%;
  background-color: #ffffff; /* correct white */
  margin: 10px;
  padding: 10px;
  border-radius: 8px; /* optional */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const Form1 = styled.div`
  display: flex;
  justify-content: center;
  background-color: #301a52; /* correct white */
  padding: 40px;
`;




const page = () => {

  return (
    <ContactWrapper>
      <div >
        <PageHeader title="Contacts" />
        <WhatAppsLogo />
      </div>
      <div className="container-fluid">
        <div>
          <Container className="pt-5">
            <div>
              <StyledH5>Contact Info</StyledH5>
            </div>
            <div>
              <Highlgh>Connect With Us</Highlgh>
            </div>
          </Container>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '5px' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.357893715775!2d77.31232557555097!3d28.577679425694715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45b7e24b733%3A0xb8dd905f45fbfcd5!2sSector%2016%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e1!3m2!1sen!2sin!4v1750054370830!5m2!1sen!2sin" width="1300" height="600" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <UpperFooter className="my-5">
          <BoxContainer className="row ">
            <Box1 className="col-lg-4 col-md-6 col-sm-12">
              <InnerBox>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#f24080" d="M44.14 25.11a7.55 7.55 0 0 0-1.69-8.2A12.6 12.6 0 0 0 37.74 14a53.7 53.7 0 0 0-8.67-2.18a54.5 54.5 0 0 0-8.9-.92a12.85 12.85 0 0 0-5.43 1.1a7.56 7.56 0 0 0-4.39 7.13A1.21 1.21 0 0 0 12 20.25l4.23-1.51A1.39 1.39 0 0 0 17 17l-.37-1a.93.93 0 0 1 .86-1.25a60.3 60.3 0 0 1 10.9.76a60.5 60.5 0 0 1 10.51 3a.93.93 0 0 1 .38 1.47l-.7.84a1.38 1.38 0 0 0 .18 1.95l3.45 2.86a1.21 1.21 0 0 0 1.93-.52" />
                    <path fill="#45413c" d="M13.02 45.5a14.5 1.5 0 1 0 29 0a14.5 1.5 0 1 0-29 0" opacity="0.15" />
                    <path fill="#f24080" d="M13.37 35.66h28v6.07a.93.93 0 0 1-.93.93H14.3a.93.93 0 0 1-.93-.93z" />
                    <path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M13.37 35.66h28v6.07a.93.93 0 0 1-.93.93H14.3a.93.93 0 0 1-.93-.93z" strokeWidth="1" />
                    <path fill="#f24080" d="M41.37 35.66h-28l4-12.42a.93.93 0 0 1 .89-.64h18.23a.93.93 0 0 1 .89.64Z" />
                    <path fill="#ff866e" d="M16.73 26.33H38a1.2 1.2 0 0 1 .38.06l-1-3.15a.93.93 0 0 0-.89-.64H18.25a.93.93 0 0 0-.89.64l-1 3.15a1.2 1.2 0 0 1 .37-.06" />
                    <path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M41.37 35.66h-28l4-12.42a.93.93 0 0 1 .89-.64h18.23a.93.93 0 0 1 .89.64Z" strokeWidth="1" />
                    <path fill="#f24080" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M18.97 20.26h4.2v2.33h-4.2zm12.6 0h4.2v2.33h-4.2z" strokeWidth="1" />
                    <path fill="#ff866e" d="M14.44 13.78a12.9 12.9 0 0 1 5.44-1.17a54.5 54.5 0 0 1 8.9.92a54 54 0 0 1 8.67 2.18a12.7 12.7 0 0 1 4.71 2.95a7.53 7.53 0 0 1 2.23 5.72a7.54 7.54 0 0 0-1.94-7.47A12.6 12.6 0 0 0 37.74 14a53.7 53.7 0 0 0-8.67-2.18a54.5 54.5 0 0 0-8.9-.92a12.85 12.85 0 0 0-5.43 1.1a7.53 7.53 0 0 0-4.38 6.49a7.53 7.53 0 0 1 4.08-4.71" />
                    <path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M44.14 25.11a7.55 7.55 0 0 0-1.69-8.2A12.6 12.6 0 0 0 37.74 14a53.7 53.7 0 0 0-8.67-2.18a54.5 54.5 0 0 0-8.9-.92a12.85 12.85 0 0 0-5.43 1.1a7.56 7.56 0 0 0-4.39 7.13A1.21 1.21 0 0 0 12 20.25l4.23-1.51A1.39 1.39 0 0 0 17 17l-.37-1a.93.93 0 0 1 .86-1.25a60.3 60.3 0 0 1 10.9.76a60.5 60.5 0 0 1 10.51 3a.93.93 0 0 1 .38 1.47l-.7.84a1.38 1.38 0 0 0 .18 1.95l3.45 2.86a1.21 1.21 0 0 0 1.93-.52" strokeWidth="1" />
                    <path fill="#8ca4b8" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M14.3 42.67h26.14v1.4a.93.93 0 0 1-.93.93H15.23a.93.93 0 0 1-.93-.93z" strokeWidth="1" />
                    <path fill="#fff5e3" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M23.17 32.86a.94.94 0 0 1-.93.94H19a.94.94 0 0 1 0-1.87h3.27a.93.93 0 0 1 .9.93m13.54 0a.94.94 0 0 1-.94.94h-3.26a.94.94 0 1 1 0-1.87h3.26a.94.94 0 0 1 .94.93m-13.54-3.73a.93.93 0 0 1-.93.93H19.9a.93.93 0 0 1 0-1.86h2.34a.93.93 0 0 1 .93.93m12.6 0a.93.93 0 0 1-.93.93h-2.33a.93.93 0 1 1 0-1.86h2.33a.93.93 0 0 1 .93.93M23.64 25.4a.94.94 0 0 1-.94.93h-1.86a.94.94 0 1 1 0-1.87h1.86a.94.94 0 0 1 .94.94m5.6 0a.94.94 0 0 1-.94.93h-1.86a.94.94 0 1 1 0-1.87h1.86a.94.94 0 0 1 .94.94" strokeWidth="1" />
                    <path fill="#fff" stroke="#45413c" strokeLinejoin="round" d="M13.35 2.55a.32.32 0 0 1 .3 0a.33.33 0 0 1 .16.25l.41 4.45a.35.35 0 0 1-.22.35a.34.34 0 0 1-.39-.13l-2.43-3.66a.35.35 0 0 1 0-.28a.32.32 0 0 1 .2-.21Zm7.77-.06a.31.31 0 0 1 .22.2a.3.3 0 0 1 0 .29L19 6.78a.34.34 0 0 1-.62-.2l.3-4.4a.38.38 0 0 1 .14-.26a.36.36 0 0 1 .29 0ZM5.76 7.45a.37.37 0 0 0-.1.28a.35.35 0 0 0 .17.27l3.88 2.21a.35.35 0 0 0 .41-.06a.33.33 0 0 0 0-.41L7.8 6a.33.33 0 0 0-.24-.15a.33.33 0 0 0-.27.09ZM2.5 14.5a.35.35 0 0 0 .1.29a.32.32 0 0 0 .28.09l4.43-.59A.34.34 0 0 0 7.6 14a.35.35 0 0 0-.22-.35l-4.13-1.54a.33.33 0 0 0-.29 0a.31.31 0 0 0-.16.24Z" strokeWidth="1" />
                    <path fill="#fff5e3" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M34.84 25.4a.93.93 0 0 1-.93.93H32a.94.94 0 1 1 0-1.87h1.87a.94.94 0 0 1 .97.94m-5.14 3.73a.92.92 0 0 1-.93.93H26a.93.93 0 0 1 0-1.86h2.8a.92.92 0 0 1 .9.93m0 3.73a.93.93 0 0 1-.93.94H26a.94.94 0 0 1 0-1.87h2.8a.93.93 0 0 1 .9.93" strokeWidth="1" />
                  </svg>
                </div>
                <div className="py-4">
                  <h5>+91 95992 87097</h5>
                </div>
              </InnerBox>
            </Box1>
            <Box2 className="col-lg-4 col-md-6 col-sm-12">
              <InnerBox >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24">
                    <path fill="#f24080" d="M12 21.933a1.72 1.72 0 0 1-1.384-.691L5.555 14.5a7.894 7.894 0 1 1 12.885-.009l-5.055 6.749a1.72 1.72 0 0 1-1.385.693m-.008-18.867a6.8 6.8 0 0 0-4.578 1.749a6.89 6.89 0 0 0-1.05 9.1l5.051 6.727a.73.73 0 0 0 .584.292a.73.73 0 0 0 .586-.292l5.044-6.734A6.874 6.874 0 0 0 12.81 3.113a7 7 0 0 0-.818-.047" />
                    <path fill="#f24080" d="M12 12.5a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5m0-4a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 8.5" />
                  </svg>
                </div>
                <div className="py-3  " style={{ textAlign: 'center' }}>
                  <h5 >Ground Floor, Logix Park (Supreme Work), A-4-5, A Block, Sector 16, Noida, Uttar Pradesh 201301</h5>
                </div>
              </InnerBox>
            </Box2>
            <Box3 className="col-lg-4 col-md-6 col-sm-12">
              <div >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24">
                    <path fill="#f24080" d="M6.616 16.77q-.691 0-1.153-.463T5 15.154v-9.77q0-.69.463-1.152t1.153-.463h13.769q.69 0 1.153.463T22 5.385v9.769q0 .69-.462 1.153t-1.153.462zm6.884-5.24L6 5.945v9.21q0 .269.173.442t.443.173h13.769q.269 0 .442-.173t.173-.442v-9.21zm0-1.218l7.308-5.427q-.058-.058-.125-.087q-.068-.029-.183-.029h-14q-.096 0-.192.048q-.096.049-.154.106zm-9.884 9.457q-.691 0-1.153-.462T2 18.154v-9.5h1v9.5q0 .269.173.442t.443.173h14.769v1zM21 5.927q0-.277-.067-.55q-.068-.273-.125-.492q-.058-.058-.125-.087q-.068-.029-.183-.029h-14q-.096 0-.192.048q-.096.049-.154.106q-.058.22-.106.483T6 5.927V4.769h15z" />
                  </svg>
                </div>
                <div className="py-4 p-4 fs-5">
                  <h5>dinesh@scriza.in</h5>
                </div>
              </div>

            </Box3>
          </BoxContainer>
        </UpperFooter>


        <div style={{ display: 'flex', justifyContent: 'center' }} >
          <FormContainer style={{ backgroundColor: '#301a52', }} className="mb-5">
            <Container2 className="pt-5">
              <div>
                <StyledH52>Have a Question?</StyledH52>
              </div>
              <div >
                <Highlgh2>Drop a Line</Highlgh2>
              </div>
            </Container2>
            <Form1>
              <Form2>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    <span style={{ color: "red", fontSize: '20px' }}>*</span> Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    <span style={{ color: "red", fontSize: '20px' }}>*</span> Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Email address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    <span style={{ color: "red", fontSize: '20px' }}>*</span> Mobile Number
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Mobile Number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Remark</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col-auto">
                  <button type="submit" style={{ backgroundColor: '#4929c5', color: '#fff' }} className="btn  mb-3">Submit</button>
                </div>
              </Form2>
            </Form1>


          </FormContainer>

        </div>

      </div>
    </ContactWrapper>
  )
}

export default page
