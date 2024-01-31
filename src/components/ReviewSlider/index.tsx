import React from 'react';
import { ReactSVG } from 'react-svg';
import { Review } from 'src/types/ReviewType';
import {
  ReviewSliderWrapper,
  DetailsWrapper,
  StarsWrapper,
  ButtonWrapper,
  ArrowWrapper,
} from './styles';

interface ReviewSliderProps {
  reviews: Review[];
}

const calculateNextReview = (currentReview: number, reviews: Review[]) =>
  currentReview === reviews.length - 1 ? 0 : currentReview + 1;

const calculatePrevReview = (currentReview: number, reviews: Review[]) =>
  currentReview === 0 ? reviews.length - 1 : currentReview - 1;

const ReviewSlider: React.FC<ReviewSliderProps> = ({ reviews }) => {
  const [currentReview, setCurrentReview] = React.useState(0);

  const nextReview = () => {
    setCurrentReview((currentReview) =>
      calculateNextReview(currentReview, reviews)
    );
  };

  const prevReview = () => {
    setCurrentReview((currentReview) =>
      calculatePrevReview(currentReview, reviews)
    );
  };

  if (reviews.length === 0) {
    return null;
  }

  const { content, author, position, stars } = reviews[currentReview];

  return (
    <ReviewSliderWrapper>
      <h2>{content}</h2>
      <DetailsWrapper>
        <div>
          <h4>{`${author} ${position}`}</h4>
          <StarsWrapper>
            {Array.from({ length: stars }, (_, i) => (
              <ReactSVG src="/assets/icons/star.svg" key={i} />
            ))}
          </StarsWrapper>
        </div>

        <ButtonWrapper>
          <ArrowWrapper onClick={prevReview}>
            <ReactSVG src="/assets/icons/arrowLeft.svg" />
          </ArrowWrapper>
          <ArrowWrapper onClick={nextReview}>
            <ReactSVG src="/assets/icons/arrowRight.svg" />
          </ArrowWrapper>
        </ButtonWrapper>
      </DetailsWrapper>
    </ReviewSliderWrapper>
  );
};

export default ReviewSlider;
