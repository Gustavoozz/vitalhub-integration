import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Container, ContainerUser, ContentProntuario, PhotoContainer } from '../../components/Container/Style'
import { InputUser, OcrView, PhotoButton } from '../../components/Input/Style'

import { SubTextQuick } from '../../components/Text/Text'
import { ButtonTitle, LabelUser, TitleUser } from '../../components/Title/Style'
import { UserContainer } from '../../components/UserContainer/Style'

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
} from "./Style";
import CameraModal from '../../components/CameraProntuary/CameraProntuary'
// import * as MediaLibrary xfrom 'expo-media-library'

import api from "../../services/Service"
import { userDecodeToken } from '../../utils/Auth'
import { useRoute } from '@react-navigation/native'

export const ViewPrescription = ({ navigation, route }) => {
    const [showCamera, setShowCamera] = useState(false);
    const [photo, setPhoto] = useState(null);

    const [descricaoExame, setDescricaoExame] = useState("");
    const [consultaInfo, setConsultaInfo] = useState([])
    const [profile, setProfile] = useState([])

    const { appointmentId } = route.params;

    async function ProfileLoad() {
        const token = await userDecodeToken();

        if (token !== null) {
            setTipoUsuario(token.role);
            setProfile(token)
            await UserLoad(token);
        }
    }



    async function UserLoad(token) {
        const url = (token.role == 'Medico' ?
            "Medicos"
            :
            "Pacientes"
        )
        await api.get(`/${url}/BuscarPorId?id=${token.user}`)
            .then(response => {
                setUser(response.data)

                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // async function GetAppointmentById() {
    //     const url = (profile.role == 'Paciente' ? "Pacientes" : "Medicos")

    //     console.log(`/${url}/BuscarPorData?data=${dataConsultaCaralho}&id=${profile.user}`);
    //     await api.get(`/${url}/BuscarPorData?data=${dataConsultaCaralho}&id=${profile.user}`)
    //     .then(response => {
    //         setConsultas(response.data)
    //         console.log(consultas)

    //         // console.log(response.data);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }




    // async function GetAppointmentById() {
    //     const url = (profile.role == 'Paciente' ? "Pacientes" : "Medicos")

    //     console.log(`/Consultas/BuscarPorId?id=${appointmentId}`);
    //     const response = await api.get(`/Consultas/BuscarPorId?id=${appointmentId}`)
    //         .then(response => {
    //             setConsultaInfo(response.data)
    //             console.log(consultas)

    //             // console.log(response.data);
    //         }).catch(error => {
    //             console.log(error);
    //         })
    // }


    async function InserirExame() {
        const formData = new FormData();

        formData.append("ConsultaId",);
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

            setDescricaoExame(descricaoExame + "\n" + response.data.descricao)
            console.log(setDescricaoExame);
        }).catch(error => {
            console.log(error);
        })
    }



    useEffect(() => {
        // requestGalery();
        GetAppointmentById();
        ProfileLoad();
    }, [])


    useEffect(() => {
        if (photo) {
            console.log(photo);
            InserirExame();
        }
    }, [photo])


    return (
<<<<<<< HEAD
        <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <PhotoContainer>
                <UserContainer source={require('../../assets/UserDoctorBig.png')} />
            </PhotoContainer>
=======
<<<<<<< HEAD
        <Container>
            <ContainerUser>
=======
            <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
>>>>>>> gustavo
                <PhotoContainer>
                    <UserContainer source={require('../../assets/UserDoctorBig.png')} />
                </PhotoContainer>
>>>>>>> origin/develop

            <ContentProntuario>
                <TitleUser>Dr. Cláudio</TitleUser>
                <SubTextQuick>Cliníco geral   CRM-15286</SubTextQuick>
            </ContentProntuario>

<<<<<<< HEAD
            <LabelUser>Descrição da consulta</LabelUser>
            <InputUser style={{ height: 121, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 30 }}
                placeholder={consultaInfo.descricao}
                placeholderTextColor="#4E4B59"
                value={consultaInfo.descricao}
            />
=======
                <LabelUser>Descrição da consulta</LabelUser>
                <InputUser style={{ height: 121, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 30 }}
<<<<<<< HEAD
                    placeholder={`O paciente possuí uma infecção no ouvido.\nNecessário repouse de 2 dias e  \nacompanhamento médico constante`}
=======
                    placeholder={`O paciente possuí uma infecção no ouvido.\nNecessário repouse de 2 dias e \nacompanhamento médico constante`}
>>>>>>> gustavo
                    placeholderTextColor="#4E4B59"
                />
>>>>>>> origin/develop

            <LabelUser>Diagnóstico do paciente</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 0 }}
                placeholder="Infecção no ouvido"
                placeholderTextColor="#4E4B59"
            />

            <LabelUser>Prescrição médica</LabelUser>
            <InputUser style={{ height: 133, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 0 }}
                placeholder={`Medicamento: Advil\nDosagem: 50 mg\nFrequência: 3 vezes ao dia\nDuração: 3 dias`}
                placeholderTextColor="#4E4B59"
            />

            <View style={{ width: '100%', alignItems: 'center' }}>
                <LabelUser>Exames médicos</LabelUser>

<<<<<<< HEAD
                {photo === null ? (
                    <PhotoButton style={{ height: 200, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 0 }} />
                ) : (
                    <PhotoButton source={{ uri: photo }} style={{ height: 200, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 0 }}
                    />
                )
                }
            </View>
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
                </View>
>>>>>>> origin/develop


            <FlexibleBox>
                <ButtonTakePhoto onPress={() => setShowCamera(true)}>
                    <MaterialCommunityIcons name="camera-plus-outline" size={24} color="#FBFBFB" />

<<<<<<< HEAD
                    <ButtonTakePhotoText>Enviar</ButtonTakePhotoText>
                </ButtonTakePhoto>
=======
                    <ButtonCancelPhoto onPress={() => setPhoto(null)}>
                        <ButtonCancelPhotoText>Cancelar</ButtonCancelPhotoText>
                    </ButtonCancelPhoto>
                </FlexibleBox>
<<<<<<< HEAD

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
        </Container>
=======
>>>>>>> origin/develop

                <ButtonCancelPhoto onPress={() => setPhoto(null)}>
                    <ButtonCancelPhotoText>Cancelar</ButtonCancelPhotoText>
                </ButtonCancelPhoto>
            </FlexibleBox>

            {/* Ocr description: */}
            <OcrView>
                <Text>{descricaoExame}</Text>
            </OcrView>

            <CancelText onPress={() => navigation.replace("MainDoctor")}>Voltar</CancelText>

            <CameraModal
                visible={showCamera}
                setShowCamera={setShowCamera}
                setPhotoUpload={setPhoto}
            />
        </ContainerUser>

>>>>>>> gustavo
    )
}