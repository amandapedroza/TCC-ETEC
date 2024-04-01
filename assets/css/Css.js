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

    botoeshome: {   //Botões de cadastro e entrar
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '160%',
        
    },

    cadastrobutton:{ //Botão de cadastro
        
        padding: 8,
        backgroundColor: '#6ED8CB',
        borderRadius: 15,
        marginRight: '10%'


    },

    cadastroTextButton:{ //Texto do botão de cadastro
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        
    },

    entrarButton:{  //Botão de entrar
        backgroundColor: 'rgba(110, 216, 203, 0.75)',
        padding: 8,
        borderRadius: 15
    },

    entrarTextButton:{  //Texto do botão de entrar
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },

    //FIM DA PAGINA INICIAL 



    // COMEÇO DA PAGINA DE LOGIN 
    
    darkbg:{  //KeyboardAvoidingView (não deixa o teclado cobrir os componentes)
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

   
    cadastrar__button: { //Botão de cadastrar 
        marginTop: 200,
        padding: 12,
        backgroundColor: '#6ED8CB',
        alignSelf: 'center',
        borderRadius: 15,
    },

    // FIM DA PAGINA DE CADASTRO


    // INICIO DA PAGINA PERFIL 

        containerPerfil: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
          backgroundColor: '#88f2ed', // Cor de fundo para a área do nome, foto, peso e altura
          borderRadius: 10,
          padding:100,
          marginBottom: 20,
          width: '100%', 
        },
        backgroundContainer: {
            height:30,
            backgroundColor: '#88f2ed',
            position: 'absolute',
            top:0,
            left:0,
            right:0,
            zIndex:1,
            marginTop:10,
        },
        profileContainer: {
            flexDirection: 'row', // Alinha os itens verticalmente
            justifyContent: 'space-between', // Empurra os itens para as extremidades
            alignItems: 'center',
            marginBottom: 10,
          },
      imageContainer: {
        position: 'absolute',
        top: 20, // Posição da margem superior para a imagem
      },
      foto_perfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      nome_perfil: {
        position: 'absolute',
        top: 150, /*TAMANHO QUE FICA NA PARTE INFERIOR, ABAIXO DA FOTO*/
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
      },
    
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: 100, // Posição da margem superior para o texto do peso e altura
      },
      leftText: {
        marginLeft: 20,
        
      },
      rightText: {
        marginRight: 20,
      },
    });


  export {css};