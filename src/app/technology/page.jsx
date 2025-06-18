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

 @media (max-width: 1150px) {
   width:'60%'  ;
  }
`;

const ResponsiveImg = styled.div`
  padding: 20px;
  width: 210px;
  margin-top: 25px;
  img {
    width: 100%;
    height: 50%;
  }
 @media (max-width: 1150px) and (min-width: 992px) {
    img {
      width: 80%;
    }
  }
`;
const ResponsiveImg2 = styled.div`
  padding: 20px;
  width: 170px;
  margin-top: 10px;
  img {
    width: 100%;
    height: 50%;
  }
 @media (max-width: 1150px) and (min-width: 992px) {
    img {
      width: 80%;
    }
  }
`;
const ResponsiveImg3 = styled.div`
  padding: 20px;
  width: 200px;
  margin-top: 10px;
  img {
    width: 100%;
    height: 50%;
  }
 @media (max-width: 1150px) and (min-width: 992px) {
    img {
      width: 80%;
    }
  }
`;
const ResponsiveImg4 = styled.div`
  padding: 20px;
  width: 190px;
  margin-top: 10px;
  img {
    width: 100%;
    height: 50%;
  }
 @media (max-width: 1150px) and (min-width: 992px) {
    img {
      width: 80%;
    }
  }
`;
const ResponsiveImg5 = styled.div`
  padding: 20px;
  width: 150px;
/* margin-bottom: 10px; */
  img {
    width: 90%;
    height: 50%;
  }
 @media (max-width: 1150px) and (min-width: 992px) {
    img {
      width: 80%;
    }
  }
`;
const ResponsiveImg6 = styled.div`
  padding: 20px;
  width: 80%;
/* margin-bottom: 10px; */
  img {
    width: 90%;
    height: 50%;
  }
 /* @media (max-width: 1150px) and (min-width: 992px) {
    img {
      width: 80%;
    }
  } */
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
            <div >
              <h3>Front-End Technologies</h3>
            </div>
            <div className='row'>
              <div className='col-10'>
                <div className='row '>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '60%', height: '30%' }} src="/HtmlLogo.png" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '60%', height: '70%' }} src="/CssLogo.png" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px', }} >
                      <img style={{ width: '60%', height: '70%' }} src="/jsTitleLogo.png" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px', marginTop: '15px' }} >
                      <img style={{ width: '60%', height: '70%' }} src="/ReactLogo.png" alt="" />
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div style={{ padding: '20px', width: '210px' }} >
                      <img style={{ width: '60%', height: '70%' }} src="/AngularTitleLogo.png" alt="" />
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
            <div className='row ' style={{ margin: '' }}>

              <div className='col-12'>
                <div className='row gap-2'>

                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <ResponsiveImg>
                      <img className='responsiveCols' src="/PythonLogo.svg" alt="Python Logo" />
                    </ResponsiveImg>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <ResponsiveImg2 >
                      <img className='responsiveCols'  src="/PhpLogosvg.svg" alt="Php Logo" />
                    </ResponsiveImg2>
                  </div>
                
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <ResponsiveImg3  >
                      <img  src="/NodeJsLogo.svg" alt="Node Logo" />
                    </ResponsiveImg3>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <ResponsiveImg4  >
                      <img src="/RailLogo.svg" alt="RailLogo" />
                    </ResponsiveImg4>
                  </div>
                  <div className='col-lg-2 col-md-4 col-sm-6'>
                    <ResponsiveImg5  >
                      <img  src="/jsLogo.png" alt="jsLogo" />
                    </ResponsiveImg5>
                  </div>


                </div>
              </div>
              {/* <div className='col-2'></div> */}
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
                    <ResponsiveImg6  >
                      <img  src="/MernGroup.svg" alt="Mean Logo" />
                    </ResponsiveImg6>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12'>
                    <ResponsiveImg6 >
                      <img  src="/MeanGroup.svg" alt="Mern Logo" />
                    </ResponsiveImg6>
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
                    <ResponsiveImg6  >
                      <img  src="/MernGroup.svg" alt="Mean Logo" />
                    </ResponsiveImg6>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12'>
                    <ResponsiveImg6 >
                      <img  src="/MeanGroup.svg" alt="Mern Logo" />
                    </ResponsiveImg6>
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
