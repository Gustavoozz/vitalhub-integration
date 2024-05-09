import { Age, CancelButton, CancelButtonProntuary, CancelTitle, CardContainer, Hour, HourButton, InfoConsulta, InfoPaciente, PatientContainer, PatientPhoto, TitlePatient, Type } from "./Style"
import { Clock } from "../Logo/Style"
import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"
import moment from "moment"


export const CardPaciente = ({ navigation,
    situacao = "pendente",
    onPressCancel = "Cancelada",
    onPressAppointment,
<<<<<<< HEAD
    onPressNotification
=======
    onPressNotification,
    roleUsuario,
    dataConsulta,
    prioridadeUsuario,
<<<<<<< HEAD
    usuarioConsulta,
    crmDoctor,
    appointmentId
=======
    usuarioConsulta
>>>>>>> gustavo
>>>>>>> origin/develop
}) => {

    const formatDate = moment(usuarioConsulta.dataNascimento).format('YYYY');
    const formatDay = moment(dataConsulta).format('DD/MM');
    const ageInYears = moment().diff(formatDate, 'Year');
    const [profile, setProfile] = useState("Paciente");

    return (
        <CardContainer>
            <PatientContainer onPress={roleUsuario == "Paciente" ? onPressNotification : onPressAppointment}>
                <PatientPhoto source={{ uri: 'https://github.com/Gustavoozz.png' }} />

                <InfoConsulta>
<<<<<<< HEAD
                    <TitlePatient>Gustavo Magalhães</TitlePatient>

                    <InfoPaciente>
                        <Age>19 anos</Age>
                        <Type>Cardiologist</Type>
=======
                    <TitlePatient>{usuarioConsulta.idNavigation.nome}</TitlePatient>

                    <InfoPaciente>
<<<<<<< HEAD
                        <Age>{roleUsuario == "Medico" ? `${ageInYears} anos` : ` CRM: ${crmDoctor}`}</Age>
                        <Type>{roleUsuario == "Medico" ? prioridadeUsuario == 1 ? "Rotina" : prioridadeUsuario == 2 ? "Exame" : "Emergência" : usuarioConsulta.especialidade.especialidade1}</Type>
=======
                        <Age>{roleUsuario == "Medico" ? usuarioConsulta.dataNascimento(moment().format('YYYY-MM-DD') ) : usuarioConsulta.especialidade }</Age>
                        <Type>{prioridadeUsuario}</Type>
>>>>>>> gustavo
>>>>>>> origin/develop
                    </InfoPaciente>

                    <HourButton situacao={situacao}>
                        <Clock situacao={situacao} />
<<<<<<< HEAD
                        <AntDesign situacao={situacao} name="clockcircle" size={15} color={situacao === "pendente" ?
=======
                        <AntDesign situacao={situacao} name="clockcircle" size={15} color={situacao === "Pendente" ?
>>>>>>> gustavo
                            "#49B3BA"
                            :
                            "#8C8A97"}
                        />
                        <Hour situacao={situacao}>{formatDay}</Hour>
                    </HourButton>
                </InfoConsulta>

                {
<<<<<<< HEAD
                    situacao == "Realizada" ? (
                        <CancelButtonProntuary onPress={roleUsuario == "Paciente" ? () => navigation.navigate('ViewPrescription', { appointmentId: appointmentId }) : () => navigation.navigate('ViewPrescription', { appointmentId: appointmentId })}>
                            <CancelTitle situacao={situacao} >Ver prontuário</CancelTitle>
                        </CancelButtonProntuary>

=======
                    situacao == "Cancelado" ? (
                        <>
                        </>
<<<<<<< HEAD
                    ) : situacao == "pendente" ? (
=======
>>>>>>> origin/develop
                    ) : situacao == "Pendente" ? (
>>>>>>> gustavo
                        <CancelButton onPress={onPressCancel}>
                            <CancelTitle situacao={situacao}>Cancelar</CancelTitle>
                        </CancelButton>
                    ) : (
                        <>
                        </>

                    )
                }
            </PatientContainer>
        </CardContainer>
    )
}