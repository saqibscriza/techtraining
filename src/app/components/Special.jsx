'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section = styled.section`
  background-color: #EDEDEC;
  padding: 60px 20px;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #2d0c4e;
  position: relative;

  span {
    color: #fcb900;
  }

  &::after {
    content: 'T3';
    position: absolute;
    font-size: 100px;
    color: #dcdcdc;
    top: -30px;
    left: 0;
    z-index: 0;
    opacity: 0.3;
    font-weight: 800;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    &::after {
      font-size: 60px;
      top: -10px;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 20px 0px;
  margin-top: 20px;
  position: relative;
  z-index: 1;

  li {
    font-size: 18px;
    margin-bottom: 12px;
    color: #2d0c4e;
    padding:5px 0px;

    strong {
      font-weight: 700;
    }
  }
`;

const Special = () => {
    return (
        <Section>
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-md-6 text-center">
                        <Image
                            src="/career.webp"
                            alt="Career Training"
                            width={400}
                            height={400}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <Heading>
                            What Makes Us <span>Special?</span>
                        </Heading>
                        <List>
                            <li><strong>Expert Teachers:</strong> Learn from people with real-world experience.</li>
                            <li><strong>Practical Learning:</strong> Work on real projects and tasks.</li>
                            <li><strong>Job Support:</strong> Get help with resumes, interviews, and job placements.</li>
                            <li><strong>Courses:</strong> Learn backend, frontend, app development, and much more.</li>
                            <li><strong>Community:</strong> Meet and grow with others like you and industry experts.</li>
                        </List>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Special;
