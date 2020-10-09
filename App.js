import React, { Component } from 'react';
import {Text, View, Image, TextInput} from 'react-native';



const App = () => {
  return (
    <View style={{margin: 10}}>
      <View style={{width: 80, height: 80, backgroundColor: '#12CBC4'}}/>
      <Fauzi />
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Gambar />
        <TextInput style={{borderWidth: 1, marginTop: 10}}></TextInput>
        <Aku />
    </View>
  );
};

const Fauzi = () => {
  return<Text>Muhammad Fauzi</Text>;
};

const Gambar = () => {
  return <Image source={{ uri:'https://reactnative.dev/img/tiny_logo.png' }} 
    style={{ width: 100, height: 100}}/>;
    
};

class Aku extends Component {
  render() {
  const name = "bapak samran dan ibu agustinah"
  return <Text>ayah dan ibuku, { name }</Text>
  
  }
}


export default App;
