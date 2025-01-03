import React from 'react';
import OnboardingLayout from '../common/OnboardingLayout';

const Intro2: React.FC = ({navigation}: any) => {
  return (
    <OnboardingLayout
      title="Connected Culture"
      subtitle="From the rarest collectables to charms that earn RoBux! Your options are endless."
      imageSource={require('./../assest/IntroImageIphone.png')}
      currentStep={1}
      totalSteps={3}
      onNext={() => navigation.navigate('Intro3')}
      onBack={() => navigation.goBack()}
    />
  );
};

export default Intro2;
