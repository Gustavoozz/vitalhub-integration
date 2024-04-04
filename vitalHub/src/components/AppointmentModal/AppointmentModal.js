import { Modal } from "react-native"
import { ModalButton, ModalContent, PatientModal } from "../CancelationModal/Style"
import { InfoModalContainer, PatientModalPhoto } from "./Style"
import { ButtonTitle, Title } from "../Title/Style"
import { ModalQuick } from "../Text/Text"
import { CancelText } from "../Link/Style"
import { useState } from "react"


export const AppointmentModal = ({
    situacao,
    consulta,

    navigation,
    visible,
    setShowModalAppointment,
    ...rest
}) => {
    // FUNCTIONS
    const HandlePress = (rota) => {
        setShowModalAppointment(false);

        navigation.replace(rota, { clinicaId: consulta.medicoClinica.clinicaId })
    }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="slide">
            <PatientModal>
                <ModalContent>

                    <PatientModalPhoto source={{ uri: 'https://github.com/Gustavoozz.png' }} />

                    <Title>Gustavo Magalhães</Title>

                    <InfoModalContainer>
                        <ModalQuick>22 anos   gustavonascimento928@gmail.com</ModalQuick>
                    </InfoModalContainer>

                    <ModalButton onPress={() => navigation.navigate("Prontuario")}>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </ModalButton>

                    <CancelText style={{ marginBottom: 10 }} onPress={() => setShowModalAppointment(false)}>Cancelar</CancelText>

                </ModalContent>
            </PatientModal>
        </Modal>
    )
}