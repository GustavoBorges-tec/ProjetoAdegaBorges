import * as React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { styles } from '../css/Styles';

export default function Detalhe({route,navigation}){

    const{dados} = route.params;
    const{idusuario} = route.params;
    console.log(`Tela Detalhe -> ${idusuario}`)
    console.log(`Detalhes -> ${dados}`);
    return(
        <View style={styles.container}>
           
           <ScrollView horizontal={true} style={styles.scrollviewdetalhe}>

               <View style={styles.grupoimgdetalhe}>
                   <Image source={{uri:`${dados.foto}`}} style={styles.imgdetalhe}/>
               </View>
           </ScrollView>

           <View style={styles.infoproduto}>
               <Text style={styles.nomedetalhe}>{dados.nomeproduto}</Text>
               <Text style={styles.descricao}>{dados.descricao}</Text>
               <Text style={styles.preco}>R$ {dados.preco}</Text>
           </View>
           <View>
               <TouchableOpacity style={styles.btncomprardetalhe} onPress={()=>{navigation.navigate("Pagamento",{produto:dados,idusuario:idusuario})}}>  
                   <Text style={styles.txtbtncomprar}> Ir para pagamento </Text>
               </TouchableOpacity>
           </View>
        </View>
    )
}