import * as React from 'react';


import { View, Text, Button, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../css/Styles';


let nu = "";
let sh = "";
let nc = "";
let cp = "";
let em = "";
let en = "";

export default function Cadastro({ navigation }) {

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [nomecompleto, setNomecompleto] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [enderecoc, setEnderecoc] = React.useState("");

    return (
        <View style={styles.containercadastro}>
            <Text style={styles.titulo}>Cadastrar Usuário</Text>


            <TextInput placeholder="Nome de Usuário"
                style={styles.txtnomeus}
                value={usuario}
                onChangeText={(value) => setUsuario(value)}
            />

            <TextInput placeholder="Senha"
                secureTextEntry style={styles.txtsenhacadastro}
                value={senha}
                onChangeText={(value) => setSenha(value)}
            />

            <TextInput placeholder="Nome Completo"
                style={styles.txtnomecompleto}
                value={nomecompleto}
                onChangeText={(value) => setNomecompleto(value)}

            />

            <TextInput placeholder="CPF"
                style={styles.txtcpf}
                value={cpf}
                onChangeText={(value) => setCpf(value)}
            />
            <TextInput placeholder="E-Mail"
                style={styles.txtemail}
                value={email}
                onChangeText={(value) => setEmail(value)}
            />

            <TextInput placeholder="Endereço"
                style={styles.txtendereco}
                value={enderecoc}
                onChangeText={(value) => setEnderecoc(value)}
            />





            <TouchableOpacity style={styles.btnlogin} onPress={() => {

                nu = usuario;
                sh = senha;
                nc = nomecompleto;
                cp = cpf;
                em = email;
                en = enderecoc;
                efetuarCadastro();
                setTimeout(() => {
                    navigation.navigate("Login");
                }, 3000);

            }

            } >


                <Text style={styles.txtbtnlogin}>Cadastrar</Text>
            </TouchableOpacity>



        </View>


    )
}
function efetuarCadastro() {

    if (nu.trim() == "" || sh.trim() == "" || nc.trim() == "" || cp.trim() == "" || em.trim() == "" || en.trim() == "") {
        return Alert.alert("Atenção", "Você deve preencher o usuário e a senha");
    }

    fetch("http://10.26.49.45:5000/usuarios/cadastrar", {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nomeusuario: nu,
            senha: sh,
            nomecompleto: nc,
            cpf: cp,
            email: em,
            endereco: en
        })
    }).then((response) => response.json())
        .then((dados) => {
            console.log(`Tela Login -> ${dados}`);
            alert("Cadastrado com sucesso!");
        })
        .catch((erro) => console.error(erro));

}
