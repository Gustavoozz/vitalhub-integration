
import { AntDesign } from "@expo/vector-icons"
import { Button } from "../../components/Button/Style"
import { Hour } from "../../components/CardPaciente/Style"
import { Container } from "../../components/Container/Style"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { AvaliationInfo,  CancelLink,  CardContent, DayInfo, OtherContent, StarText, TextClinic, TextContainer } from "./Style"
import { Animated } from "react-native"

export const ClinicSelect = ({ navigation }) => {
    const animation = new Animated.Value(0);
    const inputRange = [0, 1];
    const outputRange = [0.95, 1.0];
    const scale = animation.interpolate({inputRange, outputRange});
  
    const onPressIn = () => {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    };
    const onPressOut = () => {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    };

    
    return(
        <Container>
            <Title style={{ marginTop: 30, marginBottom: 70 }}>Selecionar clínica</Title>

            <CardContent style={{ transform: [{scale}]}}
             activeOpacity={1}
             onPressIn={onPressIn}
             onPressOut={onPressOut}
            >
            <TextContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Clínica Natureh</Title>
                <TextClinic>São Paulo, SP</TextClinic>  
            </TextContainer>

            <OtherContent>
                <AvaliationInfo>
                <AntDesign name="star" size={20} color="#F9A620" />
                <StarText>4,5</StarText> 
                </AvaliationInfo>
                

                <DayInfo>
                <AntDesign name="calendar" size={17} color="#49B3BA" />
                <Hour>Seg-Sex</Hour>
                </DayInfo> 
             </OtherContent>     
         
            </CardContent>


            <CardContent style={{ transform: [{scale}]}}
            activeOpacity={1}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            >
            <TextContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '100%' }}>Clinica Villa Lobos</Title>
                <TextClinic>São Paulo, SP</TextClinic>  
            </TextContainer>

            <OtherContent>
                <AvaliationInfo>
                <AntDesign name="star" size={20} color="#F9A620" />
                <StarText>4,2</StarText> 
                </AvaliationInfo>
                

                <DayInfo>
                <AntDesign name="calendar" size={17} color="#49B3BA" />
                <Hour>Seg-Sex</Hour>
                </DayInfo> 
             </OtherContent>     
         
            </CardContent>

            <CardContent
            style={{ transform: [{scale}]}}
            activeOpacity={1}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            >
            <TextContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '100%' }}>Diamond Pró-Mulher</Title>
                <TextClinic>Taboão, SP</TextClinic>  
            </TextContainer>

            <OtherContent>
                <AvaliationInfo>
                <AntDesign name="star" size={20} color="#F9A620" />
                <StarText>4,8</StarText> 
                </AvaliationInfo>
                

                <DayInfo>
                <AntDesign name="calendar" size={17} color="#49B3BA" />
                <Hour>Seg-Sab</Hour>
                </DayInfo> 
             </OtherContent>     
         
            </CardContent>

            <CardContent style={{ transform: [{scale}]}}
            activeOpacity={1}
            onPressIn={onPressIn}
            onPressOut={onPressOut}>
            <TextContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '100%' }}>SP Oncologia Clínica</Title>
                <TextClinic>Taboão, SP</TextClinic>  
            </TextContainer>

            <OtherContent>
                <AvaliationInfo>
                <AntDesign name="star" size={20} color="#F9A620" />
                <StarText>4,2</StarText> 
                </AvaliationInfo>
                

                <DayInfo>
                <AntDesign name="calendar" size={17} color="#49B3BA" />
                <Hour>Seg-Sab</Hour>
                </DayInfo> 
             </OtherContent>     
            </CardContent>

            <Button 
            onPress={() => navigation.replace("DoctorSelect")}
            style={{ marginTop: 20 }}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

          <CancelLink onPress={() => navigation.replace("PacienteConsultas")}>Cancelar</CancelLink>

            </Container>
    )
}