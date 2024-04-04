import { Image, View } from "react-native"
import { CityContainer, Container, ContainerUser, InformationContent, PhotoContainer } from "../../components/Container/Style"
import { UserContainer } from "../../components/UserContainer/Style"
import { ButtonTitle, LabelUser, Title, TitleUser } from "../../components/Title/Style"
import { SubTextQuick, TextQuick } from "../../components/Text/Text"
import { InputCity, InputUser } from "../../components/Input/Style"
import { Button, ButtonUser } from "../../components/Button/Style"
import { Content } from "./Style"

import { UserDecodeToken, userLogout } from "../../utils/Auth"
import { useEffect, useState } from "react"

// API importada
import api from "../../services/Service"

export const Perfil = ({ navigation }) => {
    // CONSTS
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();

    // FUNCTIONS
    async function profileLoad() {
        const token = await UserDecodeToken();

        setNome(token.name);

        setEmail(token.email);
    }

    // EFFECTS
    useEffect(() => {
        profileLoad();
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

            <Content>

                <LabelUser>Data de Nascimento</LabelUser>

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

                <Button onPress={() => { }}>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>

                <ButtonUser onPress={() => userLogout() && navigation.replace("Login")}>
                    <ButtonTitle>Logout</ButtonTitle>
                </ButtonUser>
            </Content>
        </ContainerUser >
    )
}