import * as React from 'react';

import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { styles } from '../css/Styles';

export default function Cervejas({navigation,route}){ 
    const{idusuario}=route.params;
    const[listaCerveja,setListaCervejas]=React.useState([
        {
            foto:"",
            nomeproduto:"",
            preco:""
        }
    ]);
    
    React.useEffect(()=>{
        fetch("http://10.26.49.45:5000/cerveja/listar")
        .then((response)=>response.json())
        .then((dados)=>{
            setListaCervejas(dados.retorno);
            console.log(dados.retorno);
        })
        .catch((erro)=>console.error(erro));
    },[]);


    return(
        <View style={styles.painelcerveja}>
            
            <Image source={require("../assets/brahmalogo.jpg")} 
            style={{width:"100%",height:200,resizeMode:"cover", marginTop:-520}}/>

            <ScrollView horizontal={false} style={styles.scrollviewhome}>

            <View style={styles.cervejas}>
            <Image source={require("../assets/cervejas.png")}/>
            </View>

                <View style={styles.listacerveja}>

                {
                    listaCerveja.map((itens,ix)=>(
                        <View key={ix} style={styles.itemproduto}>
                            
                            <Image source={{uri:`${itens.foto}`}} style={styles.imgproduto}/>
                            
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