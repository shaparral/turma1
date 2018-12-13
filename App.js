import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { isUndefined } from 'util';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      valor1: '',
      valor2: '',
      resultado: 0
    };
}

calculadora(x, y, operacao) {
  let resultado = '';
  if(operacao === 'soma') {
    resultado = parseInt(x, 10) + parseInt(y, 10)
  } else if(operacao === 'sub') {
    resultado = parseInt(x, 10) - parseInt(y, 10)
  } else {
    resultado = 'Operação inválida'
  }
  this.setState({resultado});
}

  soma(x, y) {
    const resultado = parseInt(x, 10) + parseInt(y, 10);
    if(resultado === 0) {
      this.setState({resultado: 'Coloque só valores positivos!'});
    } else {
      this.setState({ resultado });
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 100, borderColor: 'gray', 
          borderWidth: 1, 
          width: '100%', fontSize: 40}}
          placeholder='Digite seu nome:'
          onChangeText={(valor1) => this.setState({valor1})}
          value={this.state.valor1}
          keyboardType='numeric'
        />
        <Text style={{ fontSize: 30 }}>
        {`Nome: ${this.state.valor1}`}
        </Text>
         <TextInput
          style={{height: 100, borderColor: 'gray', 
          borderWidth: 1, width: '100%', fontSize: 40}}
          placeholder='Digite sua idade:'
          onChangeText={(valor2) => this.setState({valor2})}
          value={this.state.valor2}
          keyboardType='numeric'
        />
        <Text style={{ fontSize: 30 }}>
        {`Idade: ${this.state.valor2}`}
        </Text>
        <Button 
          onPress={() => this.calculadora(this.state.valor1, this.state.valor2, 'soma')}
          title='+'
          color="#841584"
          />
           <Button 
          onPress={() => this.calculadora(this.state.valor1, this.state.valor2, 'sub')}
          title='-'
          color="#841584"
          />
        <Text style={{ fontSize: 30 }}>
        {`Resultado: ${this.state.resultado}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
