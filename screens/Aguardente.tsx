import * as React from 'react';

import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { styles } from '../css/Styles';

export default function Aguardente({navigation,route}){ 
    const{idusuario}=route.params;
    const[listaAguardente,setListaAguardente]=React.useState([
        {
            foto:"",
            nomeproduto:"",
            preco:""
        }
    ]);
    
    React.useEffect(()=>{
        fetch("http://10.26.49.45:5000/aguardente/listar")
        .then((response)=>response.json())
        .then((dados)=>{
            setListaAguardente(dados.retorno);
            console.log(dados.retorno);
        })
        .catch((erro)=>console.error(erro));
    },[]);


    return(
        <View style={styles.painelaguardente}>
            
            <Image source={require("../assets/jacklogo.png")} 
            style={{width:"100%",height:200,resizeMode:"cover", marginTop:-520}}/>

            <ScrollView horizontal={false} style={styles.scrollviewhome}>

            <View style={styles.aguardente}>
            <Image source={require("../assets/aguardentes.png")}/>
            </View>


                <View style={styles.listaaguardente}>

                {
                    listaAguardente.map((itens,ix)=>(
                        <View key={ix} style={styles.itemproduto}>
                            
                            <Image source={{uri:`${itens.foto}`}}style={styles.imgproduto}/>
                            {console.log(itens.foto)}
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