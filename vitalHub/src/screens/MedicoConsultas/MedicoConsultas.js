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
import { userDecodeToken } from "../../utils/Auth"
import moment from "moment"

// Mock de cards:
// const Consultas = [
//     { id: 1, nome: "Gustavo", situacao: "pendente" },
//     { id: 2, nome: "Gustavo", situacao: "realizado" },
//     { id: 3, nome: "Gustavo", situacao: "pendente" },
//     { id: 4, nome: "Gustavo", situacao: "realizado" },
//     { id: 5, nome: "Gustavo", situacao: "pendente" },

// ];


export const MedicoConsultas = () => {
    
    const [consultas, setConsultas] = useState([]);
    const [profile, setProfile] = useState([])
    const [dataConsulta, setDataConsulta] = useState('');

    // State para o estado da lista ( Cards ).
    const [statusLista, setStatusLista] = useState("Pendente"); 

    // State para a exibição de modais.
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);

    // async function GetAppointment() {
    //     await api.get('/Consultas/ConsultasMedico')
    //     .then( response => {
    //        setConsultaLista(response.data)

    //        console.log(profile);
    //     }). catch( error => {
    //        console.log(error)
    //     })
    //  }

    // useEffect(() => {
    //     GetAppointment();
    // })


    async function profileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(token);
            setProfile(token)
            setDataConsulta(moment().format('YYYY-MM-DD'))
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
                {/* Calendar New */}
                <CalendarHome 
                setDataConsulta={setDataConsulta}
                />

                <ContainerButton style={{ marginBottom: 20 }}>
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
                                roleUsuario={profile.role}
                                dataConsulta={item.dataConsulta}
                                usuarioConsulta={profile.role == 'Medico' ? item.paciente : item.medicoClinica.medico}
                                prioridadeUsuario={item.prioridade.prioridade}
                                
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