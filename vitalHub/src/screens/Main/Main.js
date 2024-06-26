import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Perfil } from '../Perfil/Perfil';
import { ContentIcon, TextIcon } from './Style';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { UserDecodeToken } from '../../utils/Auth';
import { useEffect, useState } from 'react';
import { Localization } from '../Localization/Localization';
import { Home } from '../Home/Home';

const BottomTab = createBottomTabNavigator();




export const Main = () => {
    // CONSTS
    const [tipoUsuario, setTipoUsuario] = useState("");


    
    // FUNCTIONS
    const ProfileLoad = async () => {

        const token = await UserDecodeToken();

        setTipoUsuario(token.role);
    }



    // EFFECTS
    useEffect(() => {
        ProfileLoad();
    }, [])



    return (
        <BottomTab.Navigator
            initialRouteName="Home"

            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: "#FFFFFF",
                    height: 80,
                    paddingTop: 10
                },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    if (route.name === "Home") {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={
                                    focused ?
                                        "#ECF2FF" :
                                        "transparent"
                                }
                            >
                                <FontAwesome
                                    name="calendar"
                                    size={18}
                                    color={
                                        focused ?
                                            "#607EC5"
                                            :
                                            "#4E4B59"
                                    }
                                />
                                {focused && <TextIcon style={{ color: "#607EC5" }}>Agenda</TextIcon>}
                            </ContentIcon>
                        )

                    } else if (route.name === "Clinicas") {
                        return (
                            <>
                                {
                                    tipoUsuario === "Medico" ?
                                        <ContentIcon
                                            tabBarActiveBackgroundColor={
                                                focused ?
                                                    "#ECF2FF"
                                                    :
                                                    "transparent"
                                            }
                                        >
                                            <FontAwesome5
                                                name="hospital"
                                                size={18}
                                                color={
                                                    focused ?
                                                        "#607EC5" :
                                                        "#4E4B59"
                                                }
                                            />
                                            {focused && <TextIcon style={{ color: "#607EC5" }}>Clínicas</TextIcon>}
                                        </ContentIcon>
                                        :
                                        null
                                }
                            </>
                        )
                    }

                    else {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={
                                    focused ?
                                        "#ECF2FF" :
                                        "transparent"
                                }
                            >
                                <FontAwesome5
                                    name="user-circle"
                                    size={18}
                                    color={
                                        focused ?
                                            "#607EC5" :
                                            "#4E4B59"
                                    }
                                />
                                {focused && <TextIcon style={{ color: "#607EC5" }}>Perfil</TextIcon>}
                            </ContentIcon>
                        )
                    }
                }
            })}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
            />

            {
                tipoUsuario === "Medico" ?
                    <BottomTab.Screen
                        name="Clinicas"
                        component={Localization}
                    />
                    :
                    null
            }

            <BottomTab.Screen
                name="Perfil"
                component={Perfil}
            />
        </BottomTab.Navigator>
    )
}