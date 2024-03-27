import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        backgroundColor:'blue',
        padding: 20,
    },


    

    //IMAGEM DE FUNDO 
    login__imageback:{
        
            flex: 1,
            resizeMode: 'cover', // ou 'stretch' para esticar a imagem
            justifyContent: 'center', // ou 'flex-end' para ajustar ao final
            alignItems: 'center',
    },



    //COMEÇO DA PAGINA INICIAL (HOME)

    botoeshome: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '160%'
    },

    cadastrobutton:{ 
        
        padding: 10,
        backgroundColor: '#6ED8CB',
        borderRadius: 15,
        marginRight: '10%'


    },

    cadastroTextButton:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        
    },

    entrarButton:{
        backgroundColor: 'rgba(110, 216, 203, 0.75)',
        padding: 10,
        borderRadius: 15
    },

    entrarTextButton:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },

    //FIM DA PAGINA INICIAL 



    // COMEÇO DA PAGINA DE LOGIN 
    
    darkbg:{
        marginTop: 5,

        
    },

    logo__image:{ //Imagem do logo 
        
        marginBottom: 50,
    },


    login__msg:(text='none')=>({ //Mensgem de erro usuario/senha
        fontWeight:'bold',
        fontSize: 22,
        color: 'red',
        marginTop: 10,
        marginBottom: 15,
        display: text 
    }),

    text_form:{  //Texto em cima dos inputs "Email / Senha etc"
        fontSize: 20,
        marginBottom: 5,
        
    },

    login__form:{ // Formulario como um todo (Texto, inputs e botão)
        width: "85%",
        

    },
    login__input:{ // Inputs dos formularios
        width: 350,
        borderWidth: 2, // Adiciona a borda para todas as direções
        borderColor: 'rgba(110, 216, 203, 0.75)',
        borderRadius: 15,
        fontSize:  19,
        padding: 7,
        marginBottom: 10,
        fontWeight: 'bold',
        color: "#fff",
        backgroundColor: 'rgba(110, 216, 203, 0.50)'
    
    },
    login__button:{ // Botão de entrar
        padding: 12,
        backgroundColor: '#6ED8CB',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 50,
        
    },
    login__buttonText:{ // Texto do botão de entrar
        fontWeight:'bold',
        fontSize: 22,
        color: "#fff"

    },

    login__cadastro: { // Texto/link de cadastro no final da pagina
        marginTop: 100
    },

    // FIM DA PAGINA DE LOGIN


    // INICIO DA PAGINA DE CADASTRO

    sexo_botao: {
        flex: 1,
        flexDirection: "row"
    },

    sexo_botao1: {
     marginRight: 75,
     marginLeft: 50
    },

    cadastrar__button: {
        marginTop: 200,
        padding: 12,
        backgroundColor: '#6ED8CB',
        alignSelf: 'center',
        borderRadius: 15,
    }






    


    // FIM DA PAGINA DE CADASTRO


  });
  export {css};