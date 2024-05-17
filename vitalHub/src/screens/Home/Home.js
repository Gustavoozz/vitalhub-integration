import { Container, UserContent } from "../../components/Container/Style"
import { CardUsuario } from "../../components/CardUsuario/CardUsuario"
import { CalendarHome } from "../../components/CalendarList/CalendarHome"

import { ContainerButton } from "./Style"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { useEffect, useState } from "react"

import { ListComponent } from "../../components/List/List"

import { CancelationModal } from "../../components/CancelationModal/CancelationModal"
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal"
import { ScheduleModal } from "../../components/ScheduleModal/ScheduleModal";

import { Header } from "../../components/Header/Header"
import api from "../../services/Service"
import { UserDecodeToken } from "../../utils/Auth"
import moment from "moment"
import { ButtonPatient } from "../../components/ButtonPatient/ButtonPatient"
import Spinner from "../../components/Spinner/Spinner"
import { Text, View } from "react-native"


export const Home = ({
    navigation
}) => {
    // STATES
    const [consultas, setConsultas] = useState([]); // informações das consultas
    const [consultaSelecionada, setConsultaSelecionada] = useState(null); // consulta selecionada 

    const [profile, setProfile] = useState([]) // tipo de usuário
    const [dataConsulta, setDataConsulta] = useState(''); // data da consulta
    const [statusLista, setStatusLista] = useState("Pendente"); // status da lista

    const [showModalSchedule, setShowModalSchedule] = useState(false) // visibilidade da modal - Cadastrar Consulta
    const [showModalCancel, setShowModalCancel] = useState(false); // visibilidade da modal - Cancelar Consultas
    const [showModalAppointment, setShowModalAppointment] = useState(false); // visibilidade da modal - Ver Consulta
    const [updateData, setUpdateData] = useState(true); // atualiza os dados

    const today = new Date();
    const status = "Realizada"

    const [showSpinner, setShowSpinner] = useState(false);


    // FUNCTIONS
    async function ProfileLoad() {
        const token = await UserDecodeToken(); // token decodificado

        // se token existir
        if (token) {
            // setar a conta com as informações do token
            setProfile(token)

            // setar o formato da data da consulta (ano, mês, dia)
            setDataConsulta(moment().format('YYYY-MM-DD'))
        }
    } // retornará as informações da conta

    async function StatusRealized(filter) {
        // let filter = consultas;

        for (const item of filter) {
            if (moment(item.dataConsulta)
                .isBefore(today)
            ) {
                await api.put(`/Consultas/Status?idConsulta=${item.id}&status=${status}`)
                    .then(() => {
                        item.situacao.situacao = "Realizada"
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }

        setConsultas(filter);
    }

    async function ListarConsultas() {
        setShowSpinner(true);

        const url = (
            // a conta é de um médico?
            profile.role === "Medico" ?
                // sim - retorne a url como "Medicos"
                "Medicos"
                :
                // não - retorne a url como "Pacientes"
                "Pacientes"
        )

        await api.get(`/${url}/BuscarPorData?data=${dataConsulta}&id=${profile.user}`)
            .then(response => {
                StatusRealized(response.data);
            }).catch(error => {
                console.log(error);
            })

        setShowSpinner(false);
    }

    const SelecionarConsulta = async (consulta, modal) => {
        setConsultaSelecionada(consulta)

        if (modal == "cancelar") {
            await setShowModalCancel(true);
        } else if (modal == "prontuario") {
            setShowModalAppointment(true)
        }
    }



    // EFFECTS
    useEffect(() => {
        setShowSpinner(true);

        ProfileLoad();

        setShowSpinner(false);
    }, [])

    useEffect(() => {
        if (dataConsulta != '') {
            ListarConsultas();
        }
    }, [dataConsulta, updateData])



    return (
        <Container>
            <Header />

            <UserContent>
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
                            <CardUsuario
                                navigation={navigation}
                                consulta={item}
                                profile={profile.role}

                                onPressCard={() => { SelecionarConsulta(item, "prontuario") }}
                                onPressCancel={() => SelecionarConsulta(item, "cancelar")}
                                onPressAppointment={() => SelecionarConsulta(item, "prontuario")}
                            />
                        )
                    }
                    showsVerticalScrollIndicator={false}
                />

                <CancelationModal
                    visible={showModalCancel}
                    consulta={consultaSelecionada}
                    setUpdateData={setUpdateData}
                    setShowModalCancel={setShowModalCancel}
                />

                {
                    consultaSelecionada != null ?
                        <AppointmentModal
                            navigation={navigation}

                            day={today}
                            visible={showModalAppointment}
                            setShowModalAppointment={setShowModalAppointment}

                            profile={profile.role}
                            consulta={consultaSelecionada}
                        />
                        :
                        null
                }

                {
                    profile.role === "Paciente" ?
                        <>
                            <ScheduleModal
                                navigation={navigation}
                                visible={showModalSchedule}
                                setShowModalSchedule={setShowModalSchedule}
                            />

                            <ButtonPatient
                                onPressSchedule={() => setShowModalSchedule(true)}
                            />
                        </>

                        :
                        null
                }
            </UserContent>

            <Spinner
                visible={showSpinner}
            />
        </Container>
    )
}