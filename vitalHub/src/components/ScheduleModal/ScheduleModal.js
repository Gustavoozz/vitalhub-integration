import { Modal } from "react-native"
import { ChooseAppointment, InfoSchedule, ScheduleContent } from "./Style"
import { ButtonTitle, LabelUser, Title } from "../Title/Style"
import { Input } from "../Input/Style"
import { Button } from "../Button/Style"
import { CancelText } from "../Link/Style"
import { useState } from "react"
import { BtnAppointmentType } from "../BtnAppointmentType/BtnAppointmentType"
import { useNavigation } from '@react-navigation/native'

export const ScheduleModal = ({
    visible,
    setShowModalSchedule,
    ...rest
}) => {
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

                    <CancelText onPress={() => setShowModalSchedule(false)}>Cancelar</CancelText>


                </InfoSchedule>
            </ScheduleContent>
        </Modal>


    )
}
