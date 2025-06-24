// 'use client';
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const CourseInquiryModal = ({ show, onClose }) => {



//   if (!show) return null;

//   return (
//     <>
//       <Backdrop onClick={onClose} />
//       <ModalContainer>
//         <ModalHeader>

//           <CloseButton onClick={onClose}>&times;</CloseButton>
//         </ModalHeader>

//         <ModalContent>
//           <FormSection>
//             <ModalTitle>Choose <span style={{ color: "#47137B" }}>Course</span></ModalTitle>
//             <DialogIntro>
//               Interested in upgrading your skills? Want to know more about our course modules, duration, fees, or certification?
//             </DialogIntro>

//             <Form >
//               <FormGroup>

//                 <Input
//                   type="text"
//                   name="name"
//                   placeholder='Name'
//                   required
//                 />
//               </FormGroup>

//               <FormGroup>

//                 <Input
//                   type="email"
//                   name="email"
//                   placeholder='email'
//                   required
//                 />
//               </FormGroup>

//               <FormGroup>

//                 <Input
//                   type="tel"
//                   name="phone"
//                   placeholder='phone'
//                   required
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <Select
//                   name="course"
//                   required


//                 >
//                   <option value="" disabled hidden>Select Course</option>
//                   <option value="React JS Industrial Training">React JS Industrial Training</option>
//                   <option value="Advanced JavaScript">Advanced JavaScript</option>
//                   <option value="Frontend Development">Frontend Development</option>
//                   <option value="Full Stack Development">Full Stack Development</option>
//                 </Select>
//               </FormGroup>

//               <SubmitButton type="submit">SEND</SubmitButton>
//             </Form>

//             <ContactInfo>
//               <ContactItem>
//                 <strong>PHONE</strong>
//                 <div>+91 95992 87037</div>
//               </ContactItem>

//               <ContactItem>
//                 <strong>EMAIL</strong>
//                 <div>info@thetechtraining.com</div>
//               </ContactItem>
//             </ContactInfo>
//           </FormSection>

//           <ImageSection>
//             <CourseImage
//               src="/ModalImage.png"
//               alt="Course Inquiry"
//             />
//           </ImageSection>
//         </ModalContent>
//       </ModalContainer>
//     </>
//   );
// };

// // Styled Components
// const Backdrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 1000;
// `;

// const ModalContainer = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 950px;
//   max-width: 90%;
//   max-height: 70vh;
//   background: white;
//   border-radius: 24px;
//   z-index: 1001;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   padding:3rem 2rem;
// `;

// const ModalHeader = styled.div`

// `;

// const ModalTitle = styled.h2`
// color:#000000;
// font-size:54px;
// font-weight:700;
// `

// const CloseButton = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1.5rem;
//   background: none;
//   border: none;
//   color: white;
//   font-size: 1.5rem;
//   cursor: pointer;
// `;

// const ModalContent = styled.div`
//   display: flex;
//   height: 100%;
//   overflow: auto;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const FormSection = styled.div`
//   flex: 1;
//   padding: 1.5rem;
//   min-width: 0;
// `;

// const ImageSection = styled.div`
//   width: 300px;
//   background: #F8F9FA;
//   display: flex;
//   flex-direction: column;
//   padding: 1.5rem;

//   @media (max-width: 768px) {
//     width: 100%;
//     order: -1;
//     padding-bottom: 0;
//   }
// `;

// const DialogIntro = styled.p`
//   color: #000000;
//   margin-bottom: 1.5rem;
//   font-size: 0.9rem;
//   font-weight:600;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
// `;



// const Input = styled.input`
//   padding: 0.5rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 0.9rem;
//   background-color: white;
// `;

// const Select = styled.select`
//   padding: 0.5rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 0.9rem;
//   background-color: white;
// `;

// const SubmitButton = styled.button`
//   background-color: #F48B01;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   padding: 0.75rem;
//   font-weight: 600;
//   margin-top: 1rem;
//   cursor: pointer;
// `;

// const ContactInfo = styled.div`
//   margin-top: 2rem;
//   padding-top: 1rem;
//   border-top: 1px solid #eee;
//   font-size: 0.8rem;
// `;

// const ContactItem = styled.div`
//   margin-bottom: 0.75rem;

//   strong {
//     color: #2F327D;
//     display: block;
//     margin-bottom: 0.25rem;
//   }

//   div {
//     color: #696984;
//   }
// `;

// const CourseImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 4px;
//   object-fit: cover;
// `;

// export default CourseInquiryModal;


'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useModal } from '../contexts/ModalContext';

const CourseInquiryModal = ({ onClose }) => {

  const { hideModal } = useModal();

  const handleClose = () => {
    if (onClose) onClose();
    hideModal();
  };

  return (
    <>
      <Backdrop onClick={handleClose} />
      <ModalContainer className="container-fluid">
        {/* <CloseButton onClick={onClose}>&times;</CloseButton> */}
        <div className="row g-0">
          {/* Left Column - Form Section (6 columns) */}
          <div className="col-lg-6">
            <FormSection>
              <ModalHeader className="d-flex justify-content-between align-items-center">
                <ModalTitle>Choose <span style={{ color: "#47137B" }}>Course</span></ModalTitle>
              </ModalHeader>

              <DialogIntro>
                Interested in upgrading your skills? Want to know more about our course modules, duration, fees, or certification?
              </DialogIntro>

              <Form>
                <FormGroup className="mb-3">
                  <Input
                    type="text"
                    name="name"
                    placeholder='Name'
                    required
                    className="form-control"
                  />
                </FormGroup>

                <FormGroup className="mb-3">
                  <Input
                    type="email"
                    name="email"
                    placeholder='Email'
                    required
                    className="form-control"
                  />
                </FormGroup>

                <FormGroup className="mb-3">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder='Phone'
                    required
                    className="form-control"
                  />
                </FormGroup>

                <FormGroup className="mb-3">
                  <select
                    name="course"
                    required
                    className="form-select"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Select Course</option>
                    <option value="React JS Industrial Training">React JS Industrial Training</option>
                    <option value="Advanced JavaScript">Advanced JavaScript</option>
                    <option value="HTML/CSS/JS Fundamentals">HTML/CSS/JS Fundamentals</option>
                    <option value="Angular Development">Angular Development</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Node.js Development">Node.js Development</option>
                    <option value="Java Backend Development">Java Backend Development</option>
                    <option value="Python Backend Development">Python Backend Development</option>
                    <option value="C# & .NET Development">C# & .NET Development</option>
                    <option value="PHP & Laravel Development">PHP & Laravel Development</option>
                    <option value="Ruby on Rails Development">Ruby on Rails Development</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="MERN Stack Development">MERN Stack Development</option>
                    <option value="MEAN Stack Development">MEAN Stack Development</option>
                    <option value="Flutter Development">Flutter Development</option>
                    <option value="Android Kotlin Development">Android Kotlin Development</option>
                  </select>
                </FormGroup>

                <SubmitButton type="submit" className="w-100">
                  SEND
                </SubmitButton>
              </Form>

              <ContactInfo className="mt-4 pt-3">
                <ContactItem className="mb-2">
                  <img src="/phoneModal.svg" alt="phone" />
                  <div className="text">
                    <strong>PHONE</strong>
                    <div>+91 9599287097</div>
                  </div>
                </ContactItem>

                <ContactItem>
                  <img src="/email.svg" alt="email" />
                  <div className="text">
                    <strong>EMAIL</strong>
                    <div>info@techtraining.in</div>
                  </div>
                </ContactItem>
              </ContactInfo>

            </FormSection>
          </div>

          {/* Right Column - Image Section (6 columns) */}
          <div className="col-lg-6 d-none d-lg-block">
            <ImageSection>
              <CourseImage
                src="/ModalImage.png"
                alt="Course Inquiry"
                className="img-fluid"
              />
            </ImageSection>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

// Styled Components (Only the necessary custom styles)
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 950px;
  background: white;
  border-radius: 24px;
  z-index: 1001;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  padding: 1rem 3rem;
`;

const FormSection = styled.div`
  padding: 2rem;
`;

const ModalHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  color: #000000;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: .3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CloseButton = styled.button`

  background: none;
  border: none;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
`;

const DialogIntro = styled.p`
  color: #000000;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 600;
`;

const Form = styled.form`
  // Bootstrap classes handle most styling
`;

const FormGroup = styled.div`
  // Bootstrap classes handle most styling
`;

const Input = styled.input`
  // Additional custom styles if needed
  &:focus {
    border-color: #F48B01;
    box-shadow: 0 0 0 0.25rem rgba(244, 139, 1, 0.25);
  }
`;

const Select = styled.select`
  // Additional custom styles if needed
  &:focus {
    border-color: #F48B01;
    box-shadow: 0 0 0 0.25rem rgba(244, 139, 1, 0.25);
  }
`;

const SubmitButton = styled.button`
  background-color: #692FA2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #e07d00;
    transform: translateY(-2px);
  }
`;

const ContactInfo = styled.div`
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px; /* space between image and text */
  width: 48%;

  img {
    width: 24px;
    height: 24px;
    margin-top: 4px;
  }

  .text {
    display: flex;
    flex-direction: column;

    strong {
      color: #000000;
      font-size: 14px;
    }

    div {
      color: #DD5471;
      font-size: 13px;
    }
  }
`;


const ImageSection = styled.div`
  background: #F8F9FA;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
`;

const CourseImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export default CourseInquiryModal;