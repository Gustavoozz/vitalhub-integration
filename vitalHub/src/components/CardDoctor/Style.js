import styled from "styled-components/native"

export const DoctorContainer = styled.View`
    width: 90%;
    height: 102px;

    padding: 10px;
    justify-content: center;
    align-items: center;
    margin: 5px;

    background-color: #FFF;
    border-radius: 5px;
    elevation: 5;
    
    border: ${(props) => props.selected == true ?
        "5px solid #60BFC5"
        :
        "none"
    };
`

export const DoctorTouchable = styled.TouchableOpacity`
    width: 100%;
    height: 100%;

    align-items: center;
    flex-direction: row;
    gap: 10px;
`

export const DoctorContent = styled.View`
    justify-content: center;

    gap: 10px;
`

export const DoctorContentImage = styled.Image`
    width: 77px;
    height: 80px;

    border-radius: 5px;
`

export const DoctorTitle = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
    color: #33303E;
`

export const DoctorText = styled.Text`
    font-family: "Quicksand_500Medium";
    font-size: 14px;
    color: #8C8A97;
`

export const ExtraContainer = styled.ScrollView`
    flex: 1;
`

export const ExtraContent = styled.View`
    width: 100%;

    justify-content: center;
    align-items: center;
`