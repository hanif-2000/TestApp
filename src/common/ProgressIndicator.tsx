import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  return <Text style={styles.text}>{`${currentStep}/${totalSteps}`}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#646464',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default ProgressIndicator;
