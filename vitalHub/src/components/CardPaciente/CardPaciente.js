import { Age, CancelButton, CancelTitle, CardContainer, Hour, HourButton, InfoConsulta, InfoPaciente, PatientContainer, PatientPhoto, TitlePatient, Type } from "./Style"
import { Clock } from "../Logo/Style"
import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"
import moment from "moment"

export const CardPaciente = ({ navigation,
    situacao = "Pendente",
    onPressCancel,
    onPressAppointment,
    onPressNotification,
    roleUsuario,
    dataConsulta,
    prioridadeUsuario,
    usuarioConsulta,
    crmDoctor
}) => {

    const formatDate = moment(usuarioConsulta.dataNascimento).format('DD-MM-YYYY');
    const formatDay = moment(dataConsulta).format('DD-MM');
    const [profile, setProfile] = useState("Paciente");

    return (
        <CardContainer>
            <PatientContainer onPress={onPressNotification}>
                <PatientPhoto source={{ uri: 'https://github.com/Gustavoozz.png' }} />

                <InfoConsulta>
                    <TitlePatient>{usuarioConsulta.idNavigation.nome}</TitlePatient>

                    <InfoPaciente>
                        <Age>{roleUsuario == "Medico" ? formatDate : crmDoctor }</Age>
                        <Type>{roleUsuario == "Medico" ? prioridadeUsuario : "" }</Type>
                    </InfoPaciente>

                    <HourButton situacao={situacao}>
                        <Clock situacao={situacao}/>
                        <AntDesign situacao={situacao} name="clockcircle" size={15} color={situacao === "Pendente" ?
                            "#49B3BA"
                            :
                            "#8C8A97"}
                        />
                        <Hour situacao={situacao}>{formatDay}</Hour>
                    </HourButton>
                </InfoConsulta>

                {
                    situacao == "Cancelado" ? (
                        <>
                        </>
                    ) : situacao == "Pendente" ? (
                        <CancelButton onPress={onPressCancel}>
                            <CancelTitle situacao={situacao}>Cancelar</CancelTitle>
                        </CancelButton>
                    ) : (
                        <CancelButton onPress={profile !== "Paciente" ? onPressAppointment : () => navigation.replace("ViewPrescription")}>
                            <CancelTitle situacao={situacao}>Ver prontuário</CancelTitle>
                        </CancelButton>
                    )
                }
            </PatientContainer>
        </CardContainer>
    )
}