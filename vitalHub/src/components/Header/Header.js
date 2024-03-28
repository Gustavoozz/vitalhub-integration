import { useEffect, useState } from "react";
import { userDecodeToken } from "../../utils/Auth";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault, ContainerHeader } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";
import { jwtDecode } from "jwt-decode";

export const Header = ({}) => {
  const [nome,setNome] = useState();

  async function profileLoad() {
    const token = await userDecodeToken();

    if (token) {
      console.log(token);
    }

    setNome(token.name);
  }

  useEffect(() => {
    profileLoad();
  })

  return (
    <ContainerHeader>
      <BoxUser>
        <ImageUser source={{ uri: "https://jpimg.com.br/uploads/2017/06/761742473-cristiano-ronaldo-cortou-o-cabelo-apos-conquista-da-champions.jpg" }} />
        <DataUser>
          <TextDefault>Bem vindo!</TextDefault>
          <NameUser>{nome}</NameUser>
        </DataUser>
      </BoxUser>

      {/* material icons */}
      <MaterialIcons name="notifications" size={25} color="#fbfbfb" />

    </ContainerHeader>
  );
};