import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Platform, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { RectButton, TextInput, Input } from 'react-native-gesture-handler';
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            value={values.cpf}
            onChangeText={text=>setValues(text)}
          />

          <TextInput
            style={styles.input}
            id="nome"
            class="form-field"
            type="text"
            placeholder="Nome"
            name="nome"
            value={values.nome}
            onChangeText={text=>setValues(text)}
          />

          <TextInput
            style={styles.input}
            id="cep"
            class="form-field"
            type="text"
            placeholder="CEP"
            name="cep"
            keyboardType="numbers-and-punctuation"
            value={values.cep}
            onChangeText={text=>setValues(text)}
          />

          <TextInput
            style={styles.input}
            id="endereco"
            class="form-field"
            type="text"
            placeholder="Endereço"
            name="endereco"
            value={values.endereco}
            onChangeText={text=>setValues(text)}
          />

          <TextInput
            style={styles.input}
            id="numero"
            class="form-field"
            type="number"
            placeholder="Número"
            name="numero"
            keyboardType="number-pad"
            value={values.numero}
            onChangeText={text=>setValues(text)}
          />

          <TextInput
            style={styles.input}
            id="complemento"
            class="form-field"
            type="text"
            placeholder="Complemento"
            name="complemento"
            value={values.complemento}
            onChangeText={text=>setValues(text)}
          />

          <TextInput
            style={styles.input}
            id="latitude"
            class="form-field"
            type="number"
            placeholder="Latitude"
            name="latitude"
            keyboardType="number-pad"
            value={values.latitude}
            onChangeText={text=>setValues(text)}
          />

          <TextInput
            style={styles.input}
            id="longitude"
            class="form-field"
            type="number"
            placeholder="Longitude"
            name="longitude"
            keyboardType="number-pad"
            value={values.longitude}
            onChangeText={text=>setValues(text)}
          />

          <View style={styles.button}>
            <Button 
              title="Gravar"
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export function RegAtendimento({navigation}){
  const [values, setValues] = useState({
    cpfUsuario: '',
    idDoenca: '',
    descricao: '',
    dtRetornoEstipulado: '',
  });

  const [niveis, setNiveis] = useState({
    baixo: '',
    normal: '',
    alto: '',
  });

const [isPickerShow, setIsPickerShow] = useState(false);
const [date, setDate] = useState(new Date());

const showPicker = () => {
  setIsPickerShow(true);
};

const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  if (Platform.OS === 'android'){
    setIsPickerShow(true);
  }
  setDate(currentDate);
};

  return(
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.container}>
          <Header title="Registrar Atendimento"/>
            <TextInput
                style={styles.input}
                id="cpf_usuario"
                class="form-field"
                type="number"
                placeholder="CPF Usuário"
                name="cpf_usuario"
                keyboardType="number-pad"
                value={values.cpfUsuario}
                onChangeText={text=>setValues(text)}
              />

              <Text style={{margin:12}}> Niveis de Infestação</Text>
              <Picker
                selectedValue={niveis}
                style={{height: 40, width: 200}}
                onValueChange={(itemValue, itemIndex) => setNiveis(itemValue)}
              >
                <Picker.Item label="Baixo" value="baixo"/>
                <Picker.Item label="Médio" value="medio"/>
                <Picker.Item label="Alto" value="alto"/>
              </Picker>

              <TextInput
                style={styles.inputDescricao}
                id="descricao"
                class="form-field"
                type="text"
                placeholder="Descrição"
                name="descricao"
                value={values.descricao}
                onChangeText={text=>setValues(text)}
              />

            {isPickerShow && (
                <DateTimePicker
                  value={date}
                  mode={'date'}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={true}
                  onChange={onChange}
                  style={styles.datePicker}
                />
              )}

                {/* <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
               /> */}

              <View style={styles.button}>
                <Button 
                  title="Gravar"
                />
              </View>

              {/* <DatePicker
                style={{width: 200}}
                // date={this.state.date}
                format="YYYY-MM-DD"
                minDate="10-07-2019"
                maxDate="31-08-2019"
                onDateChange={this.selectDate}
              />    */}
              {/* <Text style={{fontSize: 25}} >{this.state.date}</Text>     */}

              {/* <TextInput 
                style={styles.input}
                id="data_retorno"
                class="form-field"
                type="date"
                format="DD-MM-YYYY"
                name="data_retorno"
                value={values.dtRetornoEstipulado}
                onChangeText={text=>setValues(text)}
              /> */}
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export function HistoricoAtendimento({navigation}){
  const [filtros, setFiltros] = useState({
    usuario: '',
    tpfoco: '',
    residencia: '',
  });

  const [filtro, setFiltro]=useState({
    pesquisa: ''
  })

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Header title="Histórico Atendimento"/>
          
          <Text style={{margin:12}}> Filtrar por:</Text>
              <Picker
                selectedValue={filtros}
                style={{height: 40, width: 200}}
                onValueChange={(itemValue, itemIndex) => setFiltros(itemValue)}
              >
                <Picker.Item label="Usuário" value="usuario"/>
                <Picker.Item label="Tipo de Foco" value="tpfoco"/>
                <Picker.Item label="Residência" value="residencia"/>
              </Picker>

          <TextInput
            style={styles.input}
            id="pesquisa"
            class="form-field"
            type="text"
            placeholder="Digite o Texto"
            name="pesquisa"
            value={filtro.pesquisa}
            onChangeText={text=>setFiltro(text)}
          />

          <View style={styles.button}>
                <Button 
                  title="Pesquisar"
                />
          </View>

      </View>
      </ScrollView>
    </SafeAreaView>


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
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    margin:1,
    marginBottom:9,
    paddingBottom:50
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
  },

  inputDescricao:{
    height: 150,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius:5,
    textAlignVertical: 'top',
    
  },
  
});