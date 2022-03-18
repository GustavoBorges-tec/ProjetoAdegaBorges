import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    refrigerantes:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-40,
    },
    energetico:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-40
    },
    cervejas:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-40
    },
    drink:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-40
    },
    aguardente:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-40
    },
    titulo: {
        color: "#FFC747",
        fontSize: 30,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 30,

    },
    imgbackground: {
        flex: 1,
        width: "100%",
        resizeMode: 'cover'
    },
    imgavatar: {
        width: 228,
        height: 228,
        resizeMode: "cover",
        marginTop: 160,
        marginLeft: -3
    },
    areaacesso: {
        width: "100%",
        height: 550,
        backgroundColor: "#000000",
        zIndex: 1000,
        marginTop: -80,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    label: {
        color: "#FFC747",
        fontSize: 15,
        paddingLeft: 30
    },
    txtlogin: {
        color: "white",
        marginLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        width: "85%",
        marginBottom: 20
    },
    txtsenha: {
        color: "white",
        marginLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        width: "85%",
        marginBottom: 20,
        paddingTop: 10
    },
    btnlogin: {
        backgroundColor: "#FFC747",
        width: 280,
        padding: 10,
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30
    },
    txtbtnlogin: {
        color: "black",
        textAlign: "center",
        fontSize: 15
    },
    btncadastrar: {
        marginTop: 30,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        width: "80%",
        marginRight: "auto",
        marginLeft: "auto"
    },
    btnrecuperarsenha: {
        marginTop: 30,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        width: "80%",
        marginRight: "auto",
        marginLeft: "auto"
    },
    txtrecuperarsenha:{
        color: "white",
        fontSize: 12,
        textAlign: "center"
    },
    txtbtncadastrar: {
        color: "white",
        fontSize: 12,
        textAlign: "center"
    },
    categoria: {
        zIndex: 10000,
        marginTop: -45
    },
    superior: {
        width: "80%",
        paddingTop: 40,
        position: "absolute",
        top: 0
    },

    txtsuperior: {
        height: -10,
        color: "#FFC747",
        textAlign: "center",
        fontSize: 20,
        zIndex: 10000,
        marginTop: -50
    },
    imgproduto: {
        borderRadius: 20,
        marginTop:30,
        width: "100%",
        height: 90,
        resizeMode: "contain"
    },
    imgproduto1:{
        borderRadius: 20,
        marginTop:80,
        width: "90%",
        height: 90,
        resizeMode: "contain"
    },
    scrollviewhome: {
        backgroundColor: "black",
        width: "100%",
        padding: 40,
        position: "absolute",
        top: 280,
        height: 700,
        marginTop: -185,
        borderWidth: 1,
        marginBottom:100

    },
    listaprodutos: {
        borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    itemproduto: {
        borderRadius: 20,
        borderColor: "#eee",
        borderWidth: 1,
        width: 100,
        height: 150,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: "center",
        margin: 23
    },
    nomeproduto: {
        marginTop: 0,
        color: "white",
        fontSize: 14,
        fontWeight: "bold"
    },
    nomedetalhe: {
        marginTop: -20,
        color: "white",
        fontSize: 14,
        fontWeight: "bold"
    },
    descricao: {
        marginTop: 0,
        color: "white",
        fontSize: 14,
        fontWeight: "bold"
    },
    preco: {
        fontSize: 14,
        alignItems: 'center',
        color: "#FFC747"
    },
    btncomprardetalhe: {
        backgroundColor: "#FFC747",
        padding: 9,
        margin: 9,
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20
    },
    btncomprar: {
        backgroundColor: "#FFC747",
        padding: 7,
        margin: 7,
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 3
    },
    btnverh:{
        backgroundColor: "#FFC747",
        padding: 10,
        margin: 40,
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop:-50
    },
    btndetalhe:{
        backgroundColor: "#FFC747",
        padding: 7,
        margin: 10,
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop:-0
    },
    txtbtncomprar: {
        color: "black",
        fontSize: 15
    },
    grupoimgdetalhe: {
        flexDirection: "row"
    },

    imgdetalhe: {
        width: 200,
        height: 200,
        margin: 50,
        resizeMode: "cover"
    },

    scrollviewdetalhe: {
        backgroundColor: "black",
        width: "100%",
        padding: 40,
        position: "absolute",
        top: 280,
        height: 700,
        marginTop: -350,
        borderWidth: 1
    },
    infoproduto: {
        marginTop: 40,
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },

    btnpagamento: {
        backgroundColor: "#FFC747",
        padding: 10,
        borderRadius: 50,
        marginTop: 50
    }
    ,
    txtbtnpagamento: {
        color: "black",
        fontWeight: "bold",
        fontSize: 15
    },
    tipopagamento: {
        width: "80%",
        backgroundColor: "#fff",
        marginBottom: 10,
        borderColor: "#fff",
        marginLeft: "auto",
        marginRight: "auto"
    },
    controle: {
        width: "80%",
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 10
    },
    painelrefri: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    listarefrigerantes: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom:240,
        marginTop:-40
    },
    listacerveja: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom:240,
        marginTop:-40
    },
    listaenergetico: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom:240,
        marginTop:-40
    },
    listadrink: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom:240,
        marginTop:-40
    },
    painelcerveja: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    painelenergetico: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    paineldrink: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    listaaguardente: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom:240,
        marginTop:-40
    },
    painelaguardente: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    containerpagamento: {
        backgroundColor: "black",
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
    },
    txtnomeus: {
        color: "black",
        marginLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: "85%",
        marginBottom: 20
    },
    txtsenhacadastro: {
        color: "black",
        marginLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: "85%",
        marginBottom: 20
    },
    txtnomecompleto: {
        color: "black",
        marginLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: "85%",
        marginBottom: 20
    },
    txtcpf: {
        color: "black",
        marginLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: "85%",
        marginBottom: 20
    },
    txtemail: {
        color: "black",
        marginLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: "85%",
        marginBottom: 20
    },
    txtendereco: {
        color: "black",
        marginLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: "85%",
        marginBottom: 20
    },
    txtfoto: {
        color: "black",
        marginLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: "85%",
        marginBottom: 20
    },
    containercadastro: {
        backgroundColor: "white",
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
    },
    btnatualizar: {
        backgroundColor: "#FFC747",
        padding: 10,
        borderRadius: 50,
        marginTop: 50
    },
    txtsenhaatualizar:{
        color: "black",
        marginLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: "85%",
        marginBottom: 20
    },
    txtbtnatualizar:{
    color: "white",
    marginLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    width: "85%",
    marginBottom: 20
    }
})