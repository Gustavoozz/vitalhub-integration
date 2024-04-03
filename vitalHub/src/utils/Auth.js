import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { encode, decode } from "base-64";

if (!global.atob) {
    global.atob = decode
}

if (!global.btoa) {
    global.btoa = encode
}

export const userDecodeToken = async () => {
    // obtendo o token da async storage
    const token = JSON.parse(await AsyncStorage.getItem("token")).token;

    // se não existir token, retorne nulo
    if (token === null) {
        return null;
    }

    // se existir, decoda o token
    const decoded = jwtDecode(token);

    // retorno
    return {
        token: token, // token inteiro
        name: decoded.name, // nome
        email: decoded.email,// email
        role: decoded.role, // tipo do usuário
    }
}

export const userLogout = async () => {
    await AsyncStorage.removeItem("token")
}