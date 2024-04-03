import { Image } from "react-native"
import { ButtonTitle, TitleUser } from "../Title/Style"
import { Age, CancelButton, CancelTitle, CardContainer, Hour, HourButton, InfoConsulta, InfoPaciente, PatientContainer, PatientPhoto, TitlePatient, Type } from "./Style"
import { Clock } from "../Logo/Style"
import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"

export const CardPaciente = ({ 
    navigation,
    situacao = "pendente",
    onPressCancel,
    onPressAppointment,
    onPressNotification
}) => {

    const [profile, setProfile] = useState("Paciente")

    return (
        <CardContainer>
            <PatientContainer onPress={onPressNotification}>
                <PatientPhoto source={{ uri: 'https://github.com/Gustavoozz.png' }} />

                <InfoConsulta>
                    <TitlePatient>Gustavo Magalhães</TitlePatient>

                    <InfoPaciente>
                        <Age>19 anos</Age>
                        <Type>Cardiologist</Type>
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