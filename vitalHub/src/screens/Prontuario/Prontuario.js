import { useEffect, useState } from "react"
import { Button, ButtonBack, ButtonEdit } from "../../components/Button/Style"
import { ContainerUser, ContentProntuario, PhotoContainer } from "../../components/Container/Style"
import { Input, InputProntuario, InputUser } from "../../components/Input/Style"
import { CancelText } from "../../components/Link/Style"

import { SubTextQuick } from "../../components/Text/Text"
import { ButtonTitle, LabelProntuario, LabelUser, TitleUser } from "../../components/Title/Style"
import { UserContainer } from "../../components/UserContainer/Style"
import { userDecodeToken } from "../../utils/Auth"
import api from "../../services/Service"

export const Prontuario = ({ navigation, route }) => {
    // const [nome, setNome] = useState("");
    // const [email, setEmail] = useState("");
    const [consultas, setConsultas] = useState(null);

    // const [user, setUser] = useState([]);
    // const [description, setDescription] = useState("");
    // const [prescription, setPrescription] = useState("");
    const [prontuarioInfo, setProntuarioInfo] = useState([]);
    const [editable, setEditable] = useState(false);
    const [profile, setProfile] = useState([])

    async function profileLoad() {
        const token = await userDecodeToken();

        if (token) {
            setProfile(token)
            console.log(token);
            
        }
    }



    async function GetInfo() {
      await api
        .get(`/Consultas/BuscaPorId?id=${route.params.consultaId}`)
        .then((response) => {
          setConsultas(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
    
        GetInfo();
    
    }, []);

    return (
        <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <PhotoContainer>
                <UserContainer source={require('../../assets/User.png')} />
            </PhotoContainer>

            <ContentProntuario>
                <TitleUser>{consultas.paciente.idNavigation.nome}</TitleUser>
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
                    placeholder={prontuarioInfo.descricao}
                    value={prontuarioInfo.descricao}
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

            <Button>
                <ButtonTitle>Salvar</ButtonTitle>
            </Button>

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

    )
}