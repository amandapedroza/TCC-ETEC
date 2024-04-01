import React from 'react';
import { View, Image, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Botaomenu from './componentes/Botaomenu';
import { css } from '../assets/css/Css';





const Perfil = () => {
  return (
    <View style={css.containerPerfil}>
      <View style={css.imageContainer}>
        <Image source={require('../assets/img/icon.png')} style={css.foto_perfil} />
      </View>
      <Text style={css.nome_perfil}>Ana</Text>
      <View style={css.row}>
        <Text style={css.leftText}>Peso: 3.5 kg</Text>
        <Text style={css.rightText}>Altura: 50 cm</Text>
      </View>

    

      <View>
        <Botaomenu style={{ top: 310, left: 140}} />
        <StatusBar style="auto" />
        </View>

        </View>
       
        );
};





export default Perfil;



