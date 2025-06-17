'use client';

import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const BannerWrapper = styled.section`
  background: linear-gradient(
    135deg,
    #3c1c6e 0%,
    #512e84 50%,
    #4a1d6f 100%
  );
  color: white;
  padding: 70px 20px;
  text-align: center;
`;

const ApplyNow = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: #fcb900;
  margin-bottom: 12px;
`;

const Headline = styled.h2`
  font-size: 46px;
  font-weight: 800;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SubText = styled.p`
  font-size: 18px;
  color: #b0b2b5;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ApplyButton = styled.button`
  background-color: #f24080;
  color: white;
  padding: 1rem 2rem;
  font-size: 0.7rem;
  font-weight: 600;
  border: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top:20px;
  &:hover {
    background-color: #d9366d; /* Slightly darker shade */
    /* Optional: add slight scale effect */
    transform: scale(1.02);
  }
 

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem 1rem;
  }
`;

const Transform = () => {
    return (
        <BannerWrapper>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <ApplyNow>Apply Now</ApplyNow>
                        <Headline>6 Months to Transform Your Career!</Headline>
                        <SubText>
                            Join the Best Industrial Training Program in Noida with 100% Job Assistance.
                        </SubText>
                        <Link href="/contactus">
                         <ApplyButton className="btn">
                            Apply Now
                        </ApplyButton>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </BannerWrapper>
    );
};

export default Transform;
