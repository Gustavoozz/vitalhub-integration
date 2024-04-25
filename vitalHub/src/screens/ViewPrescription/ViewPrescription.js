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
} from "./Style";
import CameraModal from '../../components/CameraProntuary/CameraProntuary'
// import * as MediaLibrary xfrom 'expo-media-library'

import api from "../../services/Service"

export const ViewPrescription = ({ navigation }) => {
    const [showCamera, setShowCamera] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [descricaoExame, setDescricaoExame] = useState("");


    async function ProfileLoad() {
        const token = await userDecodeToken();

        if (token !== null) {
            setTipoUsuario(token.role);

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


    async function InserirExame() {
        const formData = new FormData();

        formData.append("ConsultaId", prontuario.id);
        formData.append("Imagem", {
            uri : photo,
            name : `image.${photo.split(".").pop()}`,
            type : `image/${photo.split(".").pop()}`
        })

        await api.post(`/Exame/Cadastrar`, formData, {
            headers : {
                "Content-Type" : "multipart/form-data"
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
        ProfileLoad();
    }, [])


    useEffect(() => {
        if (photo) {
            console.log(photo);
            InserirExame();
        }
    }, [photo])


    return (
            <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
                <PhotoContainer>
                    <UserContainer source={require('../../assets/UserDoctorBig.png')} />
                </PhotoContainer>

                <ContentProntuario>
                    <TitleUser>Dr. Cláudio</TitleUser>
                    <SubTextQuick>Cliníco geral   CRM-15286</SubTextQuick>
                </ContentProntuario>

                <LabelUser>Descrição da consulta</LabelUser>
                <InputUser style={{ height: 121, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 30 }}
                    placeholder={`O paciente possuí uma infecção no ouvido.\nNecessário repouse de 2 dias e \nacompanhamento médico constante`}
                    placeholderTextColor="#4E4B59"
                />

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
                   
            {photo === null ? (
            <PhotoButton style={{ height: 111, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 0 }}/>
            ) : (
            <PhotoButton source={{ uri : photo }} style={{ height: 111, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 0 }}
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

                <OcrView>
                    <Text>{setDescricaoExame}</Text>
                </OcrView>

                <CancelText onPress={() => navigation.replace("MainDoctor")}>Voltar</CancelText>

                <CameraModal
                    visible={showCamera}
                    setShowCamera={setShowCamera}
                    setPhotoUpload={setPhoto}
                />
            </ContainerUser>

    )
}