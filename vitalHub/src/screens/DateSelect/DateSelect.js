import { Container } from "../../components/Container/Style";
import { ButtonTitle, LabelUser, Title } from "../../components/Title/Style";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent";
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { CancelLink } from "../ClinicSelect/Style";
import { SchedulingModal } from "../../components/SchedulingModal/SchedulingModal";
import { useEffect, useState } from "react";
import { Button, ButtonUnusable } from "../../components/Button/Style";

// API importada
import api from "../../services/Service";

export const DateSelect = ({
    navigation,
    route
}) => {
    // CONSTS
    const [showModalScheduling, setShowModalScheduling] = useState(false);

    const prioridadeId = route.params.prioridadeId; // id da prioridade
    const pacienteId = route.params.pacienteId; // id do usuário
    const clinicaId = route.params.clinicaId; // id da clínica
    const medicoId = route.params.medicoId; // id do médico
    const [dataConsulta, setDataConsulta] = useState(""); // data da consulta
    const prioridade = route.params.prioridade; // nome da prioridade
    const cidade = route.params. cidade; // cidade

    const [medicoClinica, setMedicoClinica] = useState(null) // medico e clínica

    const [horaSelecionada, setHoraSelecionada] = useState(null);


    // FUNCTIONS
    const Return = (rota) => {
        navigation.replace(rota, {
            prioridadeId: prioridadeId,
            pacienteId: pacienteId,
            clinicaId: clinicaId,
            cidade: cidade,

            prioridade: prioridade
        });
    }

    const MedicoClinicaLoad = async () => {
        await api.get(`/MedicoClinica?medicoId=${medicoId}&clinicaId=${clinicaId}`)
            .then(response => {
                setMedicoClinica(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }


    // EFFECTS    
    useEffect(() => {
        MedicoClinicaLoad();
    }, [])



    if (medicoClinica != null) {
        return (
            <Container style={{ backgroundColor: '#FAFAFA' }}>
                <Title>Selecionar data</Title>

                <CalendarComponent setDataConsulta={setDataConsulta} />

                <LabelUser>Selecione um horário disponível</LabelUser>

                <SelectInput
                    setHoraSelecionada={setHoraSelecionada}
                />

                {
                    dataConsulta != "" && horaSelecionada != null  ?
                        <Button onPress={() => setShowModalScheduling(true)}>
                            <ButtonTitle>Confirmar</ButtonTitle>
                        </Button>
                        :
                        <ButtonUnusable>
                            <ButtonTitle>Confirmar</ButtonTitle>
                        </ButtonUnusable>
                }

                <CancelLink onPress={() => Return("DoctorSelect")}>Cancelar</CancelLink>

                <SchedulingModal
                    setShowModalScheduling={setShowModalScheduling}
                    visible={showModalScheduling}
                    navigation={navigation}

                    dataConsulta={dataConsulta}
                    pacienteId={pacienteId}
                    prioridadeId={prioridadeId}
                    medicoClinica={medicoClinica}
                    prioridade={prioridade}
                    horaSelecionada={horaSelecionada}
                />
            </Container>
        )
    }
}