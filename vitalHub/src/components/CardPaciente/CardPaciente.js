import { Image } from "react-native"
import { ButtonTitle, TitleUser } from "../Title/Style"
import { Age, CancelButton, CancelTitle, CardContainer, Hour, HourButton, InfoConsulta, InfoPaciente, PatientContainer, PatientPhoto, TitlePatient, Type } from "./Style"
import { Clock } from "../Logo/Style"
import { AntDesign } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { userDecodeToken } from "../../utils/Auth"
import api from "../../services/Service"
import moment from "moment"

export const CardPaciente = ({
    navigation,

    consulta,
    profile,

    onPressCancel,
    onPressAppointment,
    onPressNotification,
}) => {

    const formatDate = moment(consulta.dataNascimento).format('DD/MM/YYYY')

    return (
        <CardContainer>
            <PatientContainer onPress={onPressNotification}>
                <PatientPhoto source={{ uri: 'https://imgb.ifunny.co/images/bfc9bc11c482d1bc9f53bb14458fd0f848c34aed77d84390a234c890d70e7c7f_1.jpg' }} />

                <InfoConsulta>
                    <TitlePatient>{profile === "Medico" ?
                        consulta.paciente.idNavigation.nome
                        :
                        consulta.medicoClinica.medico.idNavigation.nome
                    }</TitlePatient>

                    <InfoPaciente>
                        <Age>
                            {profile === "Medico" ?
                                formatDate
                                :
                                consulta.medicoClinica.medico.crm
                            }
                        </Age>

                        <Type>{profile == "Medico" ?
                            consulta.prioridade.prioridade == "1" ?
                                "Rotina"
                                :
                                consulta.prioridade.prioridade == "2" ?
                                    "Exame"
                                    :
                                    "Urgência"
                            :
                            consulta.medicoClinica.medico.especialidade.especialidade1
                        }
                        </Type>
                    </InfoPaciente>

                    <HourButton situacao={consulta.situacao.situacao}>
                        <Clock situacao={consulta.situacao.situacao} />

                        <AntDesign
                            situacao={consulta.situacao.situacao}
                            name="clockcircle"
                            size={15}
                            color={consulta.situacao.situacao === "Pendente" ?
                                "#49B3BA"
                                :
                                "#8C8A97"}
                        />
                        <Hour situacao={consulta.situacao.situacao}>17:00</Hour>
                    </HourButton>
                </InfoConsulta>

                {
                    consulta.situacao.situacao == "Cancelado" ?
                        (
                            <>
                            </>
                        )
                        :
                        consulta.situacao.situacao == "Pendente" ?
                            <CancelButton onPress={onPressCancel}>
                                <CancelTitle situacao={consulta.situacao.situacao}>Cancelar</CancelTitle>
                            </CancelButton>
                            :
                            <CancelButton onPress={profile !== "Paciente" ?
                                onPressAppointment
                                :
                                () => navigation.replace("ViewPrescription")
                            }>
                                <CancelTitle situacao={consulta.situacao.situacao}>Ver prontuário</CancelTitle>
                            </CancelButton>
                }
            </PatientContainer>
        </CardContainer>
    )
}