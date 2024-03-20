import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PacienteConsultas } from '../PacienteConsultas/PacienteConsultas';
import { Perfil } from '../Perfil/Perfil';
import { ContentIcon, TextIcon } from './Style';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Text } from 'react-native';

const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return(
        <BottomTab.Navigator
        initialRouteName="Home"

        screenOptions={({ route }) => ({
            tabBarStyle : { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
            tabBarActiveBackgroundColor : "transparent",
            tabBarShowLabel : false,
            headerShown : false,

            tabBarIcon : ({ focused }) => {
                if( route.name === "Home" ){
                    return(
                        <ContentIcon
                            tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent" }
                        >
                            <FontAwesome name="calendar" size={18} color={ focused ? "#607EC5" : "#4E4B59"}/>
                            { focused && <TextIcon style={{ color: "#607EC5" }}>Agenda</TextIcon>}
                        </ContentIcon>
                    )
                    
                } else {
                    return(
                        <ContentIcon
                            tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent" }
                        >
                            <FontAwesome5 name="user-circle" size={18} color={ focused ? "#607EC5" : "#4E4B59"}/>
                            { focused && <TextIcon style={{ color: "#607EC5" }}>Perfil</TextIcon>}
                        </ContentIcon>
                    )
                }
            }
        })}
            
        >

           

            <BottomTab.Screen
            name="Home"
            component={PacienteConsultas}
            />

            <BottomTab.Screen
            name="Perfil"
            component={Perfil}
            />

        </BottomTab.Navigator>
    )
}