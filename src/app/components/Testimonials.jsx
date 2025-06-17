// 'use client';
// import React from 'react';
// import styled from 'styled-components';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Rohit Sharma, Delhi",
//       role: "Full Stack Development",
//       rating: "★★★★★",
//       title: "Excellent Training Experience!",
//       content: "I enrolled in the Full Stack Development course at The Tech Training – T3, and it was a game-changer for my career. The instructors are highly knowledgeable and focus on real-world applications. Thanks to their hands-on training, I secured a job within two months of completing the course!"
//     },
//     {
//       id: 2,
//       name: "Priya Patel, Mumbai",
//       role: "Data Science",
//       rating: "★★★★★",
//       title: "Transformative Learning!",
//       content: "The Data Science program exceeded my expectations. The curriculum was comprehensive and the projects were industry-relevant. I'm now working as a Data Analyst at a leading tech company."
//     },
//     {
//       id: 3,
//       name: "Amit Kumar, Bangalore",
//       role: "Cloud Computing",
//       rating: "★★★★☆",
//       title: "Great Practical Exposure!",
//       content: "The cloud computing course provided excellent hands-on experience with AWS and Azure. The trainers were supportive and helped me get certified. Highly recommended for anyone looking to upskill."
//     }
//   ];

//   return (
//     <TestimonialSection>
//       <div className="container">
//         <SectionHeader>
//           <SectionSubtitle>Testimonials</SectionSubtitle>
//           <SectionTitle>What Students Say</SectionTitle>
//         </SectionHeader>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop={true}
//           className="testimonial-swiper"
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               <TestimonialCard>
//                 <TestimonialTitle>{testimonial.title}</TestimonialTitle>
//                 <TestimonialText>{testimonial.content}</TestimonialText>
//                 <TestimonialAuthor>
//                   <strong>{testimonial.name}</strong><br />
//                   <span style={{ color: "#B0B2B5" }}>{testimonial.role}</span>
//                   <TestimonialRating>{testimonial.rating}</TestimonialRating>
//                 </TestimonialAuthor>
//               </TestimonialCard>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </TestimonialSection>
//   );
// };

// // Styled Components
// const TestimonialSection = styled.section`
//   padding: 5rem 0;
//   background-color: #f8f9fa;

//   .swiper-pagination-bullet {
//     background: #301a52;
//     opacity: 0.3;
//     width: 12px;
//     height: 12px;
//     margin: 0 8px !important;
//   }

//   .swiper-pagination-bullet-active {
//     opacity: 1;
//     background: #f24080;
//   }

//   .swiper-button-next,
//   .swiper-button-prev {
//     color: #f24080;
//     background: rgba(255, 255, 255, 0.8);
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//     transition: all 0.3s ease;

//     &:hover {
//       background: white;
//       transform: scale(1.1);
//     }

//     &::after {
//       font-size: 1.5rem;
//       font-weight: bold;
//     }
//   }

//   @media (max-width: 768px) {
//     padding: 3rem 0;

//     .swiper-button-next,
//     .swiper-button-prev {
//       display: none;
//     }
//   }
// `;

// const SectionHeader = styled.div`
//   text-align: center;
//   margin-bottom: 3rem;
// `;

// const SectionSubtitle = styled.p`
//   font-size: 1.2rem;
//   color: #f24080;
//   margin-bottom: 0.5rem;
// `;

// const SectionTitle = styled.h2`
//   font-size: 3.5rem;
//   font-weight: 700;
//   color: #301a52;
//   margin-bottom: 0;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const TestimonialCard = styled.div`

//   border-radius: 10px;
//   padding: 3rem;
//   max-width: 800px;
//   margin: 0 auto;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 2rem;
//   }
// `;

// const TestimonialRating = styled.div`
//   color: #fcc101;
//   font-size: 1.2rem;
//   margin-bottom: 1.5rem;
// `;

// const TestimonialTitle = styled.h3`
//   font-size: 1rem;
//   color: #301a52;
//   margin-bottom: 1.5rem;
//   font-weight: 600;

//   @media (max-width: 768px) {
//     font-size: 1.3rem;
//   }
// `;

// const TestimonialText = styled.p`
//   font-size: .9rem;
//   line-height: 1.4;
//   color: #504462;
//   margin-bottom: 2rem;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const TestimonialAuthor = styled.div`
//   color: #3f3454d;
//   font-size: 1.1rem;
// `;

// export default Testimonials;

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
      name: "Rohit Sharma, Delhi",
      role: "Full Stack Development",
      rating: "★★★★★",
      title: "Excellent Training Experience!",
      content: "I enrolled in the Full Stack Development course at The Tech Training – T3, and it was a game-changer for my career. The instructors are highly knowledgeable and focus on real-world applications. Thanks to their hands-on training, I secured a job within two months of completing the course!",
      image: "/images/career.jpeg" // Added image path
    },
    {
      id: 2,
      name: "Priya Patel, Mumbai",
      role: "Data Science",
      rating: "★★★★★",
      title: "Transformative Learning!",
      content: "The Data Science program exceeded my expectations. The curriculum was comprehensive and the projects were industry-relevant. I'm now working as a Data Analyst at a leading tech company.",
      image: "/images/testimonial2.jpg" // Added image path
    },
    {
      id: 3,
      name: "Amit Kumar, Bangalore",
      role: "Cloud Computing",
      rating: "★★★★☆",
      title: "Great Practical Exposure!",
      content: "The cloud computing course provided excellent hands-on experience with AWS and Azure. The trainers were supportive and helped me get certified. Highly recommended for anyone looking to upskill.",
      image: "/images/testimonial3.jpg" // Added image path
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
  width: 100%;
  height: 100%;
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