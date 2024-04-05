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
import { UserDecodeToken } from "../../utils/Auth"
import moment from "moment"


export const MedicoConsultas = () => {

    const [consultas, setConsultas] = useState([]);
    const [profile, setProfile] = useState([])
    const [dataConsulta, setDataConsulta] = useState('');

    // State para o estado da lista ( Cards ).
    const [statusLista, setStatusLista] = useState("Pendente");

    // State para a exibição de modais.
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);

    async function ProfileLoad() {
        const token = await UserDecodeToken();

        if (token) {
            console.log(token);

            setProfile(token)

            setDataConsulta(moment().format('YYYY-MM-DD'))
        }
    }

    async function ListarConsultas() {
        const url = (profile.role === "Medico" ?
            "Medicos"
            :
            "Pacientes"
        )
        console.log(`/${url}/BuscarPorData?data=${dataConsulta}&id=${profile.user}`);

        await api.get(`/${url}/BuscarPorData?data=${dataConsulta}&id=${profile.user}`)
            .then(response => {
                setConsultas(response.data)

                console.log(consultas);
            }).catch(error => {
                console.log(error);
            })
    }


    useEffect(() => {
        ProfileLoad();
    }, [])


    useEffect(() => {
        if (dataConsulta != '') {
            ListarConsultas();
        }

    }, [dataConsulta])



    return (
        <Container>
            <Header />

            <DoctorContainer>
                {/* Calendar New */}
                <CalendarHome
                    setDataConsulta={setDataConsulta}
                />

                <ContainerButton>
                    <BtnListAppointment
                        textButton={"Agendadas"}
                        clickButton={statusLista === "Pendente"}
                        onPress={() => setStatusLista("Pendente")}
                    />

                    <BtnListAppointment
                        textButton={"Realizadas"}
                        clickButton={statusLista === "Realizada"}
                        onPress={() => setStatusLista("Realizada")}
                    />

                    <BtnListAppointment
                        textButton={"Canceladas"}
                        clickButton={statusLista === "Cancelada"}
                        onPress={() => setStatusLista("Cancelada")}
                    />


                </ContainerButton>

                <ListComponent
                    data={consultas}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        statusLista == item.situacao.situacao && (
                            <CardPaciente
                                consulta={item}
                                profile={profile.role}

                                onPressNotification={() => MostrarModal(true)}
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