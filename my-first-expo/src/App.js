  import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MyButton from './MyButton';

export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);

  return (
    <View style={styles.container}>
      {/* <Text style = {{ fontsize: 20}}>{addition}</Text>
      <Text style = {{ fontsize: 20}}>{multiple}</Text>
      <MyButton title="addition" onPress={() => setAddition(addition + 2)}></MyButton>
      <MyButton title="multiple" onPress={() => setMultiple(multiple * 2)}></MyButton> */}
      <TextInput onChangeText={text => console.log(text)}
      style={{borderWidth: 1, padding: 10, fontSize: 20}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});