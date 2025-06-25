
'use client';
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Satyam Sharma, Delhi",
      role: "Node.js Developer",
      rating: "★★★★★",
      title: "Mastered Backend Development!",
      content: "The Node.js training at The Tech Training – T3 was exceptional. We built real-world REST APIs, worked with Express.js, and learned authentication with JWT. The hands-on project implementing a full e-commerce backend helped me land my current developer role.",
      image: "/one.jpg"
    },
    {
      id: 2,
      name: "Ritu Raj, Noida",
      role: "Flutter Developer",
      rating: "★★★★★",
      title: "From Zero to Flutter Pro!",
      content: "The Flutter course gave me complete mobile development skills. We built cross-platform apps with Firebase integration, state management using Provider, and complex UI animations. I published my first app on Play Store within a month of completing the course!",
      image: "/two.jpeg"
    },
    {
      id: 3,
      name: "Ayush Singhal, Noida",
      role: "React.js Developer",
      rating: "★★★★★",
      title: "Frontend Transformation!",
      content: "The React.js industrial training covered everything from hooks to Redux Toolkit. Building a complete dashboard with authentication and API integration gave me the confidence to tackle complex frontend challenges at my current job.",
      image: "/three.jpg"
    },
    {
      id: 4,
      name: "Anand Ranjan, Noida",
      role: "Python/Django Developer",
      rating: "★★★★☆",
      title: "Full Stack Python Mastery!",
      content: "The Python with Django course was incredibly thorough. From Django ORM to REST framework and deployment, every concept was taught with practical examples. My final project was a complete CRM system that became my portfolio centerpiece.",
      image: "/four.jpeg"
    },
    {
      id: 5,
      name: "Prem Gupta, Delhi",
      role: "Java Spring Boot Developer",
      rating: "★★★★★",
      title: "Enterprise Java Made Easy!",
      content: "The Java Backend course with Spring Boot transformed my career. Learning microservices architecture, Spring Security, and Hibernate prepared me perfectly for enterprise application development. I got a 40% salary hike after certification!",
      image: "/five.jpeg"
    }
  ];

  return (
    <TestimonialSection>
      <div className="container">
        <SectionHeader>
          <SectionSubtitle>Testimonials</SectionSubtitle>
          <SectionTitle>What Students Say</SectionTitle>
        </SectionHeader>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard>
                <TestimonialImageContainer>
                  <TestimonialImage src={testimonial.image} alt={testimonial.name} />
                </TestimonialImageContainer>
                <TestimonialRating>{testimonial.rating}</TestimonialRating>
                <TestimonialTitle>{testimonial.title}</TestimonialTitle>
                <TestimonialText>{testimonial.content}</TestimonialText>
                <TestimonialAuthor>
                  <strong>{testimonial.name}</strong><br />
                  <span style={{ color: "#B0B2B5" }}>{testimonial.role}</span>
                </TestimonialAuthor>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </TestimonialSection>
  );
};

// Styled Components
const TestimonialSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;

  .swiper-pagination-bullet {
    background: #301a52;
    opacity: 0.3;
    width: 12px;
    height: 12px;
    margin: 0 8px !important;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #f24080;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #f24080;
    background: rgba(255, 255, 255, 0.8);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      background: white;
      transform: scale(1.1);
    }

    &::after {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 0;

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #f24080;
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #301a52;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TestimonialCard = styled.div`
  padding: 3rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
 
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TestimonialImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
`;

const TestimonialImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const TestimonialRating = styled.div`
  color: #fcc101;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const TestimonialTitle = styled.h3`
  font-size: 1.5rem;
  color: #301a52;
  margin-bottom: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #504462;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TestimonialAuthor = styled.div`
  color: #3f3454;
  font-size: 1.1rem;
`;

export default Testimonials;