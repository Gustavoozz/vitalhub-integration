import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Container, ContainerUser, ContentProntuario, PhotoContainer } from '../../components/Container/Style'
import { InputUser, PhotoButton } from '../../components/Input/Style'

import { SubTextQuick } from '../../components/Text/Text'
import { ButtonTitle, LabelUser, TitleUser } from '../../components/Title/Style'
import { UserContainer } from '../../components/UserContainer/Style'

import { View } from 'react-native'
import { SendPhotoButton } from '../../components/Button/Style'
import { CancelText } from '../../components/Link/Style'

import CameraProntuary from "../../components/CameraProntuary/CameraProntuary"
import { useState } from 'react'
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

export const ViewPrescription = ({ navigation }) => {
    const [showCamera, setShowCamera] = useState(false);
    const [photo, setPhoto] = useState(null);

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
                    <FontAwesome6 name="file-arrow-down" size={24} color="black" style={{ position: 'absolute', top: 108.1, zIndex: 1, right: 300 }} />

                    <PhotoButton style={{ height: 111, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 0 }}
                        placeholder="                  Nenhuma foto informada"
                        placeholderTextColor="#4E4B59"
                        onPress={() => setShowCamera()}
                    ><ButtonTitle style={{ fontFamily: 'MontserratAlternates_500Medium', fontSize: 14, color: '#4E4B59', textTransform: 'none', marginTop: 43, marginLeft: 80 }}>Nenhuma foto informada</ButtonTitle></PhotoButton>
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

    )
}