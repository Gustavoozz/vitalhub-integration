import { useEffect, useState } from "react"
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
import { UserDecodeToken } from "../../utils/Auth"
import api from "../../services/Service"
import moment from "moment"

export const PacienteConsultas = ({ navigation }) => {

    const [statusLista, setStatusLista] = useState("Pendente");
    const [consultas, setConsultas] = useState([]);
    const [profile, setProfile] = useState([])

    const [dataConsulta, setDataConsulta] = useState('');
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalSchedule, setShowModalSchedule] = useState(false);

    const [showModalNotification, setShowModalNotification] = useState(false);
    const [consultaSelecionada, setConsultaSelecionada] = useState(null)

    async function ProfileLoad() {
        const token = await UserDecodeToken();

        if (token) {
            setProfile(token)

            setDataConsulta(moment().format('YYYY-MM-DD'))
        }
    }

    function MostrarModal(modal, consulta) {
        setConsultaSelecionada(consulta)

        if (modal == 'cancelar') {
            setShowModalCancel(true)
        } else if (modal == 'prontuario') {
            setShowModalAppointment(true)
        } else {
            setShowModalSchedule(true)
        }
    }


    async function ListarConsultas() {
        const url = (profile.role == 'Paciente' ? "Pacientes" : "Medicos")
        
        console.log(`/${url}/BuscarPorData?data=${dataConsulta}&id=${profile.user}`);

        await api.get(`/${url}/BuscarPorData?data=${dataConsulta}&id=${profile.user}`)
            .then(response => {
                setConsultas(response.data)
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
                        clickButton={statusLista === "Realizado"}
                        onPress={() => setStatusLista("Realizado")}
                    />

                    <BtnListAppointment
                        textButton={"Canceladas"}
                        clickButton={statusLista === "Cancelado"}
                        onPress={() => setStatusLista("Cancelado")}
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
                    consulta={consultaSelecionada}
                    roleUsuario={profile.role}
                    visible={showModalNotification}
                    setShowModalNotification={setShowModalNotification}
                />
            </DoctorContainer>
        </Container>

    )
}