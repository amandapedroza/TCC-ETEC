import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import { css } from '../assets/css/Css';


export default function Home({navigation}) 
{
    return(

        <ImageBackground style={css.login__imageback}
        source={require('../assets/img/fundohome.png')}>



    <View style={css.botoeshome} >
            <TouchableOpacity style={css.cadastrobutton} 
                onPress={() => navigation.navigate('Registro', )}>
                   <Text style={css.cadastroTextButton}> Cadastrar-se </Text>
             </TouchableOpacity> 
    

    
             <TouchableOpacity  style={css.entrarButton}  onPress={() => navigation.navigate('Login', )}> 
             <Text style={css.entrarTextButton}>     Entrar     </Text>
                </TouchableOpacity>             
        
    </View>
            
            
    
        </ImageBackground> 
 

      
      
    )
}
