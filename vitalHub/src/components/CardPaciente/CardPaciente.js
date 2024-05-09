import { Image } from "react-native"
import { ButtonTitle, TitleUser } from "../Title/Style"
import { Age, CancelButton, CancelTitle, CardContainer, Hour, HourButton, InfoConsulta, InfoPaciente, PatientContainer, PatientPhoto, TitlePatient, Type } from "./Style"
import { Clock } from "../Logo/Style"
import { AntDesign } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { userDecodeToken } from "../../utils/Auth"
import api from "../../services/Service"

export const CardPaciente = ({ navigation,
    situacao = "pendente",
    onPressCancel,
    onPressAppointment,
<<<<<<< HEAD
    onPressNotification
=======
    onPressNotification,
    roleUsuario,
    dataConsulta,
    prioridadeUsuario,
    usuarioConsulta
>>>>>>> gustavo
}) => {

    const [profile, setProfile] = useState("Paciente")

    return (
        <CardContainer>
            <PatientContainer onPress={onPressNotification}>
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
                        <Age>{roleUsuario == "Medico" ? usuarioConsulta.dataNascimento(moment().format('YYYY-MM-DD') ) : usuarioConsulta.especialidade }</Age>
                        <Type>{prioridadeUsuario}</Type>
>>>>>>> gustavo
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
                        <Hour situacao={situacao}>17:00</Hour>
                    </HourButton>
                </InfoConsulta>

                {
                    situacao == "Cancelado" ? (
                        <>
                        </>
<<<<<<< HEAD
                    ) : situacao == "pendente" ? (
=======
                    ) : situacao == "Pendente" ? (
>>>>>>> gustavo
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