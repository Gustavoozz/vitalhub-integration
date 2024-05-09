import { Modal } from "react-native"
import { ModalButton, ModalContent } from "../CancelationModal/Style"
import { ModalPhoto, ModalText, ModelBack } from "./Style"
import { ButtonTitle, Title } from "../Title/Style"
import { CancelText } from "../Link/Style"
<<<<<<< HEAD
import { useNavigation } from "@react-navigation/native"
=======
>>>>>>> develop


export const AppointmentModal = ({ 
    consulta,
    roleUsuario,
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

<<<<<<< HEAD
    const navigation = useNavigation();
=======
        if (profile === "Medico") {
            navigation.replace(rota, { consultaId: consulta.id })
        } else {
            navigation.replace(rota, { clinicaId: consulta.medicoClinica.clinicaId });
        }
    }
>>>>>>> develop

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

<<<<<<< HEAD
            <InfoModalContainer>
            <ModalQuick style={{ color: '#4E4B59', marginTop: 0 }}>22 anos   gustavonascimento928@gmail.com</ModalQuick>
            </InfoModalContainer>
           
            <ModalButton onPress={() => navigation.replace("Prontuario")} style={{ marginTop: 15 }}>
            <ButtonTitle>Inserir Prontuário</ButtonTitle>
            </ModalButton>
=======
                                <ModalButton onPress={() => HandlePress("Prontuario")}>
                                    <ButtonTitle>Inserir Prontuário</ButtonTitle>
                                </ModalButton>
>>>>>>> develop

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