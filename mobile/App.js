import React, { Component, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
  Touchable,
  Image
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const [text, onChangeText] = React.useState('');
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.sectionDescription}>
        {/* <Header /> */}
      <ScrollView>
      <View style={styles.container}>

        {/* <Image style={styles.logo}
          source={require('./assets/imagens/logo.jpg')}
        /> */}

        <TextInput style={styles.inputUsuario}
          placeholder="usuário"
          placeholderTextColor="#000"
          onChangeText={onChangeText}
          value={text}
        />

        <View>
          <TextInput style={styles.inputSenha}
            placeholder="senha" 
            placeholderTextColor="#000"
            value={input}
            onChangeText={(texto) => setInput(texto)}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.botao}>
          <Button 
            title="Acessar"
            // onPress={()=> Alert.alert(text)}
            acessibilityLabel="Botão para clicar"
          />
        </View>

      </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column"
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    bottom:-250
  },
  botao: {
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
  inputUsuario: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius:5
  },
  inputSenha:{
    flexDirection: 'row',
    width:'95%',
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius:5
  },
  logo:{
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginLeft:150
  }
});

export default App;
