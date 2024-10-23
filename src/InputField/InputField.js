import { StyleSheet, Text, View } from 'react-native';

export default function InputField({ value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.field}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  field: {
    fontSize: 36,
  }
});
