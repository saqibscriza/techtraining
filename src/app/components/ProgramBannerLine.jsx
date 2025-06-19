import styled from 'styled-components';

const ProgramBannerLine = ({ width = '100%', height = 'auto' }) => {
  return (
    <BannerLineContainer width={width} height={height}>
      <BannerLineSVG viewBox="0 0 411 31" preserveAspectRatio="none">
        <BannerPath
          d="M1.71212 30.2201C54.4322 29.6602 107.243 25.8 159.961 23.5372C212.08 21.2398 264.3 18.9481 316.413 16.7504C330.975 16.0893 345.432 15.5223 359.989 14.961C375.05 14.3288 390.277 14.307 405.379 12.9759C412.63 12.2931 411.625 0.215023 404.414 0.199041C391.202 0.0366305 377.914 1.17207 364.755 1.81409C351.496 2.45035 338.337 3.09237 325.079 3.72863C298.661 5.00692 272.237 6.38504 245.797 8.06266C193.925 11.2759 141.948 14.5832 90.118 18.8006C60.5304 21.1979 30.966 23.1959 1.49734 27.0024C-0.505097 26.9868 -0.290322 30.2046 1.71212 30.2201Z"
        />
      </BannerLineSVG>
    </BannerLineContainer>
  );
};

// Styled Components
const BannerLineContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const BannerLineSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const BannerPath = styled.path`
  fill: #F48B01;
`;

export default ProgramBannerLine;