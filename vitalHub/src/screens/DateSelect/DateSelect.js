import { useState } from "react"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import { Container } from "../../components/Container/Style"

import { SelectInput } from "../../components/SelectInput/SelectInput"
import { ButtonTitle, LabelUser, Title } from "../../components/Title/Style"
import { SchedulingModal } from "../../components/SchedulingModal/SchedulingModal"
import { ButtonDate } from "../../components/ButtonDate/ButtonDate"
import { CancelText } from "../../components/Link/Style"

export const DateSelect = ({ navigation, route }) => {
    const [agendamento, setAgendamento] = useState(null)
    const [dataSelecionada, setDataSelecionada] = useState("")
    const [horaSelecionada, setHoraSelecionada] = useState("")
    const [showModalScheduling, setShowModalScheduling] = useState(false);

    useEffect(() => {
        console.log(dataSelecionada);
      }, [dataSelecionada])

      function handleContinue() {
        setAgendamento({
            ...route.params.agendamento,
            dataConsulta : `${dataSelecionada} ${horaSelecionada}`
        });

        setShowModalScheduling(true)
      }

    return(
    <Container style={{ backgroundColor: '#FAFAFA'}}>
        <Title style={{ marginTop: 30, marginBottom: 30 }}>Selecionar data</Title>

        <CalendarComponent
        setDataSelecionada={setDataSelecionada}
        dataSelecionada={dataSelecionada}
        />

        <LabelUser>Selecione um horário disponível</LabelUser>
        <SelectInput
        setHoraSelecionada={setHoraSelecionada}
        
        />

        <ButtonDate onPressScheduling={() => setShowModalScheduling(true)} onPress={() => handleContinue()}>
            <ButtonTitle>Confirmar</ButtonTitle>
        </ButtonDate>

        <CancelText onPress={() => navigation.replace("DoctorSelect")} style={{ marginTop: 40 }}>Cancelar</CancelText>

        <SchedulingModal
        agendamento={agendamento}
        visible={showModalScheduling}
        setShowModalScheduling={setShowModalScheduling}
        />
    </Container>
    )
}