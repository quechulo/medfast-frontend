import React from 'react';
import { Tab, Text, Wrapper } from './styles';
import PrescriptionsIcon from '../icons/prescriptions';
import VisitsIcon from '../icons/visitsIcon';
import TestsIcon from '../icons/testsIcon';

interface Props {
  isVisitsSelected: boolean;
  isTestsSelected: boolean;
  isPrescriptionsSelected: boolean;
  onVisitsClick: any;
  onTestsClick: any;
  onPrescriptionsClick: any;
}

const Tabs: React.FC<Props> = (props) => {
  const {
    isVisitsSelected,
    isTestsSelected,
    isPrescriptionsSelected,
    onVisitsClick,
    onTestsClick,
    onPrescriptionsClick,
  } = props;

  return (
    <Wrapper>
      <Tab $isSelected={isVisitsSelected} onClick={onVisitsClick}>
        <VisitsIcon fill={isVisitsSelected ? 'white' : 'gray'} />
        <Text $isSelected={isVisitsSelected}>Visits</Text>
      </Tab>
      <Tab $isSelected={isTestsSelected} onClick={onTestsClick}>
        <TestsIcon fill={isTestsSelected ? 'white' : 'gray'} />
        <Text $isSelected={isTestsSelected}>Tests</Text>
      </Tab>
      <Tab $isSelected={isPrescriptionsSelected} onClick={onPrescriptionsClick}>
        <PrescriptionsIcon fill={isPrescriptionsSelected ? 'white' : 'gray'} />
        <Text $isSelected={isPrescriptionsSelected}>Prescriptions</Text>
      </Tab>
    </Wrapper>
  );
};

export default Tabs;
