import { useState } from "react"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { CalendarHome } from "../../components/CalendarList/CalendarHome"
import { Container, DoctorContainer } from "../../components/Container/Style"
import { ContainerButton } from "../MedicoConsultas/Style"
import { ListComponent } from "../../components/List/List"
import { CardPaciente } from "../../components/CardPaciente/CardPaciente"
import { ScheduleModal } from "../../components/ScheduleModal/ScheduleModal"
import { NotificationModal } from "../../components/NotificationModal/NotificationModal"
import { CancelationModal } from "../../components/CancelationModal/CancelationModal"
import { ButtonPatient } from "../../components/ButtonPatient/ButtonPatient"
import { Header } from "../../components/Header/Header"

const Consultas = [
    { id: 1, nome: "Gustavo", situacao: "pendente" },
    { id: 2, nome: "Gustavo", situacao: "realizado" },
]

export const PacienteConsultas = ({ navigation }) => {

    const [statusLista, setStatusLista] = useState("pendente");
    const [statusType, setStatusType] = useState("Rotina");

    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalSchedule, setShowModalSchedule] = useState(false);
    const [showModalNotification, setShowModalNotification] = useState(false);

    return (
        <Container>
            <Header />

            <DoctorContainer>
                <CalendarHome />

                <ContainerButton>
                    <BtnListAppointment
                        textButton={"Agendadas"}
                        clickButton={statusLista === "pendente"}
                        onPress={() => setStatusLista("pendente")}
                    />

                    <BtnListAppointment
                        textButton={"Realizadas"}
                        clickButton={statusLista === "realizado"}
                        onPress={() => setStatusLista("realizado")}
                    />

                    <BtnListAppointment
                        textButton={"Canceladas"}
                        clickButton={statusLista === "cancelado"}
                        onPress={() => setStatusLista("cancelado")}
                    />
                </ContainerButton>

                <ListComponent
                    data={Consultas}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        statusLista == item.situacao && (
                            <CardPaciente
                                navigation={navigation}
                                situacao={item.situacao}
                                onPressNotification={() => setShowModalNotification(true)}
                                onPressCancel={() => setShowModalCancel(true)}
                                onPressAppointment={() => setShowModalAppointment(true)}
                            />
                        )
                    }
                    showsVerticalScrollIndicator={false}
                />

                <ButtonPatient
                    onPressSchedule={() => setShowModalSchedule(true)}
                />

                <CancelationModal
                    visible={showModalCancel}
                    setShowModalCancel={setShowModalCancel}
                />

                <ScheduleModal
                    visible={showModalSchedule}
                    setShowModalSchedule={setShowModalSchedule}
                />

                <NotificationModal
                    visible={showModalNotification}
                    setShowModalNotification={setShowModalNotification}
                />



            </DoctorContainer>
        </Container>

    )
}