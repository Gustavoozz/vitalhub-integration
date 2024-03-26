import { Image, View } from "react-native"
import { CityContainer, Container, ContainerUser, InformationContent, PhotoContainer } from "../../components/Container/Style"
import { UserContainer } from "../../components/UserContainer/Style"
import { ButtonTitle, LabelUser, Title, TitleUser } from "../../components/Title/Style"
import { SubTextQuick, TextQuick } from "../../components/Text/Text"
import { InputCity, InputUser } from "../../components/Input/Style"
import { Button, ButtonUser } from "../../components/Button/Style"

export const Perfil = ({ navigation }) => {
    return(
        <ContainerUser contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
            <PhotoContainer>
            <UserContainer source={require('../../assets/User.png')}/>

            <InformationContent>

            <TitleUser>Richard Kosta</TitleUser>
            <SubTextQuick>richard.kosta@gmail.com</SubTextQuick>
            
            </InformationContent>
            </PhotoContainer>
            
            <LabelUser>Data de Nascimento</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="04/05/1999"
            placeholderTextColor="#33303E"/>

            <LabelUser>CPF</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="859********"
            placeholderTextColor="#33303E"/>

            <LabelUser>Endereço</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="Rua Vicenso Silva, 987"
            placeholderTextColor="#33303E"/>

            <CityContainer>
            <View>
            <LabelUser>CEP</LabelUser>
            <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="06548-909"
            placeholderTextColor="#33303E"/>
            </View>
            
            <View>
            <LabelUser>Cidade</LabelUser>
            <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="Moema-SP"
            placeholderTextColor="#33303E"/>   
            </View>
            </CityContainer>

            <Button>
            <ButtonTitle>Salvar</ButtonTitle>
            </Button>

            <Button onPress={() => navigation.navigate("Login")}>
            <ButtonTitle>Editar</ButtonTitle>
            </Button>

            <ButtonUser onPress={() => navigation.replace("Login")}>
                <ButtonTitle>Sair do App</ButtonTitle>
            </ButtonUser>
        </ContainerUser>
    )
}