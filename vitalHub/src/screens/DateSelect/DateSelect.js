import { Container } from "../../components/Container/Style";
import { ButtonTitle, LabelUser, Title } from "../../components/Title/Style";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { CancelLink } from "../ClinicSelect/Style";
import { SchedulingModal } from "../../components/SchedulingModal/SchedulingModal";
import { useState } from "react";
import { Button } from "../../components/Button/Style";

export const DateSelect = ({ navigation }) => {

    const [showModalScheduling, setShowModalScheduling] = useState(false);

    return (
        <Container style={{ backgroundColor: '#FAFAFA' }}>
            <Title>Selecionar data</Title>

            <CalendarComponent />

            <LabelUser>Selecione um horário disponível</LabelUser>
            <SelectInput />

            <Button onPress={() => setShowModalScheduling(true)}>
                <ButtonTitle>Confirmar</ButtonTitle>
            </Button>

            <CancelLink onPress={() => navigation.replace("DoctorSelect")}>Cancelar</CancelLink>

            <SchedulingModal
                setShowModalScheduling={setShowModalScheduling}
                visible={showModalScheduling}
                navigation={navigation}
            />
        </Container>
    )
}