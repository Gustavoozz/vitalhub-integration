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
import { Text } from "react-native";

export const CardUsuario = ({
    navigation,

    consulta,
    profile,

    onPressCancel,
    onPressAppointment,
    onPressCard,
}) => {

    return (
        <CardContainer>
            <PatientContainer onPress={onPressCard}>
                <PatientPhoto source={{
                    uri: profile === "Medico" ?
                        consulta.paciente.idNavigation.foto
                        :
                        consulta.medicoClinica.medico.idNavigation.foto
                }} />

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
                                    moment(consulta.paciente.dataNascimento).format('DD/MM/YYYY')
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
                        <Hour
                            situacao={consulta.situacao.situacao}
                        >
                            {moment(consulta.dataConsulta).format("HH:mm")}
                        </Hour>
                    </HourButton>
                </InfoConsulta>

                {
                    consulta.situacao.situacao == "Cancelada" ?
                        <CancelTitle>Cancelada</CancelTitle>
                        :
                        consulta.situacao.situacao == "Pendente" ?
                            <CancelButton
                                style={{
                                    padding: 10,
                                    borderRadius: 10,
                                    backgroundColor: '#C81D25',
                                }}
                                onPress={onPressCancel}>
                                <CancelTitle

                                    style={{
                                        color: '#FFF'
                                    }}
                                    situacao={consulta.situacao.situacao}>Cancelar</CancelTitle>
                            </CancelButton>
                            :
                            <CancelButton
                                style={{
                                    padding: 10,
                                    borderRadius: 10,
                                    backgroundColor: '#344F8F',
                                }}
                                onPress={
                                    () => navigation.replace("ViewPrescription", {
                                        consulta: consulta,
                                        receita: consulta.receita,
                                        profile: profile,
                                    })
                                }>
                                <CancelTitle
                                    style={{
                                        color: '#FFF'
                                    }}
                                    situacao={consulta.situacao.situacao}>Ver prontuário</CancelTitle>
                            </CancelButton>
                }
            </PatientContainer>
        </CardContainer>
    )
}