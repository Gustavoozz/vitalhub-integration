import { Modal } from "react-native"
import { ChooseAppointment, InfoSchedule, ScheduleContent } from "./Style"
import { ButtonTitle, LabelBox, LabelUser, Title } from "../Title/Style"
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
    const [statusType, setStatusType] = useState("Rotina")
    const navigation = useNavigation();

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
                                clickButton={statusType === "Rotina"}
                                onPress={() => setStatusType("Rotina")}
                            />

                            <BtnAppointmentType
                                textButton={"Exame"}
                                clickButton={statusType === "exame"}
                                onPress={() => setStatusType("exame")}
                            />

                            <BtnAppointmentType
                                textButton={"Urgência"}
                                clickButton={statusType === "urgencia"}
                                onPress={() => setStatusType("urgencia")}
                            />
                        </ChooseAppointment>
                    </LabelBox>


                    <LabelBox>
                        <LabelUser style={{ marginRight: 30, marginBottom: 10 }}>Informe a localização desejada:</LabelUser>

                        <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold', width: '100%' }}
                            placeholder="Informe a localização"
                        />

                        <Button
                            onPress={() => navigation.replace("ClinicSelect")}
                            style={{ width: '100%' }}
                        >
                            <ButtonTitle>Confirmar</ButtonTitle>
                        </Button>
                    </LabelBox>

                    <CancelText onPress={() => setShowModalSchedule(false)}>Cancelar</CancelText>
                </InfoSchedule>
            </ScheduleContent>
        </Modal>


    )
}
