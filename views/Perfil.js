import React from 'react';
import { View, Image, Text, Button, StyleSheet, StatusBar,ImageBackground } from 'react-native';
import Botaomenu,{Aa}  from './componentes/Botaomenu';
import { css } from '../assets/css/PerfilStyle';




 export default  Perfil = ({navigation}) => {
  return (

    <ImageBackground style={css.login__imageback}
    source={require('../assets/img/fundonuvem.png')}>

    <View style={css.containerPerfil}>
      <View>
        <Image source={require('../assets/img/icon.png')} style={css.foto_perfil} />
      </View>
      <Text style={css.nome_perfil}>Ana</Text>
      <View style={css.row}>
        <Text style={css.peso_texto}>3.5 kg</Text>
        <Text style={css.altura_texto}>50 cm</Text>
      </View>

     

      <View style={css.viewButtom}>
        {/* coloca a propriedade de navegação dentro do botão */}
        <Botaomenu style={css.botao_menu} navigation={navigation} /> 
      </View>

        
        </View>

      </ImageBackground>
       
        );
};









