import { Image, View } from "react-native"
import { CityContainer, Container, ContainerUser, InformationContent, PhotoContainer } from "../../components/Container/Style"
import { UserContainer } from "../../components/UserContainer/Style"
import { ButtonTitle, LabelUser, Title, TitleUser } from "../../components/Title/Style"
import { SubTextQuick, TextQuick } from "../../components/Text/Text"
import { InputCity, InputUser } from "../../components/Input/Style"
import { Button, ButtonUser } from "../../components/Button/Style"
import { ButtonCamera, Content } from "./Style"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { UserDecodeToken, UserLogout, userDecodeToken, userLogout } from "../../utils/Auth"
import { useEffect, useState } from "react"
import CameraModal from "../../components/CameraProntuary/CameraProntuary"
import moment from "moment";
import * as MediaLibrary from "expo-media-library"
import * as ImagePicker from "expo-image-picker"
// API importada
import api from "../../services/Service"

export const Perfil = ({ navigation }) => {
    // CONSTS
    const [tipoUsuario, setTipoUsuario] = useState();
    const [user, setUser] = useState([]);
    const [editar, setEditar] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const [photo, setPhoto] = useState(null);

    // FUNCTIONS
    async function ProfileLoad() {
        const token = await userDecodeToken();

        if (token !== null) {
            setTipoUsuario(token.role);

            await UserLoad(token);
        }
    }


    async function requestGalery() {
        await MediaLibrary.requestPermissionsAsync();
    
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      }
    
    async function UserLoad(token) {
        const url = (token.role == 'Medico' ?
            "Medicos"
            :
            "Pacientes"
        )

        console.log(`/${url}/BuscarPorId?id=${token.user}`);

        await api.get(`/${url}/BuscarPorId?id=${token.user}`)
            .then(response => {
                setUser(response.data)

                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // EFFECTS
    useEffect(() => {
        requestGalery();
        ProfileLoad();

      
    }, [])

    return (
        <ContainerUser>
            <PhotoContainer>
                <View>
                <UserContainer source={require('../../assets/User.png')} />
                <ButtonCamera onPress={() => setShowCamera(true)}>
                     <MaterialCommunityIcons name="camera-plus" size={20} color="#FBFBFB"/>
                </ButtonCamera>
               
                
                </View>
                
                {user.idNavigation != undefined ?
                    <InformationContent>
                        <TitleUser>{user.idNavigation.nome}</TitleUser>

                        <SubTextQuick>{user.idNavigation.email}</SubTextQuick>
                    </InformationContent>
                    :
                    null
                }

            </PhotoContainer>

            <Content>
                {
                    user.idNavigation != undefined ?
                        <>
                            {tipoUsuario !== "Medico" ?
                                <>
                                    <LabelUser>Data de Nascimento</LabelUser>

                                    <InputUser
                                        placeholder={moment(user.dataNascimento).format("DD/MM/YYYY")}
                                    />
                                </>
                                :
                                null

                            }


                            <LabelUser>
                                {tipoUsuario === "Medico" ?
                                    "CRM"
                                    :
                                    "CPF"
                                }
                            </LabelUser>

                            <InputUser
                                placeholder={tipoUsuario === "Medico" ?
                                    user.crm
                                    :
                                    user.cpf
                                }
                            />

                            <LabelUser>Endereço</LabelUser>

                            <InputUser
                                placeholder={`${user.endereco.logradouro}, ${user.endereco.numero}`}
                            />

                            <CityContainer>
                                <View>
                                    <LabelUser>CEP</LabelUser>

                                    <InputCity 
                                        placeholder={user.endereco.cep}
                                    />
                                </View>
                                {
                                    tipoUsuario !== "Medico" ?
                                        <View>
                                            <LabelUser>Cidade</LabelUser>

                                            <InputCity
                                                placeholder={user.endereco.cidade}
                                            />
                                        </View>
                                        :
                                        null
                                }

                            </CityContainer>
                        </>
                        :
                        null
                }

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>


              {
                 tipoUsuario == 'Medico' && editar == false ? (
                    <>
                   <Button onPress={() => { }}>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button> 
                    </>
                
                ) : editar == true ? (
                    <>
                    <Button style={{ backgroundColor: 'gray' }}onPress={() => { }}>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>
                    </>
                
                ) : null
                
              }
                

                <ButtonUser onPress={() => userLogout() && navigation.replace("Login")}>
                    <ButtonTitle>Logout</ButtonTitle>
                </ButtonUser>

                <CameraModal
                    getMediaLibrary={true}
                    visible={showCamera}
                    setShowCamera={setShowCamera}
                    setPhotoUpload={setPhoto}
                />
            </Content>
        </ContainerUser >
    )
}