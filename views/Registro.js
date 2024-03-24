import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, Text, Image, View, TouchableOpacity, Platform, ImageBackground} from 'react-native';
import { css } from '../assets/css/Css';

export default function Registro()
{

    const [display, setDisplay]=useState( initialState='none');


    return(
    
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[css.container, css.darkbg]}> 

        <View style={css.login__form}> 

        <Text style={css.text_form}> Seu E-mail:</Text>
        <TextInput style={css.login__input} placeholder='exemplo@gmail.com' />

        <Text  style={css.text_form}>Crie uma senha:</Text>
        <TextInput style={css.login__input} placeholder='Abcd1234' secureTextEntry={true}/>

        <Text> Dados do(a) bebê:</Text>

        <Text  style={css.text_form}>Nome:</Text>
        <TextInput style={css.login__input} placeholder='Digite o nome do(a) bebê' />

        <Text  style={css.text_form}>Data de nascimento:</Text>
        <TextInput style={css.login__input} placeholder='Digite o nome do(a) bebê' />

        <Text  style={css.text_form}>Sexo:</Text>


        <View style={css.sexo_botao}>
        
        
        <TouchableOpacity style={css.sexo_botao1} onPress={()=>setDisplay(value= 'flex')}>
                    <Image source={require('../assets/feminino.png')}/>
                </TouchableOpacity>

         <TouchableOpacity  onPress={()=>setDisplay(value= 'flex')}>
                    <Image source={require('../assets/masculino.png')}/>
                </TouchableOpacity>
                </View>
        

               
                <TouchableOpacity style={css.cadastrar__button} onPress={()=>setDisplay(value= 'flex')}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
             
           </View>
           
        </KeyboardAvoidingView>
         
    )
}