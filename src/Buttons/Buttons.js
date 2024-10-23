import { StyleSheet, View, Button } from 'react-native';

export default function Buttons({ onButtonPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="7" onPress={() => onButtonPress('7')} />
        <Button title="8" onPress={() => onButtonPress('8')} />
        <Button title="9" onPress={() => onButtonPress('9')} />
        <Button title="/" onPress={() => onButtonPress('/')} />
      </View>

      <View style={styles.row}>
        <Button title="4" onPress={() => onButtonPress('4')} />
        <Button title="5" onPress={() => onButtonPress('5')} />
        <Button title="6" onPress={() => onButtonPress('6')} />
        <Button title="х" onPress={() => onButtonPress('х')} />
      </View>

      <View style={styles.row}>
        <Button title="1" onPress={() => onButtonPress('1')} />
        <Button title="2" onPress={() => onButtonPress('2')} />
        <Button title="3" onPress={() => onButtonPress('3')} />
        <Button title="-" onPress={() => onButtonPress('-')} />
      </View>

      <View style={styles.row}>
        <Button title="C" onPress={() => onButtonPress('C')} />
        <Button title="0" onPress={() => onButtonPress('0')} />
        <Button title="=" onPress={() => onButtonPress('=')} />
        <Button title="+" onPress={() => onButtonPress('+')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '160%',
    marginBottom: 10,
  },
});
