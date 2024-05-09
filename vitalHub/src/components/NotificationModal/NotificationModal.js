import { Modal } from "react-native"
import { ModalDoctorPhoto } from "../Logo/Style"
import { ButtonTitle, Title } from "../Title/Style"
import { ModalButton, ModalContent, ModalText, PatientModal } from "./Style"
import { CancelText } from "../Link/Style"
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from "react"
import api from "../../services/Service"

export const NotificationModal = ({
    consulta,
    roleUsuario,
    visible,
    situacao,
    setShowModalNotification,
    ...rest
}) => {

    const [doctorInfo, setDoctorInfo] = useState("")

    function handlePress(rota) {
        navigation.replace(rota, {clinicaId : consulta.medicoClinica.clinicaId})
    }

    async function GetDoctor() {
        await api.get('/Medicos')
        .then( response => {
           setDoctorInfo(response.data)
        }). catch( error => {
           console.log(error)
        })
     }
  
     useEffect(() => {
        GetDoctor();
     }, []) 

    const navigation = useNavigation();

    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="slide">
            <PatientModal>
                <ModalContent>
                    <ModalDoctorPhoto
                    source={{ uri: 'https://github.com/Gustavoozz.png '}}
                    />
                    <Title style={{ marginTop: 20 }}>Dr. Gustavo</Title>
                    <ModalText style={{ color: '#5F5C6B', fontSize: 14 }}>Cliníco geral    CRM-15286</ModalText>

            <ModalButton onPress={() => navigation.replace("Localization")}>
                 <ButtonTitle>Ver Local da Consulta</ButtonTitle>
            </ModalButton>
    

                    <CancelText onPress={() => setShowModalNotification(false)}>Cancelar</CancelText>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}
