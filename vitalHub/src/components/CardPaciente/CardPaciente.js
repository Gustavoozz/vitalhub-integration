import { Age, CancelButton, CancelButtonProntuary, CancelTitle, CardContainer, Hour, HourButton, InfoConsulta, InfoPaciente, PatientContainer, PatientPhoto, TitlePatient, Type } from "./Style"
import { Clock } from "../Logo/Style"
import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"
import moment from "moment"

export const CardPaciente = ({ navigation,
    situacao = "pendente",
    onPressCancel,
    onPressAppointment,
    onPressNotification,
    roleUsuario,
    dataConsulta,
    prioridadeUsuario,
    usuarioConsulta,
    crmDoctor,
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
                    <TitlePatient>{usuarioConsulta.idNavigation.nome}</TitlePatient>

                    <InfoPaciente>
                        <Age>{roleUsuario == "Medico" ? `${ageInYears} anos` : ` CRM: ${crmDoctor}`}</Age>
                        <Type>{roleUsuario == "Medico" ? prioridadeUsuario == 1 ? "Rotina" : prioridadeUsuario == 2 ? "Exame" : "Emergência" : usuarioConsulta.especialidade.especialidade1 }</Type>
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
                    situacao == "Realizada" ? (                      
                        <CancelButtonProntuary onPress={roleUsuario == "Paciente" ? () => navigation.navigate("ViewPrescription") : () => navigation.navigate("Prontuario")}>
                            <CancelTitle situacao={situacao}>Ver prontuário</CancelTitle>
                        </CancelButtonProntuary>
    
                    ) : situacao == "Pendente" ? (
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