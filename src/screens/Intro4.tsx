import React from 'react';
import OnboardingLayout from '../common/OnboardingLayout';
import {View} from 'react-native';

const Intro1: React.FC = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <OnboardingLayout
        title="Giveaways every week!"
        subtitle="ONE MILLION RoBux And so many other amazing giveaways by being apart of the creator economy"
        imageSource={require('./../assest/IntroImageIphone(1).png')}
        currentStep={3}
        totalSteps={3}
        onNext={() => navigation.navigate('Intro5')}
        onBack={() => navigation.goBack()}
      />
    </View>
  );
};

export default Intro1;
