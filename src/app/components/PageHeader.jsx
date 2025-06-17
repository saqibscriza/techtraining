'use client';

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #eee;
  padding: 80px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid #2d0c4e;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 30px 20px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #2d0c4e;
  margin: 0;
`;

const Breadcrumb = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #2d0c4e;

  span {
    color: #f5277e;
    font-weight: 700;
    margin-left: 4px;
  }
`;

const PageHeader = ({ title }) => {
    return (
        <HeaderWrapper>
            <Title>{title}</Title>
            <Breadcrumb>
                HOME - <span>{title.toUpperCase()}</span>
            </Breadcrumb>
        </HeaderWrapper>
    );
};

export default PageHeader;

