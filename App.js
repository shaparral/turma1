import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Calculadora do Herói</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Insira o primeiro valor' 
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Insira o segundo valor' 
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Somar"
            color="#841584"
          />
          <Button
            title="Subtrair"
            color="#841584" 
          />
          <Button
            title="Multiplicar"
            color="#841584" 
          />
          <Button
            title="Dividir"
            color="#841584" 
          />
        </View>
        <Text>O resultado é:</Text>
        <Text>{this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9f3716',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleStyle: {
    color: 'white',
    fontSize: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});