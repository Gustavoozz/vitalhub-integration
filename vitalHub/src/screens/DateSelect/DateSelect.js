import { Container } from "../../components/Container/Style";
import { ButtonTitle, LabelUser, Title } from "../../components/Title/Style";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { ButtonDate } from "../../components/ButtonDate/ButtonDate";
import { CancelLink } from "../ClinicSelect/Style";
import { SchedulingModal } from "../../components/SchedulingModal/SchedulingModal";

export const DateSelect = ({ navigation }) => {

    const [showModalScheduling, setShowModalScheduling] = useState(false);

    return (
        <Container style={{ backgroundColor: '#FAFAFA' }}>
            <Title>Selecionar data</Title>

            <CalendarComponent />

            <LabelUser>Selecione um horário disponível</LabelUser>
            <SelectInput />

            <ButtonDate onPressScheduling={() => setShowModalScheduling(true)}>
                <ButtonTitle>Confirmar</ButtonTitle>
            </ButtonDate>

            <CancelLink onPress={() => navigation.replace("DoctorSelect")}>Cancelar</CancelLink>

            <SchedulingModal
                visible={showModalScheduling}
                setShowModalScheduling={setShowModalScheduling}
            />
        </Container>
    )
}