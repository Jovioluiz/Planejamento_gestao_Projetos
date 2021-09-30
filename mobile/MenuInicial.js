import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

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
  return(
    <View style={styles.container}>
      <Header title="Cadastro Residência"/>
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
    justifyContent:'center'
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
    backgroundColor:'#1E1E2D',
    borderRadius: 5,
    padding: 5,
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 10
  },

  buttonText:{
    color:'#FFFFFF'
  }
  
});