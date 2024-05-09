import styled from "styled-components";

export const Logo = styled.Image`
    width: 70%;
    height: 120px;
    margin: 40px 0px;
`

export const ArrowIcon = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    margin-right: 340px;
    top: 40px;
`

export const UserDoctor = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 5px;

    margin-top: 0px;
`

export const NotificationBell = styled.Image`
    width: 18px;
    height: 18px;
    margin-left: 160px;
    margin-top: 20px;
`

export const Clock = styled.View`
    width: 14px;
    height: 14px;
    color: ${(props) => props.situacao == "pendente" ? "#4E4B59" : "#49B3BA"};
`


export const CalendarIcon = styled.Image`
    width: 10px;
    height: 10px;
`

export const StarIcon = styled.Image`
    width: 20px;
    height: 20px;
`

export const DoctorPicture = styled.Image`
    width: 85px;
    height: 90px;
    border-radius: 5px;
    margin-top: 15px;
`

export const MapClinic = styled.Image`
    width: 100%;
    height: 324px;
`

export const ModalDoctorPhoto = styled.Image`
    width: 100%;
    height: 201px;
    border-radius: 10px;
`
