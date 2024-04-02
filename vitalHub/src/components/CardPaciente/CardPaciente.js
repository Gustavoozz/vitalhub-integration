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
    onPressNotification,
    roleUsuario,
    dataConsulta,
    prioridade,
    usuarioConsulta
}) => {

    const [profile, setProfile] = useState("Paciente")

    return (
        <CardContainer>
            <PatientContainer onPress={onPressNotification}>
                <PatientPhoto source={{ uri: 'https://github.com/Gustavoozz.png' }} />

                <InfoConsulta>
                    <TitlePatient>{usuarioConsulta.idNavigation.nome}</TitlePatient>

                    <InfoPaciente>
                        <Age>{roleUsuario == "Medico" ? '22 anos' : usuarioConsulta.especialidade }</Age>
                        <Type>Rotina</Type>
                    </InfoPaciente>

                    <HourButton situacao={situacao}>
                        <Clock situacao={situacao} />
                        <AntDesign situacao={situacao} name="clockcircle" size={15} color={situacao === "pendente" ?
                            "#49B3BA"
                            :
                            "#8C8A97"}
                        />
                        <Hour situacao={situacao}>17:00</Hour>
                    </HourButton>
                </InfoConsulta>

                {
                    situacao == "cancelado" ? (
                        <>
                        </>
                    ) : situacao == "pendente" ? (
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