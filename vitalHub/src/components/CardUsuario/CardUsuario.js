import {
    Age,
    CancelButton,
    CancelTitle,
    CardContainer,
    Hour,
    HourButton,
    InfoConsulta,
    InfoPaciente,
    PatientContainer,
    PatientPhoto,
    TitleCard,
    Type
} from "./Style";
import { Clock } from "../Logo/Style";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";

export const CardUsuario = ({
    navigation,

    consulta,
    profile,
    
    onPressCancel,
    onPressAppointment,
    onPressCard,
}) => {

    const formatDate = moment(consulta.dataNascimento).format('DD/MM/YYYY')

    return (
        <CardContainer>
            <PatientContainer onPress={onPressCard}>
                <PatientPhoto source={{ uri: 'https://imgb.ifunny.co/images/bfc9bc11c482d1bc9f53bb14458fd0f848c34aed77d84390a234c890d70e7c7f_1.jpg' }} />

                <InfoConsulta>
                    <TitleCard>
                        {
                            // a conta é de um médico?
                            profile === "Medico" ?
                                // sim - retorne o nome do paciente
                                consulta.paciente.idNavigation.nome
                                :
                                // não - retorne o nome do médico
                                consulta.medicoClinica.medico.idNavigation.nome
                        }
                    </TitleCard>

                    <InfoPaciente>
                        <Age>
                            {
                                // a conta é de um médico?
                                profile === "Medico" ?
                                    // sim - retorne data de nascimento do paciente
                                    formatDate
                                    :
                                    // não - retorne o crm do médico
                                    consulta.medicoClinica.medico.crm
                            }
                        </Age>

                        <Type>{
                            // a conta é de um médico?
                            profile == "Medico" ?
                                // sim - o nível de prioridade é 1?
                                consulta.prioridade.prioridade == "1" ?
                                    // sim - retorne "Rotina"
                                    "Rotina"
                                    :
                                    // não - o nível de prioridade é 2?
                                    consulta.prioridade.prioridade == "2" ?
                                        // sim - retorne "Exame"
                                        "Exame"
                                        :
                                        // não - retorne "Urgência"
                                        "Urgência"
                                :
                                // não - retorne a especialidade do médico
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