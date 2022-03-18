import * as React from 'react';

import {View, Text, Button, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import { styles } from '../css/Styles';
let us = "";
let sh = "";
let idusuario=0;
export default function Login({navigation}){
    const[usuario,setUsuario] = React.useState("");
    const[senha,setSenha] = React.useState("");
    return(
        <View style={styles.container}>
            <ImageBackground source={require("../assets/background.jpg")} style={styles.imgbackground}>
                <Image source={require("../assets/avatar.png")} style={styles.imgavatar} />
                <View style={styles.areaacesso}>
                    <Text style={styles.titulo}>Login</Text>
                        <Text style={styles.label}>Usuário</Text>
                        <TextInput placeholder="seu nome de usuário" selectionColor='white'
                        style={styles.txtlogin}
                        value={usuario}
                        onChangeText={(value)=>setUsuario(value)}
                        />
                        <Text style={styles.label}>Senha</Text>
                        <TextInput placeholder="Senha" 
                        secureTextEntry style={styles.txtsenha}
                        value={senha}
                        onChangeText={(value)=>setSenha(value)}
                        />
                        
                        <TouchableOpacity style={styles.btnrecuperarsenha} onPress={()=>navigation.navigate("Atualizarsenha")}>
                            <Text style={styles.txtrecuperarsenha}>
                                Esqueceu a sua senha?
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnlogin} onPress={()=>
                            {
                                us = usuario;
                                sh = senha;
                                efetuarLogin();
                                setTimeout(()=>{
                                    navigation.navigate("Home",{idusuario:idusuario});
                                },3000);
                                
                            }
                            } >
                            <Text style={styles.txtbtnlogin}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btncadastrar} onPress={()=>navigation.navigate("Cadastro")} >
                            <Text style={styles.txtbtncadastrar}>
                                Você ainda não tem cadastro? Cadastre-se aqui
                            </Text>
                        </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

function efetuarLogin(){

    if(us.trim()=="" || sh.trim()==""){
        return Alert.alert("Atenção","Você deve preencher o usuário e a senha");
    }

    fetch("http://10.26.49.45:5000/usuarios/login",{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeusuario:us,
            senha:sh
        })
    }).then((response)=>response.json())
    .then((dados)=> {
        console.log(`Tela Login -> ${dados.payload}`);
        if(dados.retorno != "Logado"){
           return alert(dados.retorno);
        }
         idusuario = dados.payload;
    })
    .catch((erro)=>console.error(erro));
 
}
