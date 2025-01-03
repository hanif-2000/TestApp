import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({label, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: label === 'Back' ? '#fff' : '#000'},
      ]}
      onPress={onPress}>
      <Text style={[styles.text, {color: label == 'Back' ? '#000' : '#fff'}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 0.5,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
