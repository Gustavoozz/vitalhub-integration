import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { encode, decode } from "base-64";

if (!global.atob) {
    global.atob = decode
}

if (!global.btoa) {
    global.btoa = encode
}

<<<<<<< HEAD
export const userDecodeToken = async () => {
    const token = JSON.parse(await AsyncStorage.getItem("token")).token;

    if (token === null) {
        return null;
    }

    // Decodifica o token recebido: 
    const decoded = jwtDecode(token);

    return {
        name: decoded.name,
        role: decoded.role,
        user: decoded.jti,
        email: decoded.email,
    }
}

export const userLogout = async () => {
    const token = await AsyncStorage.removeItem("token")

    console.log(token);
=======
export const UserDecodeToken = async () => {
    // obtendo o token da async storage
    const token = JSON.parse(await AsyncStorage.getItem("token")).token;

    // se não existir token, retorne nulo
    if (token === null) {
        return null;
    }
    else {
        // se existir, decoda o token
        const decoded = jwtDecode(token);

        // retorno
        return {
            name: decoded.name, // nome
            email: decoded.email,// email
            role: decoded.role, // tipo do usuário
            user: decoded.jti, // id do usuário
        }
    }


}

export const UserLogout = async () => {
    await AsyncStorage.removeItem("token")
>>>>>>> develop
}