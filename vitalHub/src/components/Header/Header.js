import { useEffect, useState } from "react";
import { UserDecodeToken } from "../../utils/Auth";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault, ContainerHeader, DataUser2 } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';
import api from "../../services/Service";

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
      console.log(response.data.foto);

      setPhoto(response.data.foto)
    })
    .catch(error => {
      console.log(error);
    })
  }



  // EFFECTS
  useEffect(() => {
    profileLoad();
  }, [])

  return (
    <ContainerHeader>
      <BoxUser>
        <ImageUser source={{ uri: photo }} />
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