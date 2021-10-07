import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useState } from "react";

export function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
      <Header title="Página Inicial" />
      <View style={styles.content}>
      </View>
    </View>
  )
}

export function CadResidencia({navigation}){
  const [values, setValues] = useState({
    cpf: '',
    nome: '',
    fl_ativo: true,
    idUser: '',
    idBairro: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    latitude: '',
    longitude: '',
  });
  return(
    <View style={styles.container}>
      <Header title="Cadastro de Residência"/>
        <TextInput
          style={styles.input}
          id="cpf"
          class="form-field"
          type="number" 
          placeholder="CPF"
          name="cpf"
          keyboardType="number-pad"
          // value={values.cpf}
        />

        <TextInput
          style={styles.input}
          id="nome"
          class="form-field"
          type="text"
          placeholder="Nome"
          name="nome"
          // value={values.nome}
        />

        <TextInput
          style={styles.input}
          id="cep"
          class="form-field"
          type="text"
          placeholder="CEP"
          name="cep"
          keyboardType="numbers-and-punctuation"
          // value={values.cep}
        />

        <TextInput
          style={styles.input}
          id="endereco"
          class="form-field"
          type="text"
          placeholder="Endereço"
          name="endereco"
          // value={values.cep}
        />

        <TextInput
          style={styles.input}
          id="numero"
          class="form-field"
          type="text"
          placeholder="Número"
          name="numero"
          // value={values.cep}
        />

        <TextInput
          style={styles.input}
          id="complemento"
          class="form-field"
          type="text"
          placeholder="Complemento"
          name="complemento"
          // value={values.cep}
        />

        <TextInput
          style={styles.input}
          id="latitude"
          class="form-field"
          type="number"
          placeholder="Latitude"
          name="latitude"
          keyboardType="number-pad"
          // value={values.cep}
        />

        <TextInput
          style={styles.input}
          id="longitude"
          class="form-field"
          type="number"
          placeholder="Longitude"
          name="longitude"
          keyboardType="number-pad"
          // value={values.cep}
        />

        <View style={styles.button}>
          <Button 
            title="Gravar"
          />
        </View>

      <View style={styles.content}>
      </View>
    </View>
  )
}

export function RegAtendimento({navigation}){
  return(
    <View style={styles.container}>
      <Header title="Registrar Atendimento"/>
      <View style={styles.content}>
      </View>
    </View>
  )
}

export function HistoricoAtendimento({navigation}){
  return(
    <View style={styles.container}>
      <Header title="Histórico Atendimento"/>
      <View style={styles.content}>
      </View>
    </View>
  )
}

export function Header(props){
  const navigation = useNavigation()
  return(
    <View style={styles.header}>
      <RectButton onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)}>
      </RectButton>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Cadastro Residência" component={CadResidencia} />
        <Drawer.Screen name="Registro de Atendimento" component={RegAtendimento} />
        <Drawer.Screen name="Histórico de Atendimento" component={HistoricoAtendimento} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 10
  },
  header : {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginTop: 20,
  },

  headerText:{
    marginLeft: 10,
    alignSelf:'center',
  },

  button: {
    color:"#841584",
    marginVertical: 100,
    marginHorizontal:5,
    marginTop: 20,
    marginBottom: 10,
    borderRadius:5,
    borderWidth:2,
    height:40,
    bottom: 0
  },

  buttonText:{
    color:'#FFFFFF'
  },

  input:{
        height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius:5
  }
  
});