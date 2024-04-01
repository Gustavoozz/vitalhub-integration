import { Container, DoctorContainer } from "../../components/Container/Style"
import { CardPaciente } from "../../components/CardPaciente/CardPaciente"
import { CalendarHome } from "../../components/CalendarList/CalendarHome"

import { ContainerButton } from "./Style"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { useEffect, useState } from "react"

import { ListComponent } from "../../components/List/List"
import { CancelationModal } from "../../components/CancelationModal/CancelationModal"
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal"

import { Header } from "../../components/Header/Header"
import api from "../../services/Service"

// const Consultas = [
//     { id: 1, nome: "Gustavo", situacao: "pendente" },
//     { id: 2, nome: "Gustavo", situacao: "realizado" },
//     { id: 3, nome: "Gustavo", situacao: "pendente" },
//     { id: 4, nome: "Gustavo", situacao: "realizado" },
//     { id: 5, nome: "Gustavo", situacao: "pendente" },

// ];



export const MedicoConsultas = () => {

    const [consultaLista, setConsultaLista] = useState([]);

    // State para o estado da lista ( Cards ).
    const [statusLista, setStatusLista] = useState("pendente");

    // State para a exibição de modais.
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);

    async function GetAppointment() {
        await api.get('/Consultas/ConsultasMedico')
        .then( response => {
           setConsultaLista(response.data)

           console.log(profile);
        }). catch( error => {
           console.log(error)
        })
     }

    useEffect(() => {
        GetAppointment();
    })
         
    return (
        <Container>
            <Header />

            <DoctorContainer>
                {/* Calendar New */}
                <CalendarHome />

                <ContainerButton style={{ marginBottom: 20 }}>
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
                    data={consultaLista}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        statusLista == item.situacao && (
                            <CardPaciente
                                paciente={item}
                                situacao={item.situacao}
                                onPressCancel={() => setShowModalCancel(true)}
                                onPressAppointment={() => setShowModalAppointment(true)}
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

            </DoctorContainer>
        </Container>
    )
}