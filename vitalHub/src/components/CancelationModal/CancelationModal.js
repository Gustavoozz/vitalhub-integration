import { Modal } from "react-native"
import { ButtonTitle, Title } from "../Title/Style"
import { ModalButton, ModalContent, ModalText, PatientModal } from "./Style"
import { CancelText } from "../Link/Style"
import * as Notifications from "expo-notifications"
import api from "../../services/Service"

Notifications.requestPermissionsAsync()

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true
    })
})

export const CancelationModal = ({
    visible,
    setShowModalCancel,
    consulta,
    ...rest
}) => {
    // CONSTS
    const status = "Cancelada";


    // FUNCTIONS
    const HandleCallNotifications = async () => {
        const { status } = await Notifications.getPermissionsAsync()

        if (status !== "granted") {
            alert("As notificações do usuário não estão ativas!")
            return;
        }

        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Sua consulta foi cancelada!",
                body: "Consulta cancelada..."
            },
            trigger: null
        });
    }

    const Cancelamento = async () => {
        await api.put(`/Consultas/Status?idConsulta=${consulta.id}&status=${status}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        HandleCallNotifications();

        setShowModalCancel(false)
    }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>

                    <Title>Cancelar consulta</Title>
                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    <ModalButton onPress={() => Cancelamento()}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <CancelText onPress={() => setShowModalCancel(false)}>Cancelar</CancelText>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}