import { useEffect, useState } from "react";
import { UserDecodeToken } from "../../utils/Auth";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault, ContainerHeader, DataUser2 } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';

export const Header = ({ }) => {
  const [nome, setNome] = useState();
  const [role, setRole] = useState()

  async function profileLoad() {
    const token = await UserDecodeToken();

    setNome(token.name);
    setRole(token.role);
  }

  useEffect(() => {
    profileLoad();
  })

  return (
    <ContainerHeader>
      <BoxUser>
        <ImageUser source={{ uri: "https://github.com/HookCreeping.png" }} />
        <DataUser>
          <TextDefault>Bem vindo !</TextDefault>
          <NameUser>{nome}</NameUser>
        </DataUser>
      </BoxUser>

      <DataUser2>
        {role === "Medico" ?
          <>
            <FontAwesome6 name="user-doctor" size={20} color="#fbfbfb" />
          </>
          :
          <>
            <FontAwesome6 name="user-large" size={20} color="#fbfbfb" />
          </>
        }

        <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
      </DataUser2>
    </ContainerHeader>
  );
};