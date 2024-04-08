import { StyleSheet } from "react-native";

export const css = StyleSheet.create({


    login__imageback:{
        width:'100%',
        height: '100%',
        resizeMode: 'cover'
    },


    containerPerfil: {
        flex: 1,
        padding: 30,
       },

       
      foto_perfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        top: '20%',
        alignSelf: 'center'
      },


      nome_perfil: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        top: '5%'
      },


      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%',
        bottom: '15%'
       
      },

      peso_texto: {
        color: "#8B8B8B",
        fontWeight: 'bold',
        fontSize: 18
      },

      altura_texto: {
        color: "#8B8B8B",
        fontWeight: 'bold',
        fontSize: 18
      },

      viewButtom:{
        position:"absolute",
        right:50,
        bottom:70
      },
})