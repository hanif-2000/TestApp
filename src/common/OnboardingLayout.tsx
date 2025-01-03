import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ProgressIndicator from './ProgressIndicator';
import PrimaryButton from './PrimaryButton';

interface OnboardingLayoutProps {
  title: string;
  subtitle: string;
  imageSource: any;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack?: () => void; // Optional for screens without a back button
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  title,
  subtitle,
  imageSource,
  currentStep,
  totalSteps,
  onNext,
  onBack,
}) => {
  return (
    <View style={styles.container}>
      {currentStep === 0 && (
        <View style={{paddingVertical: 10}}>
          <Image
            source={require('./../assest/Wolf_logo.png')}
            style={styles.logo}
          />
        </View>
      )}

      <Text style={styles.title}>{title}</Text>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <Text style={styles.subtitle}>{subtitle}</Text>
      {currentStep > 0 && (
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
      )}
      <View style={styles.buttonContainer}>
        <PrimaryButton label="Next" onPress={onNext} />
        {onBack && <PrimaryButton label="Back" onPress={onBack} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '100%',
  },

  logo: {
    width: 50,
    height: 50,
  },
});

export default OnboardingLayout;
