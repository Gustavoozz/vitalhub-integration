import { useEffect, useState } from "react"
<<<<<<< HEAD
import { Button, ButtonBack, ButtonEdit } from "../../components/Button/Style"
import { ContainerUser, ContentProntuario, PhotoContainer } from "../../components/Container/Style"
import { Input, InputProntuario, InputUser } from "../../components/Input/Style"
import { CancelText } from "../../components/Link/Style"

import { SubTextQuick } from "../../components/Text/Text"
import { ButtonTitle, LabelProntuario, LabelUser, TitleUser } from "../../components/Title/Style"
import { UserContainer } from "../../components/UserContainer/Style"
import { userDecodeToken } from "../../utils/Auth"
import api from "../../services/Service"

export const Prontuario = ({ navigation,
    usuarioConsulta }) => {

    const [consultas, setConsultas] = useState();
    const [editable, setEditable] = useState(false);

    async function ProfileLoad() {
        const token = await userDecodeToken();

        if (token !== null) {
            setTipoUsuario(token.role);

            await GetInfo(token);
            await UpdateForm(token);
        }
    }



    async function GetInfo(token) {

      await api.get(`/Consultas/BuscaPorId?id=${usuarioConsulta.consultas}`)
        .then((response) => {
          setConsultas(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // async function UpdateForm() {

    //     await api.put(`/Consultas/Status`)
    //       .then((response) => {
    //         setConsultas(response.data);
    //         console.log(response.data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
   
    useEffect(() => {
        ProfileLoad();
    }, []);

    return (
        <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <PhotoContainer>
                <UserContainer source={require('../../assets/User.png')} />
            </PhotoContainer>

            <ContentProntuario>
                <TitleUser></TitleUser>
                <SubTextQuick></SubTextQuick>
            </ContentProntuario>

            {
                editable == true ? (
                    <>
                    <LabelProntuario>Descrição da Consulta</LabelProntuario>
                    <InputProntuario style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                    placeholder="..."
                    />
                    </>
                      
                ) : editable == false ? (
                    <>
                   <LabelUser>Descrição da consulta</LabelUser>
                    <InputUser style={{ height: 121, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 60 }}
                    
                    placeholderTextColor="#4E4B59"
                    />
                    </>
                ) : null
            }
          
          {
            editable == true ? (
            <>
            <LabelProntuario>Diagnóstico do paciente</LabelProntuario>
            <Input style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="Diagnóstico..."
            />
            </>
            ) :  editable == false ? (
            <>
            <LabelUser>Diagnóstico do paciente</LabelUser>
            <InputUser style={{ height: 121, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 60 }}
            placeholder="Diagnóstico do paciente..."
            placeholderTextColor="#4E4B59"
            />
            </>
            ) : null        
          }
        
        {
            editable == true ? (
            <>
            <LabelProntuario>Prescrição médica</LabelProntuario>
            <InputProntuario style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="Prescrição medica..."
            />
            </>
            ) : editable == false ? (
                <>
            <LabelUser>Prescrição médica</LabelUser>
            <InputUser style={{ height: 121, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 60 }}
            placeholder="Prescrição médica..."
            placeholderTextColor="#4E4B59"
            />
            </>
            ) : null
            }
=======
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
>>>>>>> develop

                setDiagnostico(response.data.diagnostico);

<<<<<<< HEAD
          {
            editable == false ? (
                <ButtonEdit onPress={() => setEditable(true)} style={{ backgroundColor: "#496BBA"}}>
                <ButtonTitle>Editar</ButtonTitle>
                </ButtonEdit>
            ) : editable == true ? (
                <ButtonEdit onPress={() => setEditable(false)}>
                <ButtonTitle>Editar</ButtonTitle>
                </ButtonEdit>
            ) : null
          }
               
 
            <ButtonBack onPress={() => navigation.replace("MainDoctor")}>
                <CancelText>Cancelar</CancelText>
            </ButtonBack>
            
        </ContainerUser>
=======
                setPrescricao(response.data.receita.medicamento);
            })
            .catch(error => {
                console.log(error);
            })
    }

>>>>>>> develop

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