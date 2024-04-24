import { Modal } from "react-native"
import { ModalButton, ModalContent } from "../CancelationModal/Style"
import { ModalPhoto, ModalText, ModelBack } from "./Style"
import { ButtonTitle, Title } from "../Title/Style"
import { CancelText } from "../Link/Style"


export const AppointmentModal = ({
    navigation,
    visible,

    profile,
    situacao,
    consulta,

    setShowModalAppointment,

    ...rest
}) => {
    // FUNCTIONS
    const HandlePress = (rota) => {
        setShowModalAppointment(false);

        if (profile === "Medico") {
            navigation.replace(rota, { consultaId: consulta.id })
        } else {
            navigation.replace(rota, { clinicaId: consulta.medicoClinica.clinicaId });
        }
    }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="slide">
            <ModelBack>
                {
                    profile === "Medico" ?
                        <>
                            <ModalContent>
                                <ModalPhoto source={{ uri: 'https://github.com/Gustavoozz.png' }} />

                                <Title>{consulta.paciente.idNavigation.nome}</Title>

                                <ModalText> {consulta.paciente.idNavigation.email}</ModalText>

                                <ModalButton onPress={() => HandlePress("Prontuario")}>
                                    <ButtonTitle>Inserir Prontuário</ButtonTitle>
                                </ModalButton>

                                <CancelText style={{ marginBottom: 10 }} onPress={() => setShowModalAppointment(false)}>Cancelar</CancelText>
                            </ModalContent></>
                        :
                        <ModalContent>

                            <ModalPhoto source={{ uri: 'https://github.com/Gustavoozz.png ' }} />

                            <Title>{consulta.medicoClinica.medico.idNavigation.nome}</Title>

                            <ModalText>{consulta.medicoClinica.medico.especialidade.especialidade1} - {consulta.medicoClinica.medico.crm}</ModalText>

                            <ModalButton onPress={() => HandlePress("Localization")}>
                                <ButtonTitle>Ver Local da Consulta</ButtonTitle>
                            </ModalButton>

                            <CancelText onPress={() => setShowModalAppointment(false)}>Cancelar</CancelText>
                        </ModalContent>
                }
            </ModelBack>
        </Modal>
    )
}