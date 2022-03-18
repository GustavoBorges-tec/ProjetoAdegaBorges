import * as React from 'react';

import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../css/Styles';

export default function Home({ navigation,route }) {
    const{idusuario}=route.params;
    console.log(`Tela Home -> ${idusuario}`)
    const [listaRefrigerantes, setListaRefrigerante] = React.useState([
        {
            foto: "",
            nomeproduto: "",
            preco: ""
        }
    ]);
    const [listaCerveja, setListaCervejas] = React.useState([
        {
            foto: "",
            nomeproduto: "",
            preco: ""
        }
    ]);
    const [listaEnergetico, setListaEnergetico] = React.useState([
        {
            foto: "",
            nomeproduto: "",
            preco: ""
        }
    ]);
    const [listaDrink, setListaDrink] = React.useState([
        {
            foto: "",
            nomeproduto: "",
            preco: ""
        }
    ]);
    const [listaAguardente, setListaAguardente] = React.useState([
        {
            foto: "",
            nomeproduto: "",
            preco: ""
        }
    ]);


    React.useEffect(() => {
        fetch("http://10.26.49.43:5000/produtos/listar")
            .then((response) => response.json())
            .then((dados) => {
                setListaRefrigerante(dados.retorno);
                setListaEnergetico(dados.retorno);
                setListaAguardente(dados.retorno);
                setListaDrink(dados.retorno);
                console.log(dados.retorno);
            })
            .catch((erro) => console.error(erro));
    }, []);


    return (
        <View style={styles.container}>

            <Image source={require("../assets/painel.jpg")}
                style={{ width: "100%", height: 200, resizeMode: "cover", marginTop: -620 }} />

            <View style={styles.categoria}>
                <Image source={require("../assets/categorias.png")} />
            </View>


            <ScrollView horizontal={false} style={styles.scrollviewhome}>

                <View style={styles.listaprodutos}>

                    {
                        listaRefrigerantes.map((itens, ix) => (
                            <View key={ix} style={styles.itemproduto}>

                                <Image source={require("../assets/logococa.png")} style={styles.imgproduto1} />

                                <Text style={styles.nomeproduto}>{itens.nomeproduto}</Text>

                                <Text style={styles.preco}></Text>

                                <TouchableOpacity style={styles.btnverh}
                                    onPress={() => { navigation.navigate("Refrigerante",{idusuario:idusuario})}}
                                >
                                    <Text style={styles.txtbtncomprar}>Ver</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
            

                    {
                        listaCerveja.map((itens, ix) => (
                            <View key={ix} style={styles.itemproduto}>

                                <Image source={require("../assets/brahmalogo.jpg")} style={styles.imgproduto1} />

                                <Text style={styles.nomeproduto}>{itens.nomeproduto}</Text>

                                <Text style={styles.preco}></Text>

                                <TouchableOpacity style={styles.btnverh}
                                    onPress={() => { navigation.navigate("Cervejas",{idusuario:idusuario}) }}
                                >
                                    <Text style={styles.txtbtncomprar}>Ver</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
              
                    {
                        listaEnergetico.map((itens, ix) => (
                            <View key={ix} style={styles.itemproduto}>

                                <Image source={require("../assets/logoredbull.png")} style={styles.imgproduto1} />

                                <Text style={styles.nomeproduto}>{itens.nomeproduto}</Text>

                                <Text style={styles.preco}></Text>

                                <TouchableOpacity style={styles.btnverh}
                                    onPress={() => { navigation.navigate("Energetico",{idusuario:idusuario}) }}
                                >
                                    <Text style={styles.txtbtncomprar}>Ver</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
              
                    {
                        listaDrink.map((itens, ix) => (
                            <View key={ix} style={styles.itemproduto}>

                                <Image source={require("../assets/caipirinha.png")} style={styles.imgproduto1} />

                                <Text style={styles.nomeproduto}>{itens.nomeproduto}</Text>

                                <Text style={styles.preco}></Text>

                                <TouchableOpacity style={styles.btnverh}
                                    onPress={() => { navigation.navigate("Drink",{idusuario:idusuario}) }}
                                >
                                    <Text style={styles.txtbtncomprar}>Ver</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
               

                    {
                        listaAguardente.map((itens, ix) => (
                            <View key={ix} style={styles.itemproduto}>

                                <Image source={require("../assets/jacklogo.png")} style={styles.imgproduto1} />

                                <Text style={styles.nomeproduto}>{itens.nomeproduto}</Text>

                                <Text style={styles.preco}></Text>

                                <TouchableOpacity style={styles.btnverh}
                                    onPress={() => { navigation.navigate("Aguardente",{idusuario:idusuario}) }}
                                >
                                    <Text style={styles.txtbtncomprar}>Ver</Text>
                                </TouchableOpacity>
                            </View>
                                 ))
                                }
                                </View>
                </ScrollView>
        </View>
    )
}
