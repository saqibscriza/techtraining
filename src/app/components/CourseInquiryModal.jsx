

'use client';
import React from 'react';
import styled from 'styled-components';
import { useModal } from '../contexts/ModalContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CourseInquiryModal = ({ onClose }) => {
  const { hideModal } = useModal();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleClose = () => {
    if (onClose) onClose();
    hideModal();
    reset(); // Reset form fields when closing
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://thetechtraining.in/backend/api/contact', data);
      console.log(response)
      if (response.status === 201) {
        setSubmitSuccess(true);
        reset(); // Reset form after successful submission
        // Auto-close after 3 seconds if you want
        setTimeout(() => handleClose(), 7000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (show error message, etc.)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Backdrop onClick={handleClose} />
      <ModalContainer className="container-fluid">
        <div className="row g-0">
          {/* Left Column - Form Section */}
          <div className="col-lg-6">
            <FormSection>
              <ModalHeader className="d-flex justify-content-between align-items-center">
                <ModalTitle>Choose <span style={{ color: "#47137B" }}>Course</span></ModalTitle>
                <CloseButton onClick={handleClose}>&times;</CloseButton>
              </ModalHeader>

              <DialogIntro>
                Interested in upgrading your skills? Want to know more about our course modules, duration, fees, or certification?
              </DialogIntro>

              {submitSuccess ? (
                <SuccessMessage>
                  <SuccessIcon>✓</SuccessIcon>
                  <h3>Thank you for your inquiry!</h3>
                  <p>We've received your information and will contact you shortly.</p>
                </SuccessMessage>
              ) : (
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder='Name'
                      className="form-control"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                  </FormGroup>

                  <FormGroup className="mb-3">
                    <Input
                      type="email"
                      placeholder='Email'
                      className="form-control"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                  </FormGroup>

                  <FormGroup className="mb-3">
                    <Input
                      type="tel"
                      placeholder='Phone'
                      className="form-control"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Please enter a valid 10-digit phone number"
                        }
                      })}
                    />
                    {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
                  </FormGroup>

                  <FormGroup className="mb-3">
                    <Select
                      className="form-select"
                      defaultValue=""
                      {...register("course", { required: "Please select a course" })}
                    >
                      <option value="" disabled hidden>Select Course</option>
                      <option value="React JS Industrial Training">React JS Industrial Training</option>
                      <option value="HTML/CSS/JS Fundamentals">HTML/CSS/JS Fundamentals</option>
                      <option value="Angular Development">Angular Development</option>
                      <option value="Node.js Development">Node.js Development</option>
                      <option value="Java Backend Development">Java Backend Development</option>
                      <option value="Python Backend Development">Python Backend Development</option>
                      <option value="C# & .NET Development">C# & .NET Development</option>
                      <option value="PHP & Laravel Development">PHP & Laravel Development</option>
                      <option value="Ruby on Rails Development">Ruby on Rails Development</option>
                      <option value="MERN Stack Development">MERN Stack Development</option>
                      <option value="MEAN Stack Development">MEAN Stack Development</option>
                      <option value="Flutter Development">Flutter Development</option>
                      <option value="Android Kotlin Development">Android Kotlin Development</option>
                      <option value="Database Management">Database Management</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Software Testing">Software Testing</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Prompt Engineering">Prompt Engineering</option>
                    </Select>
                    {errors.course && <ErrorText>{errors.course.message}</ErrorText>}
                  </FormGroup>

                  <SubmitButton type="submit" className="w-100" disabled={isSubmitting}>
                    {isSubmitting ? 'SENDING...' : 'SEND'}
                  </SubmitButton>
                </Form>
              )}

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

          {/* Right Column - Image Section */}
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

// Add these new styled components
const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #47137B;
`;

const SuccessIcon = styled.div`
  font-size: 3rem;
  color: #4BB543;
  margin-bottom: 1rem;
`;

const ErrorText = styled.span`
  color: #DD5471;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
`;

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

// ... (keep all your existing styled components)

export default CourseInquiryModal;