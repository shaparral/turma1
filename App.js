import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      nome: '',
      idade: ''
    };
}

  soma(x, y) {
    return x + y;
  }
 
  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={{height: 100, borderColor: 'gray', 
        borderWidth: 1, 
        width: '100%', fontSize: 40}}
        placeholder='Digite seu nome:'
        onChangeText={(nome) => this.setState({nome})}
        value={this.state.nome}
      />
        <Text style={{ fontSize: 30 }}>
        {`Nome: ${this.state.nome}`}
        </Text>
        <TextInput
        style={{height: 100, borderColor: 'gray', borderWidth: 1, width: '100%', fontSize: 40}}
        placeholder='Digite sua idade:'
        onChangeText={(idade) => this.setState({idade})}
        value={this.state.idade}
      />
      <Text style={{ fontSize: 30 }}>{`Idade: ${this.state.idade}`}</Text>

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
