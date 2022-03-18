import * as React from 'react';

import { View, Text, Button, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../css/Styles';
let nu = "";
let sh = "";
export default function Atualizarsenha({ navigation }) {
    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");
    return (
        <View style={styles.containercadastro}>
            <Text style={styles.titulo}>Atualizar Senha</Text>


            <TextInput placeholder="Nome de Usuário"
                style={styles.txtnomeus}
                value={usuario}
                onChangeText={(value) => setUsuario(value)}
            />

            <TextInput placeholder="Senha"
                secureTextEntry style={styles.txtsenhaatualizar}
                value={senha}
                onChangeText={(value) => setSenha(value)}
            />

            <TouchableOpacity style={styles.btnatualizar} onPress={() => {

                nu = usuario;
                sh = senha;
                efetuarAtualizacao();
                setTimeout(() => {
                    navigation.navigate("Login");
                }, 3000);
            }

            } >
                <Text style={styles.txtbtnatualizar}>Atualizar</Text>
            </TouchableOpacity>
        </View>
    )
}

function efetuarAtualizacao() {
    if (sh.trim() == "") {
        return Alert.alert("Atenção", "Você deve preencher o usuário e a senha");
    }
    fetch(`http://10.26.49.45:5000/usuarios/alterarsenha/${nu}`, {
        method: "PUT",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            senha: sh
        })
    }).then((response) => response.json())
        .then((dados) => {
            console.log(`Tela Login token -> ${dados}`);
            if (dados.retorno != "Senha atualizada com sucesso") {
                return alert(dados.retorno);
            }
            dados = dados.payload;
        })
        .catch((erro) => console.error(erro));
}

