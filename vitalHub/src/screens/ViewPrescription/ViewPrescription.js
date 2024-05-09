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
<<<<<<< HEAD
    PhotoBoxNull,
    TextPhotoBox,
=======
<<<<<<< HEAD
    ImageDoctor,
    ImagePhoto,
    InputBox,
    Line,
    PhotoBox,
    PhotoBoxNull,
    RecordContainer,
    RecordContent,
    TextPhotoBox
=======
>>>>>>> gustavo
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978
} from "./Style";
import CameraModal from '../../components/CameraProntuary/CameraProntuary'
import { UserImage } from '../../components/UserImage/Style'
// import * as MediaLibrary xfrom 'expo-media-library'

// API importada
import api from '../../services/Service'

export const ViewPrescription = ({
    navigation,
    route
}) => {
    // CONSTS
    const [showCamera, setShowCamera] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [descricaoExame, setDescricaoExame] = useState("");

    const consulta = route.params.consulta;
    const receita = route.params.receita;



    // FUNCTIONS
    async function InserirExame() {
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
            console.log(descricaoExame);
        }).catch(error => {
            console.log(error);
        })
    }

    const GetExam = async () => {
        await api.get(`/Consultas/BuscarPorId?id=${consulta.id}`)
            .then(response => {
                console.log(response.data.exames[2].descricao);
            })
            .catch(error => {
                console.log(error);
            })
    }



    // EFFECTS
    useEffect(() => {
        if (photo) {
            console.log(photo);

            InserirExame();
        }
    }, [photo])

    useEffect(() => {
        GetExam();
    }, [])



    return (
<<<<<<< HEAD
        <Container>
<<<<<<< HEAD
            <ContainerUser
                contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
                showsVerticalScrollIndicator={false}>
=======
            <ContainerUser>
=======
            <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
>>>>>>> gustavo
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978
                <PhotoContainer>
                    <UserImage source={require('../../assets/UserDoctorBig.png')} />
                </PhotoContainer>

                <ContentProntuario>
                    <TitleUser>{consulta.medicoClinica.medico.idNavigation.nome}</TitleUser>
                    <SubTextQuick>{consulta.medicoClinica.medico.especialidade.especialidade1} - {consulta.medicoClinica.medico.crm}</SubTextQuick>
                </ContentProntuario>

                <LabelUser>Descrição da consulta</LabelUser>
<<<<<<< HEAD

                <PhotoBoxNull>
                    <TextPhotoBox>{consulta.descricao}</TextPhotoBox>
                </PhotoBoxNull>
=======
                <InputUser style={{ height: 121, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 30 }}
<<<<<<< HEAD
                    placeholder={`O paciente possuí uma infecção no ouvido.\nNecessário repouse de 2 dias e  \nacompanhamento médico constante`}
=======
                    placeholder={`O paciente possuí uma infecção no ouvido.\nNecessário repouse de 2 dias e \nacompanhamento médico constante`}
>>>>>>> gustavo
                    placeholderTextColor="#4E4B59"
                />
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978

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

<<<<<<< HEAD
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
=======
                    <PhotoButton style={{ height: 111, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 0 }}
                        placeholder="                  Nenhuma foto informada"
                        placeholderTextColor="#4E4B59"
<<<<<<< HEAD
                        onPress={() => setShowCameraModal()}
=======
                        onPress={() => setShowCamera()}
>>>>>>> gustavo
                    ><ButtonTitle style={{ fontFamily: 'MontserratAlternates_500Medium', fontSize: 14, color: '#4E4B59', textTransform: 'none', marginTop: 43, marginLeft: 80 }}>Nenhuma foto informada</ButtonTitle></PhotoButton>
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978
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
<<<<<<< HEAD

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
        </Container>
=======

                <InputUser style={{ height: 103, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 0, marginTop: 30 }}
                    placeholder={`Resultado do exame de sangue : \ntudo normal`}
                    placeholderTextColor="#4E4B59"
                />

                <CancelText onPress={() => navigation.replace("Main")}>Voltar</CancelText>

                <CameraModal
                    visible={showCamera}
                    setShowCamera={setShowCamera}
                    setPhotoUpload={setPhoto}
                />
            </ContainerUser>

>>>>>>> gustavo
    )
}