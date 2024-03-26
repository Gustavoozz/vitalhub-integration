import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MedicoConsultas } from '../MedicoConsultas/MedicoConsultas'
import { Perfil } from '../Perfil/Perfil';
import { ContentIcon, TextIcon } from './Style';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Text } from 'react-native';
import { Localization } from '../Localization/Localization';

const BottomTab = createBottomTabNavigator();

export const MainDoctor = () => {
    return(
        <BottomTab.Navigator
        initialRouteName="HomeDoctor"

        screenOptions={({ route }) => ({
            tabBarStyle : { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
            tabBarActiveBackgroundColor : "transparent",
            tabBarShowLabel : false,
            headerShown : false,

            tabBarIcon : ({ focused }) => {
                if( route.name === "HomeDoctor" ){
                    return(
                        <ContentIcon
                            tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent" }
                        >
                            <FontAwesome name="calendar" size={18} color={ focused ? "#607EC5" : "#4E4B59"}/>
                            { focused && <TextIcon style={{ color: "#607EC5" }}>Agenda</TextIcon>}
                        </ContentIcon>
                    )
                    
                } else if ( route.name === "Clinicas") {
                    return(
                        <ContentIcon
                            tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent" }
                        >
                            <FontAwesome5 name="hospital" size={18} color={ focused ? "#607EC5" : "#4E4B59"} />
                            { focused && <TextIcon style={{ color: "#607EC5" }}>Clínicas</TextIcon>}
                        </ContentIcon>
                    )
                }
                
                else {
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
            name="HomeDoctor"
            component={MedicoConsultas}
            />

            <BottomTab.Screen
            name="Clinicas"
            component={Localization}
            />

        
            <BottomTab.Screen
            name="Perfil"
            component={Perfil}
            />

        </BottomTab.Navigator>
    )
}