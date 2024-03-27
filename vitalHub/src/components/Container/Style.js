import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient"

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: white;
`

export const ContainerUser = styled.ScrollView`
    flex: 1;
    background-color: white;
`

export const InformationContent = styled.View`
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 70px;
   
    background-color: #FFFFFF;
    border: 1px solid white;

    elevation: 10;
    width: 80%;
    border-radius: 5px;

    height: 120px;
`

export const ContentProntuario = styled.View`
    align-items: center;
    justify-content: center;
    width: 80%;
    bottom: 30px;
`

export const PhotoContainer = styled.View`
    width: 100%;
    align-items: center;
    height: 330px;
`

export const CityContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 35px;
`

export const HeaderHome = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: { x: -0.03, y: 1.5 },
    end: { x: 1, y: 0 }
})`
   width: 100%;
   border-radius: 0px 0px 15px 15px;
   height: 102px;
   padding: 0px;

   flex-direction: row;
   align-items: center;
   justify-content: center;
   `

export const InfoContainer = styled.View`
    justify-content: center;
    padding-left: 10px;
    width: 40%;
    height: 50%;
    margin-right: 130px;
`

export const ImageContainer = styled.View`
    margin-left: 20px;
    width: 60px;
    margin-top: 50px;
    border: 1px solid red;
`

export const DoctorContainer = styled.View`
   flex: 1;
   width: 100%;

`

export const AppointmentBox = styled.TouchableOpacity`
   width: 60px;
   height: 60px;
   border-radius: 7px;
   elevation: 5;

   border: 1px solid #49B3BA;
   background-color: #49B3BA;
   align-items: center;
   justify-content: center;

   margin-left: 330px;
   margin-bottom: 20px;
`






