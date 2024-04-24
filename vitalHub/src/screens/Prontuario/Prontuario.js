import { useEffect, useState } from "react"
import { Button, ButtonEdit } from "../../components/Button/Style"
import { ContainerUser, ContentProntuario, PhotoContainer } from "../../components/Container/Style"
import { Input, InputProntuario, InputProntuarioNonEditable } from "../../components/Input/Style"
import { CancelText } from "../../components/Link/Style"
import { SubTextQuick } from "../../components/Text/Text"
import {
    ButtonTitle,
    LabelProntuario,
    TitleUser
} from "../../components/Title/Style"
import { UserImage } from "../../components/UserImage/Style"
import { CancelLink } from './Style'

// API importada
import api from "../../services/Service"

export const Prontuario = ({
    navigation,
    route
}) => {
    // CONSTS
    const [editavel, setEditavel] = useState(false); // seta se o input é editável
    const [consulta, setConsulta] = useState(null); // informações da consulta
    const [descricao, setDescricao] = useState(); // descrição da consulta
    const [diagnostico, setDiagnostico] = useState() // diagnóstico da consulta
    const [prescricao, setPrescricao] = useState() // prescrição da consulta - remédio


    // FUNCTIONS
    const BuscarConsulta = async () => {
        await api.get(`/Consultas/BuscarPorId?id=${route.params.consultaId}`)
            .then(response => {
                setConsulta(response.data);

                setDescricao(response.data.descricao);

                setDiagnostico(response.data.diagnostico);

                setPrescricao(response.data.receita.medicamento);
            })
            .catch(error => {
                console.log(error);
            })
    }


    const AtualizarProntuario = async () => {
        await api.put(`/Consultas/Prontuario`, {
            consultaId: route.params.consultaId,
            medicamento: prescricao,
            descricao: descricao,
            diagnostico: diagnostico
        })
    }



    // EFFECTS
    useEffect(() => {
        BuscarConsulta();
    }, [])


    if (consulta != null) {
        return (
            <ContainerUser contentContainerStyle={{ alignItems: 'center' }}>
                <PhotoContainer>
                    <UserImage source={require('../../assets/User.png')} />
                </PhotoContainer>

                <ContentProntuario>
                    <TitleUser>{consulta.paciente.idNavigation.nome}</TitleUser>

                    <SubTextQuick>{consulta.paciente.idNavigation.email}</SubTextQuick>
                </ContentProntuario>

                <LabelProntuario>Descrição da Consulta</LabelProntuario>

                {
                    editavel == false ?
                        <InputProntuarioNonEditable placeholder={descricao} />
                        :
                        <InputProntuario
                            onChangeText={(txt) => setDescricao(txt)}
                            placeholder="Descrição..."
                        />
                }


                <LabelProntuario>Diagnóstico do paciente</LabelProntuario>

                {
                    editavel == false ?
                        <InputProntuarioNonEditable placeholder={diagnostico} />
                        :
                        <InputProntuario
                            onChangeText={(txt) => setDiagnostico(txt)}
                            placeholder="Diagnóstico..."
                        />
                }

                <LabelProntuario>Prescrição médica</LabelProntuario>

                {
                    editavel == false ?
                        <InputProntuarioNonEditable placeholder={prescricao} />
                        :
                        <InputProntuario
                            placeholder="Prescrição medica..."
                            onChangeText={(txt) => setPrescricao(txt)}
                        />
                }

                {
                    editavel == false ?
                        <Button onPress={() => AtualizarProntuario()}>
                            <ButtonTitle>Enviar</ButtonTitle>
                        </Button>
                        :
                        <Button onPress={() => setEditavel(false)}>
                            <ButtonTitle>Salvar</ButtonTitle>
                        </Button>
                }


                {
                    editavel === false ?
                        <ButtonEdit onPress={() => setEditavel(true)}>
                            <ButtonTitle>Editar</ButtonTitle>
                        </ButtonEdit>
                        :
                        null
                }


                <CancelLink onPress={() => navigation.replace("Main")}>
                    <CancelText>Cancelar</CancelText>
                </CancelLink>
            </ContainerUser>

        )
    }
}