import { Container, DoctorContainer, HeaderHome, InfoContainer } from "../../components/Container/Style"
import { CardPaciente } from "../../components/CardPaciente/CardPaciente"
import { CalendarHome } from "../../components/CalendarList/CalendarHome"

import { ContainerButton } from "./Style"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { useState } from "react"
import { ListComponent } from "../../components/List/List"
import { CancelationModal } from "../../components/CancelationModal/CancelationModal"
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal"

import { Header } from "../../components/Header/Header"
import { ScheduleModal } from "../../components/ScheduleModal/ScheduleModal"

const Consultas = [
    { id: 1, nome: "Gustavo", situacao: "pendente" },
    { id: 2, nome: "Gustavo", situacao: "realizado" },
    { id: 3, nome: "Gustavo", situacao: "pendente" },
    { id: 4, nome: "Gustavo", situacao: "realizado" },
    { id: 5, nome: "Gustavo", situacao: "pendente" },
];

export const MedicoConsultas = ({ navigation }) => {
    // STATES
    const [statusLista, setStatusLista] = useState("pendente");
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);
    const [showModalAgendamento, setShowModalAgendamento] = useState(false);
    const [consultaSelecionada, setConsultaSelecionada] = useState(null);

    // FUNCTIONS

    const MostrarModal = (modal, consulta) => {
        if (modal == 'cancelar') {
            setShowModalCancel(true);
        } else if (modal == 'prontuario') {
            setShowModalAppointment(true);
        } else {
            setShowModalAgendamento(true);
        }
    }

    return (
        <Container>
            <Header />

            <DoctorContainer>
                {/* Calendar New */}
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
                                onPressCancel={() => MostrarModal("cancelar", item)}
                                onPressAppointment={() => MostrarModal("prontuario", item)}
                            />
                        )
                    }
                    showsVerticalScrollIndicator={false}
                />

                <CancelationModal
                    visible={showModalCancel}
                    setShowModalCancel={setShowModalCancel}
                />

                <AppointmentModal
                    visible={showModalAppointment}
                    setShowModalAppointment={setShowModalAppointment}
                />

                <ScheduleModal
                    visible={showModalAgendamento}
                    setShowModalSchedule={setShowModalAgendamento}
                />

            </DoctorContainer>
        </Container>
    )
}