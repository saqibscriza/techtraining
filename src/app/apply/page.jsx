// 'use client'

// import React from "react";
// import PageHeader from "../components/PageHeader";

// import styled from 'styled-components';



// const ContactWrapper = styled.div`

// `;
// const StyledH5 = styled.h5`
//   color: red;
//   font-size: 26px;

// `;
// const StyledH52 = styled.h5`
//   color: #f5b417;
//   font-size: 26px;

// `;
// const Container = styled.div`
//   text-align: center;
// `;
// const Container2 = styled.div`
//   text-align: center;
// `;
// const InnerBox = styled.div`
//   border-right: 1px solid #aaa;
//   /* width: 50px; */

// `;
// const Highlgh = styled.h1`
//   color: #301a52;
//   font-size: 80px;
//     font-weight: 800;
// `;
// const Highlgh2 = styled.h1`
//   color: #ffffff;
//   font-size: 60px;
//     font-weight: 800;
// `;
// const FormContainer = styled.div`
// width: 92%;
// height: 60%;
// `;
// const BoxContainer = styled.div`
// text-align: center;
// `;
// const UpperFooter = styled.div`

// `;
// const Box1 = styled.div`
// color: #000;
// `;
// const Box2 = styled.div`
// color: #000;
// `;
// const Box3 = styled.div`
// color: #000;
// `;

// const Form2 = styled.div`
//   width: 60%;
//   background-color: #ffffff; /* correct white */
//   margin: 10px;
//   padding: 20px;
//   border-radius: 8px; /* optional */
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* optional for elevation */

//     @media (max-width: 580px) {
//   width: 100%;
//   background-color: #ffffff; /* correct white */
//   margin: 10px;
//   padding: 10px;
//   border-radius: 8px; /* optional */
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   }
// `;

// const Form1 = styled.div`
//   display: flex;
//   justify-content: center;
//   background-color: #301a52; /* correct white */
//   padding: 40px;
// `;




// const page = () => {

//   return (
//     <ContactWrapper>
//       <div className="mb-4">
//         <PageHeader title="Apply Now" />
//       </div>
//       <div className="container-fluid">

//         <div style={{ display: 'flex', justifyContent: 'center' }} >
//           <FormContainer style={{ backgroundColor: '#301a52', }} className="mb-5">
//             <Container2 className="pt-5">
//               <div>
//                 <StyledH52>Have a Question?</StyledH52>
//               </div>
//               <div >
//                 <Highlgh2>Drop a Line</Highlgh2>
//               </div>
//             </Container2>
//             <Form1>
//               <Form2>
//                 <div className="mb-3">
//                   <label htmlFor="exampleFormControlInput1" className="form-label">
//                     <span style={{ color: "red", fontSize: '20px' }}>*</span> Name
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="exampleFormControlInput1"
//                     placeholder="Enter Your Name"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="exampleFormControlInput1" className="form-label">
//                     <span style={{ color: "red", fontSize: '20px' }}>*</span> Email address
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="exampleFormControlInput1"
//                     placeholder="Enter Email address"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="exampleFormControlInput1" className="form-label">
//                     <span style={{ color: "red", fontSize: '20px' }}>*</span> Mobile Number
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="exampleFormControlInput1"
//                     placeholder="Enter Your Mobile Number"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="exampleFormControlTextarea1" className="form-label">Remark</label>
//                   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                 </div>
//                 <div className="col-auto">
//                   <button type="submit" style={{ backgroundColor: '#4929c5', color: '#fff' }} className="btn  mb-3">Submit</button>
//                 </div>
//               </Form2>
//             </Form1>


//           </FormContainer>

//         </div>

//       </div>
//     </ContactWrapper>
//   )
// }

// export default page


'use client'

import React from "react";
import PageHeader from "../components/PageHeader";
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import { apiConfig } from "@/config/config";

const page = () => {
  const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${apiConfig.baseUrl}${apiConfig.endpoints.question}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200 || response.status === 201) {
        setSubmitSuccess(true);
        toast.success('Your application has been submitted successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        toast.error(error.response.data.message || 'Submission failed. Please try again.', {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactWrapper>
      <div className="mb-4">
        <PageHeader title="Apply Now" />
      </div>
      <div className="container-fluid">
        <div style={{ display: 'flex', justifyContent: 'center' }} >
          <FormContainer style={{ backgroundColor: '#301a52' }} className="mb-5">
            {submitSuccess ? (
              <SuccessMessage>
                <SuccessIcon>✓</SuccessIcon>
                Thank you for your application! We'll get back to you soon.
              </SuccessMessage>
            ) : (
              <>
                <Container2 className="pt-5">
                  <div>
                    <StyledH52>Have a Question?</StyledH52>
                  </div>
                  <div>
                    <Highlgh2>Drop a Line</Highlgh2>
                  </div>
                </Container2>
                <Form1 onSubmit={handleSubmit(onSubmit)}>
                  <Form2>
                    {/* Name Field */}
                    <div className="mb-3">
                      <Label htmlFor="name" className="form-label">
                        <span style={{ color: "red", fontSize: '20px' }}>*</span> Name
                      </Label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        placeholder="Enter Your Name"
                        {...register("name", {
                          required: "Name is required",
                          pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: "Name should contain only alphabets"
                          },
                          onChange: () => trigger("name")
                        })}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name.message}</div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                      <Label htmlFor="email" className="form-label">
                        <span style={{ color: "red", fontSize: '20px' }}>*</span> Email address
                      </Label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Enter Email address"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          },
                          onChange: () => trigger("email")
                        })}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email.message}</div>
                      )}
                    </div>

                    {/* Mobile Number Field */}
                    <div className="mb-3">
                      <Label htmlFor="mobile" className="form-label">
                        <span style={{ color: "red", fontSize: '20px' }}>*</span> Mobile Number
                      </Label>
                      <input
                        type="tel"
                        className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                        id="mobile"
                        placeholder="Enter Your Mobile Number"
                        maxLength="10"
                        {...register("mobile", {
                          required: "Mobile number is required",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Please enter a valid 10-digit number starting with 6-9"
                          },
                          onChange: () => trigger("mobile")
                        })}
                      />
                      {errors.mobile && (
                        <div className="invalid-feedback">{errors.mobile.message}</div>
                      )}
                    </div>

                    {/* Remark Field */}
                    <div className="mb-3">
                      <Label htmlFor="remark" className="form-label">Remark</Label>
                      <textarea
                        className="form-control"
                        id="remark"
                        rows="3"
                        {...register("remark")}
                      ></textarea>
                    </div>

                    <div className="col-auto">
                      <button
                        type="submit"
                        style={{ backgroundColor: '#4929c5', color: '#fff' }}
                        className="btn mb-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </Form2>
                </Form1>
              </>
            )}
          </FormContainer>
        </div>
      </div>
    </ContactWrapper>
  )
}

export default page;

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
const Label = styled.label`
  color: black;
`
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
  background-color: #ffffff;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 580px) {
    width: 100%;
    padding: 10px;
  }
`;

const Form1 = styled.form`
  display: flex;
  justify-content: center;
  background-color: #301a52;
  padding: 40px;
`;

const SuccessMessage = styled.div`
  padding: 2rem;
  color: white;
  text-align: center;
  font-size: 1.2rem;
`;
const SuccessIcon = styled.div`
  font-size: 10rem;
  color: #4BB543;
  margin-bottom: 1rem;
`;