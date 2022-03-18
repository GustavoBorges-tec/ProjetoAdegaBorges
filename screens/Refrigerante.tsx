import * as React from 'react';

import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { styles } from '../css/Styles';

export default function Refrigerante({navigation,route}){ 
    const{idusuario}=route.params;
    console.log(`Tela Refrigerantes -> ${idusuario}`)
    const[listaRefrigerantes,setListaRefrigerante]=React.useState([
        {
            foto:"",
            nomeproduto:"",
            preco:""
        }
    ]);
    
    React.useEffect(()=>{
        fetch("http://10.26.49.45:5000/refrigerante/listar")
        .then((response)=>response.json())
        .then((dados)=>{
            setListaRefrigerante(dados.retorno);
            console.log(dados.retorno);
        })
        .catch((erro)=>console.error(erro));
    },[]);


    return(
        <View style={styles.painelrefri}>
            
            <Image source={require("../assets/logococa.png")} 
            style={{width:"100%",height:200,resizeMode:"cover", marginTop:-520}}/>


            

            <ScrollView horizontal={false} style={styles.scrollviewhome}>

            <View style={styles.refrigerantes}>
            <Image source={require("../assets/refrigerantes.png")}/>
            </View>
                <View style={styles.listarefrigerantes}>

                {
                    listaRefrigerantes.map((itens,ix)=>(
                        <View key={ix} style={styles.itemproduto}>
                            
                            <Image source={{uri:`${itens.foto}`}}style={styles.imgproduto}/>
                            
                            <Text style={styles.nomeproduto}>{itens.nomeproduto}</Text>
                            
                            <Text style={styles.preco}>R$ {itens.preco}</Text>

                            <TouchableOpacity style={styles.btndetalhe} 
                                onPress={()=>{navigation.navigate("Detalhe",{dados:itens,idusuario:idusuario})}}
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