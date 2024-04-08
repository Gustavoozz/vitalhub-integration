import { useEffect, useState } from "react"
import { Button, ButtonBack, ButtonEdit } from "../../components/Button/Style"
import { Container, ContainerUser, ContentProntuario, InformationContent, PhotoContainer } from "../../components/Container/Style"
import { Input, InputProntuario, InputUser } from "../../components/Input/Style"
import { CancelText, TextReenviar } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Style"
import { SubTextQuick } from "../../components/Text/Text"
import { ButtonTitle, LabelProntuario, LabelUser, TitleUser } from "../../components/Title/Style"
import { UserContainer } from "../../components/UserContainer/Style"
import { userDecodeToken } from "../../utils/Auth"
import api from "../../services/Service"

export const Prontuario = ({ navigation }) => {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [user, setUser] = useState();
    const [profile, setProfile] = useState([]);

    const [description, setDescription] = useState("");
    const [prontuarioInfo, setProntuarioInfo] = useState([]);
    const [editable, setEditable] = useState(false);

    async function profileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(token);
        }

        setNome(token.name);
        setEmail(token.email);
        setUser(token.user);

    }

    useEffect(() => {
        profileLoad();
    })

   

    async function GetInfo() {
      await api.get('/Consultas/ConsultasMedico')
      .then( response => {
         setProntuarioInfo(response.data)
      }). catch( error => {
         console.log(error)
      })

      setProntuarioInfo(response.data);
   }

   useEffect(() => {
    GetInfo();
 }, []) 
 


    return (
        <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <PhotoContainer>
                <UserContainer source={require('../../assets/User.png')} />
            </PhotoContainer>

            <ContentProntuario>
                <TitleUser>{nome}</TitleUser>
                <SubTextQuick>   {email}</SubTextQuick>
            </ContentProntuario>

            {
                editable == true ? (
                    <>
                    <LabelProntuario>Descrição da Consulta</LabelProntuario>
                    <InputProntuario style={{ fontFamily: 'MontserratAlternates_500Medium' }}
                    placeholder={description.descricao}
                    />
                    </>
                      
                ) : editable == false ? (
                    <>
                   <LabelUser>Descrição da consulta</LabelUser>
                    <InputUser style={{ height: 121, fontFamily: 'MontserratAlternates_500Medium', paddingBottom: 60 }}
                    placeholder={`Descrição`}
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

            <ButtonEdit>
                <ButtonTitle>Editar</ButtonTitle>
            </ButtonEdit>

            <ButtonBack onPress={() => navigation.replace("MainDoctor")}>
                <CancelText>Cancelar</CancelText>
            </ButtonBack>
            
        </ContainerUser>

    )
}