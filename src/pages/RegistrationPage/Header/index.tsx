import React, { useEffect, useState } from 'react';

import Wrapper from './styles';

const Header: React.FC<{
    // children?: React.ReactNode;
    stage: number;
  }> = (props) => {
    const { stage } = props;
    const [headerText, setHeaderText] = useState('Personal Data');

    useEffect(() => {
      if (stage === 1) {
          setHeaderText('Personal Data');
      } else if (stage === 2) {
          setHeaderText('Address');
      } else if (stage === 3) {
          setHeaderText('Contacts');
      } else if (stage === 4) {
        setHeaderText('Personal Details');
      } else if (stage >= 5) {
        setHeaderText('Password');
      }
    }, [stage]);

    return (
      <Wrapper>{headerText}</Wrapper>
    );
};
export default Header;
