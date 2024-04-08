import { Image, View } from "react-native"
import { CityContainer, Container, ContainerUser, InformationContent, PhotoContainer } from "../../components/Container/Style"
import { UserContainer } from "../../components/UserContainer/Style"
import { ButtonTitle, LabelUser, Title, TitleUser } from "../../components/Title/Style"
import { SubTextQuick, TextQuick } from "../../components/Text/Text"
import { InputCity, InputUser } from "../../components/Input/Style"
import { Button, ButtonUser } from "../../components/Button/Style"

import { userDecodeToken, userLogout } from "../../utils/Auth"
import { useEffect, useState } from "react"

export const Perfil = ({ navigation }) => {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [cpf, setCpf] = useState();
    const [endereco, setEndereco] = useState();



    async function profileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(token);
        }

        setNome(token.name);
        setEmail(token.email);
    }

    useEffect(() => {
        profileLoad();
    })

    async function GetUser() {
        const url = (profile.role == 'Paciente' ? "Pacientes" : "Medicos")
        console.log(`/${url}/BuscarPorData?data=${dataConsulta}&id=${profile.user}`);

        await api.get(`/${url}/BuscarPorData?data=${dataConsulta}&id=${profile.user}`)
        .then(response => {
            setUserInfo(response.data)

            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        GetUser();
    })
  
    return (
        <ContainerUser contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <PhotoContainer>
                <UserContainer source={require('../../assets/User.png')} />

                <InformationContent>
                    <TitleUser>{nome}</TitleUser>
                    <SubTextQuick>{email}</SubTextQuick>
                </InformationContent>
            </PhotoContainer>

            <LabelUser></LabelUser>

            <InputUser
            placeholder="04/05/1999"
            />

            <LabelUser>CPF</LabelUser>

            <InputUser
            placeholder="859********"
            />

            <LabelUser>Endereço</LabelUser>

            <InputUser
            placeholder="Rua Vicenso Silva, 987"
            />

            <CityContainer>
                <View>
                    <LabelUser>CEP</LabelUser>

                    <InputCity
                    placeholder="06548-909"
                    />
                </View>

                <View>
                    <LabelUser>Cidade</LabelUser>
                    
                    <InputCity
                    placeholder="Moema-SP"
                    />
                </View>
            </CityContainer>

            <Button>
                <ButtonTitle>Salvar</ButtonTitle>
            </Button>

            <Button onPress={() => navigation.navigate("Login")}>
                <ButtonTitle>Editar</ButtonTitle>
            </Button>

            <ButtonUser onPress={() => userLogout() && navigation.navigate("Login")}>
                <ButtonTitle>Logout</ButtonTitle>
            </ButtonUser>
        </ContainerUser>
    )
}