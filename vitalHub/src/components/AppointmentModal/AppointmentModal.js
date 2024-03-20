import { Modal } from "react-native"
import { ModalButton, ModalContent, PatientModal } from "../CancelationModal/Style"
import { InfoModalContainer, PatientModalPhoto } from "./Style"
import { ButtonTitle, Title } from "../Title/Style"
import { ModalQuick, SubTextQuick } from "../Text/Text"
import { CancelText } from "../Link/Style"
import { useState } from "react"


export const AppointmentModal = ({
    navigation,
    visible,
    setShowModalAppointment,
    ...rest
}) => {



    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="slide">
            <PatientModal>
            <ModalContent>

            <PatientModalPhoto source={{ uri: 'https://github.com/Gustavoozz.png' }}/>

            <Title style={{ marginTop: 20 }}>Gustavo Magalhães</Title>

            {/* { situacao == 'cancelado' ? (
                <></>
            )
            
            } */}
            <InfoModalContainer>
            <ModalQuick style={{ color: '#4E4B59', marginTop: 0 }}>22 anos   gustavonascimento928@gmail.com</ModalQuick>
            </InfoModalContainer>
           
            <ModalButton onPress={() => navigation.navigate("Prontuario")} style={{ marginTop: 15 }}>
            <ButtonTitle>Inserir Prontuário</ButtonTitle>
            </ModalButton>

            <CancelText style={{ marginBottom: 10 }} onPress={() => setShowModalAppointment(false)}>Cancelar</CancelText>

            </ModalContent>
            </PatientModal>
        </Modal>
    )
}