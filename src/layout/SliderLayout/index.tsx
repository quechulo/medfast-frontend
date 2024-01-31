import React from 'react';
import SliderSection from './SliderSection';
import TwoColsSliderWrapper from './styles';

interface SliderLayoutProps {
  element: React.ReactNode;
}

const SliderLayout: React.FC<SliderLayoutProps> = ({ element }) => (
  <TwoColsSliderWrapper>
    { element }
    <SliderSection />
  </TwoColsSliderWrapper>
);

export default SliderLayout;
