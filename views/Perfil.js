import React from 'react';
import { View, Image, Text, Button, StyleSheet, StatusBar,ImageBackground } from 'react-native';
import Botaomenu from './componentes/Botaomenu';
import { css } from '../assets/css/Css';





const Perfil = () => {
  return (

    <ImageBackground style={css.login__imageback}
    source={require('../assets/img/fundonuvem.png')}>

    <View style={css.containerPerfil}>
      <View style={css.imageContainer}>
        <Image source={require('../assets/img/icon.png')} style={css.foto_perfil} />
      </View>
      <Text style={css.nome_perfil}>Ana</Text>
      <View style={css.row}>
        <Text style={css.peso_texto}>3.5 kg</Text>
        <Text style={css.altura_texto}>50 cm</Text>
      </View>

     

      <View>
        <Botaomenu style={css.botao_menu} />
       
        </View>

        
        </View>

      </ImageBackground>
       
        );
};





export default Perfil;



