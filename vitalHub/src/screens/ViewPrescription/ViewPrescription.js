import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Container, ContainerUser, ContentProntuario, PhotoContainer } from '../../components/Container/Style'
import { InputUser, PhotoButton } from '../../components/Input/Style'

import { SubTextQuick } from '../../components/Text/Text'
import { ButtonTitle, LabelUser, TitleUser } from '../../components/Title/Style'

import { Text, View } from 'react-native'
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
    PhotoBoxNull,
    TextPhotoBox,
} from "./Style";
import CameraModal from '../../components/CameraProntuary/CameraProntuary'
import { UserImage } from '../../components/UserImage/Style'
// import * as MediaLibrary xfrom 'expo-media-library'

export const ViewPrescription = ({
    navigation,
    route
}) => {
    const [showCamera, setShowCamera] = useState(false);
    const [photo, setPhoto] = useState(null);

    const consulta = route.params.consulta;
    const receita = route.params.receita;

    return (
        <Container>
            <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
                <PhotoContainer>
                    <UserImage source={require('../../assets/UserDoctorBig.png')} />
                </PhotoContainer>

                <ContentProntuario>
                    <TitleUser>{consulta.medicoClinica.medico.idNavigation.nome}</TitleUser>
                    <SubTextQuick>{consulta.medicoClinica.medico.especialidade.especialidade1} - {consulta.medicoClinica.medico.crm}</SubTextQuick>
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
                            <PhotoBoxNull>
                                <TextPhotoBox>Tire sua foto</TextPhotoBox>
                            </PhotoBoxNull>
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
                    <Text
                        style={{ color: "#4E4B59" }}
                    ></Text>
                </View>

                <CancelText onPress={() => navigation.replace("Main")}>Voltar</CancelText>

                <CameraModal
                    visible={showCamera}
                    setShowCamera={setShowCamera}
                    setPhotoUpload={setPhoto}
                />
            </ContainerUser>
        </Container>
    )
}