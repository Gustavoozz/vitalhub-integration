import { Modal } from "react-native"
import { ButtonTitle, Title } from "../Title/Style"

import { CancelText } from "../Link/Style"
import { ModalButton, ModalContent, ModalText, ModalTextBig, ModalTextMini, PatientModal } from "../NotificationModal/Style"
import { useNavigation } from '@react-navigation/native'

export const SchedulingModal = ({
    visible,
    setShowModalScheduling,
    ...rest
}) => {

    const navigation = useNavigation();

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>

                    <Title>Agendar consulta</Title>
                    <ModalText>Consulte os dados selecionados para a sua consulta</ModalText>

                    <ModalTextBig>Data da consulta</ModalTextBig>
                    <ModalTextMini>1 de Novembro de 2023</ModalTextMini>

                    <ModalTextBig>Médic@ da consulta</ModalTextBig>
                    <ModalTextMini></ModalTextMini>
                    <ModalTextMini></ModalTextMini>

                    <ModalTextBig>Local da consulta</ModalTextBig>
                    <ModalTextMini>São Paulo, SP</ModalTextMini>

                    <ModalTextBig>Tipo da consulta</ModalTextBig>
                    <ModalTextMini>Rotina</ModalTextMini>

                    <ModalButton onPress={() => navigation.replace("Main")}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <CancelText onPress={() => setShowModalScheduling(false)}>Cancelar</CancelText>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}