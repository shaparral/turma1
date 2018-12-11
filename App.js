import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden /> 

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Ricardo Dias</Text>
          <Image
            style={{ width: 150, height: 150, borderRadius: 5, margin: 15 }} 
            source={require('./assets/leonardonewp.jpg')} 
          />
          <View style={{ width: '70%', alignItems: 'center', borderWidth: 1, borderColor: 'white' }}>
            <Text style={{ color: 'white', fontSize: 14 }}>Nacionalidade: Brasileiro</Text>
            <Text style={{ color: 'white', fontSize: 14 }}>Esporte favorito: Futebol</Text>
            <Text style={{ color: 'white', fontSize: 14 }}>Telefone: (61) 99278-1791</Text>
            <Text style={{ color: 'white', fontSize: 14 }}>E-mail: diasmacedo.ricardo@gmail.com</Text>
            <Text style={{ color: 'white', fontSize: 14 }}>Idade: 20 anos</Text>
          </View>
        </View>
        <Text style={{ color: '#A79BCB', fontWeight: 'bold', fontSize: 20, textAlign: 'center', margin: 0, width: '100%', backgroundColor: '#F8EBE7' }}>Conhecimentos Básicos</Text>
        <Text style={{ color: '#A79BCB', fontWeight: 'bold', fontSize: 20, textAlign: 'center', margin: 0, width: '100%', backgroundColor: '#F8EBE7' }}>Conhecimentos Básicos</Text>
        <Text style={{ color: '#A79BCB', fontWeight: 'bold', fontSize: 20, textAlign: 'center', margin: 0, width: '100%', backgroundColor: '#F8EBE7' }}>Conhecimentos Básicos</Text>
        <View style={{ flex: 0.5, flexDirection: 'row', borderWidth: 1, borderColor: 'white' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white' }}>
            <Text style={{ color: 'white', fontSize: 14 }}>Inglês: 5</Text>
            <Text style={{ color: 'white', fontSize: 14 }}>Espanhol: 3</Text>
            <Text style={{ color: 'white', fontSize: 14 }}>Francês: 1</Text>
            <Text style={{ color: 'white', fontSize: 14 }}>Alemão: 1</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white' }}>
            <Text style={{ color: 'white', fontSize: 14 }}>Programação: 5</Text>
            <Text style={{ color: 'white', fontSize: 14 }}>Excel: 4</Text>
            <Text style={{ color: 'white', fontSize: 14 }}>Word: 4</Text>
            <Text style={{ color: 'white', fontSize: 14 }}>AutoCAD: 2</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A79BCB',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});