import { Image, View } from "react-native"
import { CityContainer, Container, ContainerUser, InformationContent, PhotoContainer } from "../../components/Container/Style"
import { UserContainer } from "../../components/UserContainer/Style"
import { ButtonTitle, LabelUser, Title, TitleUser } from "../../components/Title/Style"
import { SubTextQuick, TextQuick } from "../../components/Text/Text"
import { InputCity, InputUser } from "../../components/Input/Style"
import { Button, ButtonUser } from "../../components/Button/Style"
import { Content } from "./Style"

import { UserDecodeToken, UserLogout } from "../../utils/Auth"
import { useEffect, useState } from "react"

import moment from "moment";

// API importada
import api from "../../services/Service"

export const Perfil = ({ navigation }) => {
    // CONSTS
    const [tipoUsuario, setTipoUsuario] = useState();
    const [user, setUser] = useState([]);
    const [editar, setEditar] = useState(false);

    // FUNCTIONS
    async function ProfileLoad() {
        const token = await UserDecodeToken();

        if (token !== null) {
            setTipoUsuario(token.role);

            await UserLoad(token);
        }
    }

    async function UserLoad(token) {
        const url = (token.role == 'Medico' ?
            "Medicos"
            :
            "Pacientes"
        )

        console.log(`/${url}/BuscarPorId?id=${token.user}`);

        await api.get(`/${url}/BuscarPorId?id=${token.user}`)
            .then(response => {
                setUser(response.data)

                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // EFFECTS
    useEffect(() => {
        ProfileLoad();
    }, [])

    return (
        <ContainerUser>
            <PhotoContainer>
                <UserContainer source={require('../../assets/User.png')} />
                {user.idNavigation != undefined ?
                    <InformationContent>
                        <TitleUser>{user.idNavigation.nome}</TitleUser>

                        <SubTextQuick>{user.idNavigation.email}</SubTextQuick>
                    </InformationContent>
                    :
                    null
                }

            </PhotoContainer>

            <Content>
                {
                    user.idNavigation != undefined ?
                        <>
                            {tipoUsuario !== "Medico" ?
                                <>
                                    <LabelUser>Data de Nascimento</LabelUser>

                                    <InputUser
                                        placeholder={moment(user.dataNascimento).format("DD/MM/YYYY")}
                                    />
                                </>
                                :
                                null

                            }


                            <LabelUser>
                                {tipoUsuario === "Medico" ?
                                    "CRM"
                                    :
                                    "CPF"
                                }
                            </LabelUser>

                            <InputUser
                                placeholder={tipoUsuario === "Medico" ?
                                    user.crm
                                    :
                                    user.cpf
                                }
                            />

                            <LabelUser>Endereço</LabelUser>

                            <InputUser
                                placeholder={`${user.endereco.logradouro == undefined ?
                                    ""
                                    :
                                    user.endereco.logradouro
                                    }, ${user.endereco.numero == undefined ?
                                        ""
                                        :
                                        user.endereco.numero
                                    }`}
                            />

                            <CityContainer>
                                <View>
                                    <LabelUser>CEP</LabelUser>

                                    <InputCity
                                        placeholder={user.endereco.cep}
                                    />
                                </View>
                                {
                                    tipoUsuario !== "Medico" ?
                                        <View>
                                            <LabelUser>Cidade</LabelUser>

                                            <InputCity
                                                placeholder={user.endereco.cidade}
                                            />
                                        </View>
                                        :
                                        null
                                }

                            </CityContainer>
                        </>
                        :
                        null
                }

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <Button onPress={() => { }}>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>

                <ButtonUser onPress={() => UserLogout() && navigation.replace("Login")}>
                    <ButtonTitle>Logout</ButtonTitle>
                </ButtonUser>
            </Content>
        </ContainerUser >
    )
}