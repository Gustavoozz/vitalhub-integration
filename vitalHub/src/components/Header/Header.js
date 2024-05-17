import React, { useEffect, useState } from "react";
import { UserDecodeToken } from "../../utils/Auth";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault, ContainerHeader, DataUser2 } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';
import api from "../../services/Service";
import { useFocusEffect } from "@react-navigation/native";

export const Header = ({ }) => {
  // CONSTS
  const [nome, setNome] = useState();
  const [role, setRole] = useState();
  const [photo, setPhoto] = useState(null);



  // FUNCTIONS
  async function profileLoad() {
    const token = await UserDecodeToken();

    setNome(token.name);
    setRole(token.role);

    GetPhoto(token.user)
  }

  const GetPhoto = async (id) => {
    await api.get(`/Usuario/BuscarPorId?id=${id}`)
      .then(response => {
        setPhoto(response.data.foto)
        setNome(response.data.nome)
      })
      .catch(error => {
        console.log(error);
      })
  }



  // EFFECTS
  useFocusEffect(
    React.useCallback(() => {
      profileLoad();
    }, [])
  )

  return (
    <ContainerHeader>
      <BoxUser>
        <ImageUser source={{ uri: photo }} />
        <DataUser>
          <TextDefault style={{color: "#fbfbfb"}}>Bem vindo!</TextDefault>
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