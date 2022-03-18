import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./css/Styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Cadastro from "./screens/Cadastro";
import Atualizarsenha from "./screens/Atualizarsenha";
import Detalhe from "./screens/Detalhe";
import Pagamento from "./screens/Pagamento";
import Refrigerante from "./screens/Refrigerante";
import Cervejas from "./screens/Cervejas";
import Energetico from "./screens/Energetico";
import Drink from "./screens/Drink";
import Aguardente from "./screens/Aguardente";

const Pilha = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen
          name="Login" component={Login}  options={{ headerShown: false }}
        />
        <Pilha.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Pilha.Screen name="Cadastro" component={Cadastro} options={{headerStyle:{backgroundColor:"#FFC747"}}}/>
        <Pilha.Screen name="Detalhe" component={Detalhe} options={{headerStyle:{backgroundColor:"#FFC747"}}} />
        <Pilha.Screen name="Atualizarsenha" component={Atualizarsenha}options={{headerStyle:{backgroundColor:"#FFC747"}}}/>
        <Pilha.Screen name="Pagamento" component={Pagamento}options={{headerStyle:{backgroundColor:"#FFC747"}}}/>
        <Pilha.Screen name="Refrigerante" component={Refrigerante}options={{headerStyle:{backgroundColor:"#FFC747"}}}/>
        <Pilha.Screen name="Cervejas" component={Cervejas}options={{headerStyle:{backgroundColor:"#FFC747"}}}/>
        <Pilha.Screen name="Energetico" component={Energetico}options={{headerStyle:{backgroundColor:"#FFC747"}}}/>
        <Pilha.Screen name="Drink" component={Drink}options={{headerStyle:{backgroundColor:"#FFC747"}}}/>
        <Pilha.Screen name="Aguardente" component={Aguardente}options={{headerStyle:{backgroundColor:"#FFC747"}}}/>

      </Pilha.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
