import { Modal } from "react-native"
import { ButtonTitle, Title } from "../Title/Style"
import { CancelText } from "../Link/Style"
import {
    ModelBack,
    ModalContent,
    ModalText,
    ModalTextBig,
    ModalTextMini
} from "./Style"
import { Button } from "../Button/Style"
import { useEffect, useState } from "react"
import * as Notifications from "expo-notifications"

import moment from "moment";

// API importada
import api from "../../services/Service"

export const SchedulingModal = ({
    visible,
    setShowModalScheduling,
    navigation,

    dataConsulta,
    medicoClinica,
    pacienteId,
    prioridadeId,
    horaSelecionada,

    prioridade,

    ...rest
}) => {
    // CONSTS
    const [nome, setNome] = useState(); // nome do usuário

    const SituacaoId = "EED5A890-B957-4DF6-ACDF-B33AD1ED1FAE";
    const PacienteId = pacienteId;
    const MedicoClinicaId = medicoClinica.id;
    const ReceitaId = "Sem receita";
    const PrioridadeId = prioridadeId;
    const DataConsulta = dataConsulta;
    const Descricao = "Sem descrição";
    const Diagnostico = "Sem diagnóstico"


    // FUNCTIONS
    const NameLoad = async () => {
        await api.get(`/Pacientes/BuscarPorId?id=${pacienteId}`)
            .then(response => {
                setNome(response.data.idNavigation.nome);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const HandleCallNotifications = async () => {
        const { status } = await Notifications.getPermissionsAsync()

        if (status !== "granted") {
            alert("As notificações do usuário não estão ativas!")
            return;
        }

        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Consulta agendada",
                body: "Consulta agendada com sucesso!!"
            },
            trigger: null
        });
    }

    const ConvertData = (data) => {
        return (moment(data).format('DD/MM/YYYY'))
    }

    const CadastrarConsulta = async (rota) => {
        if (pacienteId) {
            await api.post(`/Consultas/Cadastrar`, {
                situacaoId: SituacaoId,
                pacienteId: PacienteId,
                medicoClinicaId: MedicoClinicaId,
                prioridadeId: PrioridadeId,
                dataConsulta: `${DataConsulta} ${horaSelecionada}`,
                descricao: null,
                diagnostico: null
            })
                .then(() => {
                    HandleCallNotifications();

                    navigation.replace(rota)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }



    // EFFECTS
    useEffect(() => {
        NameLoad();
    }, [])



    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ModelBack>
                <ModalContent>

                    <Title>Agendar consulta</Title>
                    <ModalText>Consulte os dados selecionados para a sua consulta</ModalText>

                    <ModalTextBig>Nome</ModalTextBig>
                    <ModalTextMini>{nome}</ModalTextMini>

                    <ModalTextBig>Data e hora da consulta</ModalTextBig>
                    <ModalTextMini>{ConvertData(dataConsulta)} - {horaSelecionada}</ModalTextMini>

                    <ModalTextBig>Prioridade</ModalTextBig>
                    <ModalTextMini>{prioridade}</ModalTextMini>

                    <ModalTextBig>Médic@ da consulta</ModalTextBig>
                    <ModalTextMini>{medicoClinica.medico.idNavigation.nome}</ModalTextMini>
                    <ModalTextMini>{medicoClinica.medico.especialidade.especialidade1}</ModalTextMini>

                    <ModalTextBig>Local da consulta</ModalTextBig>
                    <ModalTextMini>{medicoClinica.clinica.endereco.cidade}, {medicoClinica.clinica.endereco.logradouro} - {medicoClinica.clinica.endereco.numero.toString()}</ModalTextMini>

                    <Button onPress={() => CadastrarConsulta("Main")}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </Button>

                    <CancelText onPress={() => setShowModalScheduling(false)}>Cancelar</CancelText>
                </ModalContent>
            </ModelBack>
        </Modal>
    )
}