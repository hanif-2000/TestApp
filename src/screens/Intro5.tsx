import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert
} from 'react-native';

const Intro5: React.FC = () => {
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCreate = () => {
    if (isChecked && name) {
      Alert.alert(`Name entered: ${name}`);
    } else {
      Alert.alert('Please enter your name and agree to the terms.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ivy Wolf</Text>
      <View style={styles.logoContainer}>
        <View style={{}}>
          <Image
            source={require('./../assest/Wolf_logo.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <Text style={styles.subtitle}>Let's name your IVY WOLF</Text>
      <Text style={styles.description}>You can always change this later.</Text>

      <TextInput
        style={styles.input}
        placeholder="Add your name here"
        value={name}
        onChangeText={setName}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          boxType="square"
          onValueChange={setIsChecked}
        />
        <Text style={styles.checkboxText}>
          I agree to Ivy Wolf's Privacy Policy and T&Cs
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create IVY WOLF</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  logoContainer: {
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoText: {
    fontSize: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#FFF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    width: '100%',
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Intro5;
