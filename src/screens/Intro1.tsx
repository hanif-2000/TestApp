import React from 'react';
import OnboardingLayout from '../common/OnboardingLayout';
import {View} from 'react-native';

const Intro1: React.FC = ({navigation}: any) => {
  return (
    <View style={{flex: 1,backgroundColor:'red'}}>
      <OnboardingLayout
        title="Welcome to Ivy Wolf"
        subtitle="A wearable that lives and breathes"
        imageSource={require('./../assest/IntroSkateboard.png')}
        currentStep={0}
        totalSteps={3}
        onNext={() => navigation.navigate('Intro2')}
      />
    </View>
  );
};

export default Intro1;
