import { View } from "react-native"
import { CityContainer, ContainerUser, InformationContent, PhotoContainer } from "../../components/Container/Style"
import { UserImage } from "../../components/UserImage/Style"
import { ButtonTitle, LabelUser, TitleUser } from "../../components/Title/Style"
import { SubTextQuick } from "../../components/Text/Text"
import { Input, InputCity, InputCityEditable, InputUser } from "../../components/Input/Style"
import { Button, ButtonUser } from "../../components/Button/Style"
import { ButtonCamera, Content } from "./Style"

import { UserDecodeToken, UserLogout } from "../../utils/Auth"
import { useEffect, useState } from "react"

import moment from "moment";

// API importada
import api from "../../services/Service"
import { UseMask } from "../../utils/Converter"
import CameraModal from "../../components/CameraProntuary/CameraProntuary"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export const Perfil = ({ navigation }) => {
    // CONSTS
    const [tipoUsuario, setTipoUsuario] = useState(null); // tipo de usuário
    const [user, setUser] = useState([]); // carrega o usuário
    const [editar, setEditar] = useState(false); // altera os inputs

    const [dataNascimento, setDataNascimento] = useState(); // data de nascimento do usuário
    const [cpf, setCpf] = useState(); // cpf do usuário - paciente
    const [crm, setCrm] = useState(); // crm do usuário - médico
    const [cep, setCep] = useState(""); // cep do usuário
    const [address, setAddress] = useState(); // endereço usando API ViaCep
    const [nome, setNome] = useState(); // nome do usuário
    const [photo, setPhoto] = useState(null); // foto do usuário
    const [showCamera, setShowCamera] = useState(false); // seta a visibilidade da câmera
    const [idUsuario, setIdUsuario] = useState(""); // id do usuário

    // FUNCTIONS
    async function ProfileLoad() {
        // constante token usa o token decodado
        const token = await UserDecodeToken();

        // se token não for vazio
        if (token !== null) {
            setTipoUsuario(token.role);
            
            setIdUsuario(token.user);

            await UserLoad(token);
        }
    } // lê o usuário pelo token

    async function UserLoad(token) {
        const url = (token.role == 'Medico' ?
            "Medicos"
            :
            "Pacientes"
        )

        await api.get(`/${url}/BuscarPorId?id=${token.user}`)
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const HandleEditar = async (e) => {
        if (e == false) {
            setEditar(true);

            if (user) {
                setNome(user.idNavigation.nome);

                if (tipoUsuario == "Medico") {
                    setCrm(user.crm);
                } else {
                    setCpf(user.cpf)
                    setDataNascimento(moment(user.dataNascimento).format("DD/MM/YYYY"));
                }

                setCep(user.endereco.cep)
            }
        } else {
            if (user && address) {
                if (tipoUsuario == "Medico") {
                    await api.put(`/Medicos?idUsuario=${user.id}`, {
                        nome: nome,
                        cep: cep,
                        logradouro: address.logradouro,
                        cidade: address.localidade,
                        crm: crm
                    })
                        .then(response => {
                            console.log("");
                            console.log(response.data);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
                else {
                    await api.put(`/Pacientes?idUsuario=${user.id}`, {
                        nome: nome,
                        cpf: cpf,
                        dataNascimento: ConvertDate(dataNascimento),
                        cep: cep,
                        logradouro: address.logradouro,
                        cidade: address.localidade,
                    })
                        .then(response => {
                            console.log("");
                            console.log(response.data);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            }

            setEditar(false);
        }

    }

    const ConvertDate = (d) => {
        const date = d.split("/")

        const converted = moment(`${date[2]}-${date[1]}-${date[0]}`).format("YYYY-MM-DD")

        return converted;
    }

    const GetAddress = async () => {
        await api.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                setAddress(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    async function ChangeProfilePhoto() {
        const formData = new FormData();
        formData.append("Arquivo", {
            uri: photo,
            name: `image.${photo.split(".")[1]}`,
            type: `image/${photo.split(".")[1]}`,
        })
        console.log(`/Usuario/AlterarFotoDePerfil?id=${idUsuario}`);

        await api.put(`/Usuario/AlterarFotoDePerfil?id=${idUsuario}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(async response => {
            console.log(response);

        }).catch(error => {
            console.log(error);
        })
    }



    // EFFECTS
    useEffect(() => {
        ProfileLoad();
    }, [user])

    useEffect(() => {
        if (cep.length == 8) {
            GetAddress()
        }
    }, [cep])

    useEffect(() => {
        if (photo != null) {
            ChangeProfilePhoto();
        }
    }, [])

    if (user != undefined && user.idNavigation != undefined) {
        return (
            <ContainerUser>
                <PhotoContainer>
                    <UserImage source={{ uri: photo }} />

                    <ButtonCamera
                        onPress={() => setShowCamera(true)}
                    >
                        <MaterialCommunityIcons
                            name="camera-plus"
                            size={20}
                            color={"#FBFBFB"}
                        />
                    </ButtonCamera>

                    <InformationContent>
                        <TitleUser>{user.idNavigation.nome}</TitleUser>

                        <SubTextQuick>{user.idNavigation.email}</SubTextQuick>
                    </InformationContent>
                </PhotoContainer>

                <Content>
                    {
                        tipoUsuario != "Medico" ?
                            <>
                                <LabelUser>Data de Nascimento</LabelUser>

                                {
                                    editar != false ?
                                        <Input
                                            onChangeText={(txt) => setDataNascimento(txt)}
                                            value={dataNascimento}
                                        />
                                        :
                                        <InputUser
                                            placeholder={moment(user.dataNascimento).format("DD/MM/YYYY")}
                                        />
                                }

                            </>
                            :
                            null
                    }

                    <LabelUser>
                        {
                            tipoUsuario === "Medico" ?
                                "CRM"
                                :
                                "CPF"
                        }
                    </LabelUser>

                    {
                        editar != false ?
                            <Input
                                onChangeText={(txt) => {
                                    tipoUsuario == "Medico" ?
                                        setCrm(txt)
                                        :
                                        setCpf(txt)
                                }}
                                value={
                                    tipoUsuario === "Medico" ?
                                        crm
                                        :
                                        cpf
                                }
                            />
                            :
                            <InputUser
                                placeholder={tipoUsuario === "Medico" ?
                                    user.crm
                                    :
                                    user.cpf
                                }
                            />
                    }

                    <LabelUser>Endereço</LabelUser>


                    <InputUser
                        placeholder={
                            address ?
                                address != undefined ?
                                    address.logradouro != undefined ?
                                        `${address.logradouro} - ${address.bairro}`
                                        :
                                        "Não encontrado"
                                    :
                                    ""
                                :
                                `${user.endereco.logradouro}`
                        }
                    />

                    <CityContainer>
                        <View>
                            <LabelUser>CEP</LabelUser>

                            {
                                editar != false ?
                                    <InputCityEditable
                                        maxLength={8}
                                        onChangeText={(txt) => setCep(txt)}
                                        value={cep}
                                    />
                                    :
                                    <InputCity
                                        value={
                                            cep == "" ?
                                                user.endereco.cep
                                                :
                                                cep
                                        }
                                    />
                            }
                        </View>

                        <View>
                            <LabelUser>Cidade</LabelUser>

                            <InputCity
                                placeholder={
                                    address ?
                                        address != undefined ?
                                            address.localidade != undefined ?
                                                `${address.localidade}`
                                                :
                                                "Não encontrado"
                                            :
                                            ""
                                        :
                                        `${user.endereco.cidade}`
                                }
                            />
                        </View>
                    </CityContainer>

                    {
                        editar != false ?
                            <Button
                                style={{ marginBottom: 50 }}
                                onPress={() => { HandleEditar(editar) }}
                            >
                                <ButtonTitle>Salvar</ButtonTitle>
                            </Button>
                            :

                            <>
                                <Button onPress={() => { HandleEditar(editar) }}>
                                    <ButtonTitle>Editar</ButtonTitle>
                                </Button>

                                <ButtonUser onPress={() => UserLogout() && navigation.replace("Login")}>
                                    <ButtonTitle>Logout</ButtonTitle>
                                </ButtonUser>
                            </>

                    }

                    <CameraModal
                        getMediaLibrary={true}
                        visible={showCamera}
                        setShowCamera={setShowCamera}
                        setPhotoUpload={setPhoto}
                    />
                </Content>
            </ContainerUser >
        )
    }
}