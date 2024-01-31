import React from 'react';
import ReviewSlider from 'src/components/ReviewSlider';
import reviews from 'src/data/reviews';
import SliderSectionWrapper from './styles';

const SliderSection: React.FC = () => (
  <SliderSectionWrapper>
    <ReviewSlider reviews={reviews} />
  </SliderSectionWrapper>
);

export default SliderSection;
