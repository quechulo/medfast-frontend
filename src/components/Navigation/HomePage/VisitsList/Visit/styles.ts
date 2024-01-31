import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 1142px;
  height: 98px;
  flex-shrink: 0;
  border-radius: 16px;
  justify-content: space-between;
  box-shadow: 5px 0px 72px 0px #e5f3ff;
  padding: 24px;
`;

export const IconSpecDocName = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-right: 20px;
`;

export const ProfileImage = styled.div<{ $profileImg: string }>`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-image: url(${({ $profileImg }) => $profileImg});
  background-size: cover;
  background-position: center;
`;

export const DocSpec = styled.p`
  color: #313131;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export const DocName = styled.p`
  color: #000;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const Time = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  gap: 16px;
`;

export const TextSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Address = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Status = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;
