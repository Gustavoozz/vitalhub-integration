import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Container, ContainerUser, ContentProntuario, PhotoContainer } from '../../components/Container/Style'
import { InputUser, PhotoButton } from '../../components/Input/Style'

import { SubTextQuick } from '../../components/Text/Text'
import { ButtonTitle, LabelUser, TitleUser } from '../../components/Title/Style'

import { Text, View } from 'react-native'
import { SendPhotoButton } from '../../components/Button/Style'
import { CancelText } from '../../components/Link/Style'

import CameraProntuary from "../../components/CameraProntuary/CameraProntuary"
import { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

import {
    ButtonCancelPhoto,
    ButtonCancelPhotoText,
    ButtonTakePhoto,
    ButtonTakePhotoText,
    FlexibleBox,
    PhotoBoxNull,
    TextPhotoBox,
} from "./Style";
import CameraModal from '../../components/CameraProntuary/CameraProntuary'
import { UserImage } from '../../components/UserImage/Style'
// import * as MediaLibrary xfrom 'expo-media-library'

// API importada
import api from '../../services/Service'
import { UserDecodeToken } from '../../utils/Auth'
import Spinner from '../../components/Spinner/Spinner'
import { getMediaLibraryPermissionsAsync, useMediaLibraryPermissions } from 'expo-image-picker'
import { Camera } from 'expo-camera'

export const ViewPrescription = ({
    navigation,
    route
}) => {
    // CONSTS
    const [showCamera, setShowCamera] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [descricaoExame, setDescricaoExame] = useState("");

    const [showSpinner, setShowSpinner] = useState(false);

    const consulta = route.params.consulta;
    const receita = route.params.receita;
    const profile = route.params.profile;

    const [nome, setNome] = useState("");

    const [photoUser, setPhotoUser] = useState(null);




    // FUNCTIONS
    async function InserirExame() {
        setShowSpinner(true);

        const formData = new FormData();

        formData.append("ConsultaId", consulta.id);
        formData.append("Imagem", {
            uri: photo,
            name: `image.${photo.split(".").pop()}`,
            type: `image/${photo.split(".").pop()}`
        })

        await api.post(`/Exame/Cadastrar`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            setDescricaoExame(response.data.descricao)
        }).catch(error => {
            console.log(error);
        })

        setShowSpinner(false);
    }

    const GetExam = async () => {
        await api.get(`/Consultas/BuscarPorId?id=${consulta.id}`)
            .catch(error => {
                console.log(error);
            })
    }

    async function ProfileLoad() {
        const token = await UserDecodeToken();

        setNome(token.name);

        GetPhoto(token.user)
    }

    const GetPhoto = async (id) => {
        await api.get(`/Usuario/BuscarPorId?id=${id}`)
            .then(response => {
                setPhotoUser(response.data.foto);
            })
            .catch(error => {
                console.log(error);
            })
    }






    // EFFECTS
    useEffect(() => {
        if (photo) {
            InserirExame();
        }
    }, [photo])

    useEffect(() => {
        ProfileLoad();

        GetExam();
    }, [])

 

    return (
        <Container
            style={{
                paddingTop: 30,
            }}
        >
            <ContainerUser
                contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: "center",
                }}
                style={{
                    width: "100%"
                }}
                showsVerticalScrollIndicator={false}>
                <PhotoContainer>
                    <UserImage
                        style={{
                            borderRadius: 15
                        }}
                        source={{
                            uri: profile != "Medico" ?
                                consulta.medicoClinica.medico.idNavigation.foto
                                :
                                photoUser
                        }} />
                </PhotoContainer>

                <ContentProntuario>
                    <TitleUser style={{
                        marginBottom: 0,
                        marginTop: 40,
                    }}>
                        {
                            profile != "Medico" ?
                                consulta.medicoClinica.medico.idNavigation.nome
                                :
                                nome
                        }
                    </TitleUser>

                    <SubTextQuick>
                        {
                            profile != "Medico" ?
                                consulta.medicoClinica.medico.especialidade.especialidade1
                                :
                                ""
                        }
                    </SubTextQuick>
                </ContentProntuario>

                <LabelUser>Descrição da consulta</LabelUser>

                <PhotoBoxNull>
                    <TextPhotoBox>{consulta.descricao}</TextPhotoBox>
                </PhotoBoxNull>

                <LabelUser>Diagnóstico do paciente</LabelUser>

                <PhotoBoxNull>
                    <TextPhotoBox>{consulta.diagnostico}</TextPhotoBox>
                </PhotoBoxNull>

                <LabelUser>Prescrição médica</LabelUser>

                <PhotoBoxNull>
                    <TextPhotoBox>{receita.medicamento}</TextPhotoBox>
                </PhotoBoxNull>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <LabelUser>Exames médicos</LabelUser>

                    {
                        photo === null ? (
                            <PhotoButton />


                        ) : (
                            <PhotoButton
                                source={{ uri: photo }}
                                style={{
                                    height: 200,
                                    paddingBottom: 0
                                }}
                            />
                        )
                    }
                </View>

                <FlexibleBox>
                    <ButtonTakePhoto onPress={() => setShowCamera(true)}>
                        <MaterialCommunityIcons name="camera-plus-outline" size={24} color="#FBFBFB" />

                        <ButtonTakePhotoText>Enviar</ButtonTakePhotoText>
                    </ButtonTakePhoto>

                    <ButtonCancelPhoto onPress={() => setPhoto(null)}>
                        <ButtonCancelPhotoText>Cancelar</ButtonCancelPhotoText>
                    </ButtonCancelPhoto>
                </FlexibleBox>

                <View style={{
                    width: "90%",
                    height: "auto",
                    margin: 20,
                    padding: 30,
                    backgroundColor: "#F5F3F3"
                }}
                >
                    <Text>{descricaoExame}</Text>
                </View>

                <CancelText
                    onPress={() => navigation.replace("Main")}
                >Voltar</CancelText>

                <CameraModal
                    visible={showCamera}
                    setShowCamera={setShowCamera}
                    setPhotoUpload={setPhoto}
                />
            </ContainerUser>

            <Spinner
                visible={showSpinner}
            />
        </Container>
    )
}