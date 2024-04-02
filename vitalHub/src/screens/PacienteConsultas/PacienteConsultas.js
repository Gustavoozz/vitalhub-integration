import { useEffect, useState } from "react"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { CalendarHome } from "../../components/CalendarList/CalendarHome"
import { AppointmentBox, Container, DoctorContainer, HeaderHome, InfoContainer } from "../../components/Container/Style"
import { AppointmentIcon, NotificationBell, UserDoctor } from "../../components/Logo/Style"
import { MontSerratWhite, UserText } from "../../components/Text/Text"
import { ContainerButton } from "../MedicoConsultas/Style"
import { ListComponent } from "../../components/List/List"
import { CardPaciente } from "../../components/CardPaciente/CardPaciente"
import { ScheduleModal } from "../../components/ScheduleModal/ScheduleModal"
import { NotificationModal } from "../../components/NotificationModal/NotificationModal"
import { CancelationModal } from "../../components/CancelationModal/CancelationModal"
import { ButtonPatient } from "../../components/ButtonPatient/ButtonPatient"
import { Fontisto, Octicons } from "@expo/vector-icons"
import { Header } from "../../components/Header/Header"
import { userDecodeToken } from "../../utils/Auth"



const Consultas = [
    { id: 1, nome: "Gustavo", situacao: "pendente" },
    { id: 2, nome: "Gustavo", situacao: "realizado" },
]

export const PacienteConsultas = ({ navigation }) => {

    const [statusLista, setStatusLista] = useState("pendente");
    const [statusType, setStatusType] = useState("Rotina");
    const [consultas, setConsultas] = useState([]);
    const [profile, setProfile] = useState([])
    const [dataConsulta, setDataConsulta] = useState('');

    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalSchedule, setShowModalSchedule] = useState(false);
    const [showModalNotification, setShowModalNotification] = useState(false);

    async function profileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(token);
            setProfile(token)
            setDataConsulta(moment().format('YYYY-MM-DD') )
        }
    }

    async function ListarConsultas() {
        const url = (profile.role == 'Medico' ? "Medicos" : "Pacientes")
        console.log(`/${url}/BuscarPorData?data=${dataConsulta}&id=${profile.user}`);

        await api.get(`/${url}/BuscarPorData?data=${dataConsulta}&id=${profile.user}`)
        .then(response => {
            setConsultas(response.data)

            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    useEffect(() => {
        profileLoad();
    }, [])


    useEffect(() => {
        if( dataConsulta != ''){
            ListarConsultas();  
        }
        
    }, [dataConsulta])
         


    return (
        <Container>
            <Header />

            <DoctorContainer>
                <CalendarHome 
                 setDataConsulta={ setDataConsulta }
                />

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
                    data={consultas}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        statusLista == item.situacao.situacao && (
                            <CardPaciente
                                roleUsuario={profile.role}
                                dataConsulta={item.dataConsulta}
                                usuarioConsulta={profile.role == 'Medico' ? item.paciente : item.medicoClinica.medico}
                                prioridade={item.prioridade.prioridade}
                          
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