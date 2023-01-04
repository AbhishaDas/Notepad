import {  StatusBar } from "react-native";
import React, { useState } from "react";
import {View, StyleSheet, Text, TouchableHighlight, TextInput, AsyncStorage } from 'react-native';


export default function App(){
  const [data, setData] =useState("");
  const [text,setText] = useState("");
  const add = async()=>{
    try{
      await AsyncStorage.setItem('note', text);

    }catch(error){
      console.log(error);

    }

  }
  const get = async()=>{
    try{
      const value = await AsyncStorage.getItem('note');
      if(value != null){
        setData(value);

      }
  }catch(error)  {
    console.log(error);
  }
  }

  return(
    <View style= {styles.container}>

      <Text style={styles.textInput}>{data}</Text>
      <StatusBar style="auto"/>

      <View style={styles.button}>
        <TextInput style={{height:40}}
        placeholder = 'enter a value'
        onChangeText = {text=>setText(text)}
        defaultValue = {text}>
        </TextInput>

      </View>

      <TouchableHighlight style= {styles.button}
      underlayColor= 'red'
      onPress= {add}>
        <Text style= {styles.buttonText}>Add</Text>
      </TouchableHighlight>

      <TouchableHighlight style= {styles.button}
      underlayColor= 'red'
      onPress= {get}>
        <Text style= {styles.buttonText}>Get</Text>
      </TouchableHighlight>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold'

  },
  button: {
    width: '60%',

        height: 55,

        backgroundColor: 'green',

        alignItems: 'center',

        justifyContent: 'center',

        borderRadius: 6,

        marginTop: 20
  },
  buttonText: {
    fontSize: 18,

        color: '#fff',

        fontWeight: 'bold'
  },
  inputStyle: {

  }

});