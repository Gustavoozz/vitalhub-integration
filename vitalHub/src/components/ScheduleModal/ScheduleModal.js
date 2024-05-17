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
                                        color: '#34898F',
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
