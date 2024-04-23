import { Modal } from "react-native"
import { ButtonTitle, Title } from "../Title/Style"
import { CancelText } from "../Link/Style"
import {
    ModelBack,
    ModalContent,
    ModalText,
    ModalTextBig,
    ModalTextMini
} from "./Style"
import { Button } from "../Button/Style"

export const SchedulingModal = ({
    visible,
    setShowModalScheduling,
    navigation,
    ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ModelBack>
                <ModalContent>

                     <Title>Agendar consulta</Title>
                    <ModalText>Consulte os dados selecionados para a sua consulta</ModalText>

                    <ModalTextBig>Data da consulta</ModalTextBig>
                    <ModalTextMini>1 de Novembro de 2023</ModalTextMini>

                    <ModalTextBig>Médic@ da consulta</ModalTextBig>
                    <ModalTextMini>AA</ModalTextMini>
                    <ModalTextMini>AA</ModalTextMini>

                    <ModalTextBig>Local da consulta</ModalTextBig>
                    <ModalTextMini>São Paulo, SP</ModalTextMini>

                    <ModalTextBig>Tipo da consulta</ModalTextBig>
                    <ModalTextMini>Rotina</ModalTextMini>

                    <Button onPress={() => navigation.replace("Main")}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </Button>

                    <CancelText onPress={() => setShowModalScheduling(false)}>Cancelar</CancelText>
                </ModalContent>
            </ModelBack>
        </Modal>
    )
}