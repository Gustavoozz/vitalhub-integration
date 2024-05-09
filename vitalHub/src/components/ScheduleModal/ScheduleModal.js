import { Modal, View } from "react-native"
import { ChooseAppointment, InfoSchedule, ScheduleContent } from "./Style"
import { ButtonTitle, LabelBox, LabelUser, Title } from "../Title/Style"
import { Input } from "../Input/Style"
import { Button, ButtonUnusable } from "../Button/Style"
import { CancelText } from "../Link/Style"
import { useEffect, useState } from "react"
import { BtnAppointmentType } from "../BtnAppointmentType/BtnAppointmentType"
import api from "../../services/Service"
import { UserDecodeToken } from "../../utils/Auth"
import Picker from "react-native-picker-select"

export const ScheduleModal = ({
    navigation,
    visible,
    setShowModalSchedule,
    ...rest
}) => {
<<<<<<< HEAD
    const [agendamento, setAgendamento] = useState(null)
    const [statusType, setStatusType] = useState("Rotina")
    const navigation = useNavigation();

    async function handleContinue() {
        await setShowModalSchedule(false);

        navigation.replace("ClinicSelect", { agendamento: agendamento })
    }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="slide">
            <ScheduleContent>
                <InfoSchedule>

                    <Title>Agendar consulta</Title>

                    <LabelUser style={{ marginRight: 30 }}>Informe o nível da consulta:</LabelUser>
                    <ChooseAppointment>

                        <BtnAppointmentType style={{ width: '200', borderColor: '#60BFC5' }}
                            textButton={"Rotina"}
                            clickButton={statusType === "Rotina"}
                            // onPress={() => setStatusType("Rotina")}
                            // Status - 1:
                            onPress={() => setAgendamento({
                                ...agendamento, // Manter as informacoes que ja existem dentro do State.
                                prioridadeId : "C13508B5-2E11-4259-B599-AE9427AB22D4",
                                prioridadeLabel: "Rotina"
                            })}
                        />

                        <BtnAppointmentType
                            textButton={"Exame"}
                            clickButton={statusType === "Exame"}
                            // onPress={() => setStatusType("exame")}
                            // Status - 2:
                            onPress={() => setAgendamento({
                                ...agendamento, // Manter as informacoes que ja existem dentro do State.
                                prioridadeId : "1F1267CB-D3F9-4E16-88F7-F65809E10689",
                                prioridadeLabel: "Exame"
                            })}
                                
                        />

                        <BtnAppointmentType
                            textButton={"Urgência"}
                            clickButton={statusType === "Urgencia"}
                            // onPress={() => setStatusType("urgencia")}
                            // Status - 3:
                            onPress={() => setAgendamento({
                                ...agendamento, // Manter as informacoes que ja existem dentro do State.
                                prioridadeId : "70613C62-BC0F-47DB-85A5-9989357DA535",
                                prioridadeLabel: "Urgencia"
                            })}
                                
                        />

                    </ChooseAppointment>


                    <LabelUser style={{ marginRight: 30, marginBottom: 10 }}>Informe a localização desejada:</LabelUser>
                    <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold', width: '100%' }}
                        placeholder="Informe a localização"
                        value={ agendamento ? agendamento.localizacao : null}
                        onChangeText={(txt) => setAgendamento({
                            ...agendamento,
                            localizacao: txt
                        })}
                    />

                    <Button
                        // onPress={() => navigation.replace("ClinicSelect")}
                        onPress={() => handleContinue()}
                        style={{ width: '100%' }}
                    >
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </Button>
=======
    // CONSTS
    const [statusType, setStatusType] = useState(null); // tipo de situação para os botões

    const [prioridade, setPrioridade] = useState(""); // nome da prioridade

    const [prioridadeId, setPrioridadeId] = useState(""); // id da prioridade
    const [pacienteId, setPacienteId] = useState(""); // id do usuário

    const [cidade, setCidade] = useState(null); // cidade
    const [arrayCity, setArrayCity] = useState([]); // dados do array da cidade



    // FUNCTIONS
    const ProfileLoad = async () => {
        const token = await UserDecodeToken();
>>>>>>> develop

        if (token) {
            setPacienteId(token.user)
        }
    }

    const HandleSelectPrioridade = (rota) => {
        if (statusType != null) {
            setShowModalSchedule(false);

            navigation.replace(rota, {
                prioridadeId: prioridadeId,
                pacienteId: pacienteId,
                prioridade: prioridade,
                cidade: cidade
            })
        }
    }

    const SelectPrioridade = (prioridade) => {
        setStatusType(null);

        setPrioridadeId(null);

        if (prioridade == "rotina") {
            setStatusType("rotina");

            setPrioridade("Rotina");

            setPrioridadeId("E0AF86A4-23BD-4EAF-BB86-D2E40E221836");
        } else if (prioridade == "exame") {
            setStatusType("exame");

            setPrioridade("Exame");

            setPrioridadeId("02BE1107-9A16-4EB8-80A2-2D0D018C17B6");
        } else {
            setStatusType("urgencia");

            setPrioridade("Urgência");

            setPrioridadeId("4C0A23A2-929E-4CDE-AAF5-BB4FDC043242");
        }
    }

    const SelectCities = async () => {
        await api.get(`/Clinica/ListarTodas`)
            .then(response => {
                console.log(response.data);
                response.data.forEach((clinica) => {
                    setArrayCity((prevArray) => [
                        ...prevArray,
                        {
                            label: clinica.endereco.cidade, value: clinica.endereco.cidade
                        }
                    ])
                })

            })
            .catch(error => {
                console.log(error);
            })
    }



    // EFFECTS
    useEffect(() => {
        ProfileLoad();

        SelectCities();
    }, [])



    if (arrayCity != null) {
        return (
            <Modal {...rest} visible={visible} transparent={true} animationType="slide">
                <ScheduleContent>
                    <InfoSchedule>

                        <Title>Agendar consulta</Title>

                        <LabelBox>
                            <LabelUser>Informe o nível da consulta:</LabelUser>

                            <ChooseAppointment>
                                <BtnAppointmentType
                                    textButton={"Rotina"}
                                    clickButton={statusType === "rotina"}
                                    onPress={() => SelectPrioridade("rotina")}
                                />

                                <BtnAppointmentType
                                    textButton={"Exame"}
                                    clickButton={statusType === "exame"}
                                    onPress={() => SelectPrioridade("exame")}
                                />

                                <BtnAppointmentType
                                    textButton={"Urgência"}
                                    clickButton={statusType === "urgencia"}
                                    onPress={() => SelectPrioridade("urgencia")}
                                />
                            </ChooseAppointment>
                        </LabelBox>


                        <LabelBox>
                            <LabelUser style={{ marginRight: 30, marginBottom: 10 }}>Informe a localização desejada:</LabelUser>

                            <View style={{ width: "100%", marginTop: 10, borderWidth: 2, borderRadius: 8, borderColor: "#34898F" }}>
                                <Picker
                                    placeholder={{
                                        label: '-----',
                                        value: null,
                                        color: '#34898F'
                                    }}
                                    onValueChange={(value) => setCidade(value)}
                                    items={arrayCity}
                                />
                            </View>

                            {
                                statusType != null && cidade != null ?
                                    <Button
                                        onPress={() => HandleSelectPrioridade("ClinicSelect")}
                                        style={{ width: '100%' }}
                                    >
                                        <ButtonTitle>Confirmar</ButtonTitle>
                                    </Button>
                                    :
                                    <ButtonUnusable style={{ width: '100%' }} >
                                        <ButtonTitle>Confirmar</ButtonTitle>
                                    </ButtonUnusable>
                            }

                        </LabelBox>

                        <CancelText onPress={() => { setShowModalSchedule(false), setStatusType(null) }}>Cancelar</CancelText>
                    </InfoSchedule>
                </ScheduleContent>
            </Modal>


        )
    }
}
