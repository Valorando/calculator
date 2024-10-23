import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import InputField from './src/InputField/InputField';
import Buttons from './src/Buttons/Buttons';
import { evaluate } from 'mathjs'; 

export default function App() {
  const [inputValue, setInputValue] = useState('Input');

  const handleButtonPress = (buttonValue) => {
    if (buttonValue === 'C') {
      setInputValue('Input');
    } else if (buttonValue === '=') {
      try {
        const result = evaluate(inputValue);
        setInputValue(result.toString()); 
      } catch (error) {
        setInputValue('Error');
      }
    } else {
      setInputValue((prev) => prev === 'Input' ? buttonValue : prev + buttonValue);
    }
  };

  return (
    <View style={styles.container}>
      <InputField value={inputValue} />
      <Buttons onButtonPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
