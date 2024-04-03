import { Modal } from "react-native"
import { ModalDoctorPhoto } from "../Logo/Style"
import { ButtonTitle, Title } from "../Title/Style"
import { ModalButton, ModalContent, ModalText, PatientModal } from "./Style"
import { CancelText } from "../Link/Style"
import { useNavigation } from '@react-navigation/native'

export const NotificationModal = ({
    situacao,
    consulta,

    visible,
    setShowModalNotification,
    ...rest
}) => {
    // STATES
    const navigation = useNavigation();

    // FUNCTIONS
    const HandlePress = (rota) => {
        // fecha a modal
        setShowModalNotification(false);

        // acessa a rota passando o id entre as navegações
        navigation.replace(rota, { clinicaId: consulta.medicoClinica.clinicaId })
    }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="slide">
            <PatientModal>
                <ModalContent>
                    <ModalDoctorPhoto
                        source={{ uri: 'https://github.com/Gustavoozz.png ' }}
                    />
                    <Title style={{ marginTop: 20 }}>Dr. Gustavo</Title>
                    <ModalText style={{ color: '#5F5C6B', fontSize: 14 }}>Cliníco geral    CRM-15286</ModalText>

                    <ModalButton onPress={() => HandlePress("Localization")}>
                        <ButtonTitle>Ver Local da Consulta</ButtonTitle>
                    </ModalButton>

                    <CancelText onPress={() => setShowModalNotification(false)}>Cancelar</CancelText>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}
