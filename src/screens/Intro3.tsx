import React from 'react';
import OnboardingLayout from '../common/OnboardingLayout';

const Intro2: React.FC = ({navigation}: any) => {
  return (
    <OnboardingLayout
      title="Creator Collectables "
      subtitle="Creator Collectables ownership of something truly inspiring and unique.A sketch from North West
A signature from Taylor swiftA nike drawing from Travis Scott"
      imageSource={require('./../assest/Artslideshow.png')}
      currentStep={2}
      totalSteps={3}
      onNext={() => navigation.navigate('Intro4')}
      onBack={() => navigation.goBack()}
    />
  );
};

export default Intro2;
