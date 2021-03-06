import * as React from "react";
import {View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import { styles } from "../css/Styles";
import DropDownPicker from "react-native-dropdown-picker";


let tipo = "";
let detalhe = "";
let total = "";
let nparcela = 0;
let vparcela = "";
let endereco = "";
let idus=0;



export default function Pagamento({route}){

    const{produto} = route.params;
    const{idusuario} = route.params;
    console.log(`Tela Pagamento -> ${idusuario}`)
    console.log(`Tela Pagamento -> ${produto}`)

    const[preco,setPreco] = React.useState(produto.preco);
    const[detalhepagamento,setDetalhepagamento] = React.useState("");
    const[numParcela,setNumParcela] = React.useState(1);
    const[enderecoPague,setEndereco] = React.useState("");
    const[numeros,setNumeros]=React.useState([
        {label:"1",value:1},
        {label:"2",value:2},
        {label:"3",value:3},
        {label:"4",value:4},
        {label:"5",value:5},
        {label:"6",value:6},
    ]);
    const[abrirNumero, setAbrirNumero] = React.useState(true);

    const[valorParcela,setValorParcela] = React.useState(produto.preco);

    const[abrir,setAbrir] = React.useState(false);
    const[valor,setValor] = React.useState("Cartão");
    const[itens,setItens] = React.useState([
        {label:"Cartão",value:"Cartão"},
        {label:"Pix",value:"Pix"},
        {label:"Transferência", value: "Transferência"}
    ]);

    return(
        <View style={styles.containerpagamento}>
            
            <DropDownPicker
               open={abrir}
                value={valor}
                items={itens}
                setOpen={setAbrir}
                setValue={setValor}
                setItems={setItens}
                style={styles.tipopagamento}
                
            />
            <TextInput placeholder="Detalhes do pagamento" 
            value={detalhepagamento} 
            onChangeText={(value)=>setDetalhepagamento(value)} style={styles.controle}/>
            
            <TextInput placeholder="Valor Total" keyboardType="decimal-pad" 
            style={styles.controle} value={preco.toString()} editable={true}/>
            
            <TextInput placeholder="Endereço" 
            value={enderecoPague} 
            onChangeText={(value)=>setEndereco(value)} style={styles.controle}/>


            <DropDownPicker
               open={abrirNumero}
                value={numParcela}
                items={numeros}
                setOpen={setAbrirNumero}
                setValue={setNumParcela}
                setItems={setNumeros}
                style={styles.tipopagamento}
                onChangeValue={() => setValorParcela(preco/numParcela)}
                
            />
            

            <TextInput keyboardType="decimal-pad" 
            value={valorParcela.toString()} editable={true} placeholder="Valor da parcela" style={styles.controle}/>

            <TouchableOpacity style={styles.btnpagamento}
                onPress={()=>{
                    tipo = valor;
                    detalhe = detalhepagamento;
                    total = preco;
                    nparcela = numParcela;
                    vparcela = valorParcela;
                    endereco = enderecoPague;
                    idus = idusuario;
                    efetuarPagamento();
                }}
            >
                <Text style={styles.txtbtnpagamento}>Efetuar Pagamento</Text>
            </TouchableOpacity>

        </View>
    )
}

function efetuarPagamento(){

    if(tipo=="" || detalhe=="" || total=="" || nparcela==0 || vparcela=="" || endereco==""){
        return Alert.alert("Erro","Você deve preencher todos os campos");
    }
    console.log(` Id Usuário: ${idus} -
                Tipo: ${tipo} - Detalhe: ${detalhe} - 
                Total: ${total} - Num Parcelas: ${nparcela} - Endereço:${endereco}
                Valor Parcela: ${vparcela}`);


    fetch(`http://10.26.49.45:5000/pagamentos/cadastrar`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            idusuario:idus,
            tipo:tipo,
            detalhe:detalhe,
            total:total,
            nparcela:nparcela,
            vparcela:vparcela,
            endereco:endereco
        })
    }).then((response)=>response.json())
    .then((rs)=>{
        console.log(rs)
        Alert.alert(rs.retorno)
    }).catch((erro)=>console.error(`Erro ao tentar carregar a API -> ${erro}`))

}