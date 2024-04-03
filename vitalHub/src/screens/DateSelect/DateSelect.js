import { useState } from "react"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import { Container } from "../../components/Container/Style"

import { SelectInput } from "../../components/SelectInput/SelectInput"
import { ButtonTitle, LabelUser, Title } from "../../components/Title/Style"
import { SchedulingModal } from "../../components/SchedulingModal/SchedulingModal"
import { ButtonDate } from "../../components/ButtonDate/ButtonDate"
import { CancelText } from "../../components/Link/Style"

export const DateSelect = ({ navigation }) => {

    const [showModalScheduling, setShowModalScheduling] = useState(false);

    return(
    <Container style={{ backgroundColor: '#FAFAFA'}}>
        <Title style={{ marginTop: 30, marginBottom: 30 }}>Selecionar data</Title>

        <CalendarComponent/>

        <LabelUser>Selecione um horário disponível</LabelUser>
        <SelectInput/>

        <ButtonDate onPressScheduling={() => setShowModalScheduling(true)}>
            <ButtonTitle>Confirmar</ButtonTitle>
        </ButtonDate>

        <CancelText onPress={() => navigation.replace("DoctorSelect")} style={{ marginTop: 40 }}>Cancelar</CancelText>

        <SchedulingModal
        visible={showModalScheduling}
        setShowModalScheduling={setShowModalScheduling}
        />
    </Container>
    )
}