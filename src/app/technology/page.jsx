'use client'

import React from 'react'
import PageHeader from '../components/PageHeader'
import styled from 'styled-components';
import WhatAppsLogo from '../components/WhatAppsLogo';


const ContactWrapper = styled.div`
`;
const Conainer1 = styled.div`
color: #301a52;
background-color: #eee;
padding: 20px;

`;
const Container2 = styled.div`
width: 90%;
`;
const Responsive = styled.div`
 @media (max-width: 520px) {
   width:'250px' ;
  }
`;
// responsive
const page = () => {
  return (
    <div>
      <PageHeader title="Technologies" />
      <WhatAppsLogo />
      <div>
        <Container2 className='container-fluid'>
          <Conainer1 className='mt-5'>
            <div>
              <h3>Front-End Technologies</h3>
            </div>
            <div className='row'>
              <div className='col-10'>
                <div className='row'>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="https://thetechtraining.in/wp-content/uploads/2025/06/html.webp" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="	https://thetechtraining.in/wp-content/uploads/2025/06/csss.webp" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="	https://thetechtraining.in/wp-content/uploads/2025/06/js.webp" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="	https://thetechtraining.in/wp-content/uploads/2025/06/react-1.webp" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="https://thetechtraining.in/wp-content/uploads/2025/06/ajs.webp" alt="" />
                    </div>
                  </div>

                </div>
              </div>
              <div className='col-2'></div>

            </div>

          </Conainer1>
          <Conainer1 className='mt-5'>
            <div>
              <h3>Back-End Technologies</h3>
            </div>
            <div className='row'>
              <div className='col-10'>
                <div className='row'>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="https://thetechtraining.in/wp-content/uploads/2025/06/python.webp" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="https://thetechtraining.in/wp-content/uploads/2025/06/php.webp" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="	https://thetechtraining.in/wp-content/uploads/2025/06/nodee.webp" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="https://thetechtraining.in/wp-content/uploads/2025/06/rrr.webp" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="https://thetechtraining.in/wp-content/uploads/2025/06/javaaa.png" alt="" />
                    </div>
                  </div>

                </div>
              </div>
              <div className='col-2'></div>

            </div>

          </Conainer1>
          <Conainer1 className='mt-5'>
            <div>
              <h3>Full Stack Technologies</h3>
            </div>
            <div className='row'>
              <div className='col-10'>
                <div className='row'>
                  <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div style={{ padding: '20px', width: '450px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="https://thetechtraining.in/wp-content/uploads/2025/06/1-1.webp" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div style={{ padding: '20px', width: '450px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="https://thetechtraining.in/wp-content/uploads/2025/06/2-2.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-2'></div>
            </div>
          </Conainer1>

          <Conainer1 className='mt-5 mb-4'>
            <div>
              <h3>App Development Technologies</h3>
            </div>
            <div className='row'>
              <div className='col-10'>
                <div className='row'>
                  <div className='col-lg-6 col-md-12 col-sm-12'>
                    <Responsive className='responsive' style={{ padding: '20px', width: '450px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="https://thetechtraining.in/wp-content/uploads/2025/06/1-1.webp" alt="" />
                    </Responsive>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div style={{ padding: '20px', width: '450px' }} >
                      <img style={{ width: '100%', height: '50%' }} src="https://thetechtraining.in/wp-content/uploads/2025/06/2-2.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-2'></div>
            </div>
          </Conainer1>
        </Container2>
      </div>

    </div>
  )
}

export default page
