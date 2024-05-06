import { styled, css } from "styled-components/native";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#34898F",
    autoCapitalize: "none"
})`
    width: 90%;
    height: 60px;

    margin-bottom: 15px;
    padding: 16px;

    border: 2px solid #49B3BA;
    border-radius: 5px;
    background-color: #FAFAFA;

    color: #34898F;
    font-family: "MontserratAlternates_600SemiBold";
`

export const InputError = styled(Input).attrs({
    placeholderTextColor: "#DB2C15"
})`
    border: 2px solid #DB163D;

    color: #DB2C15;
`

export const InputVerify = styled(Input).attrs({
    placeholder: "0",
    maxLength: 1
})`
    width: 20%;
    height: 75px;
    
    padding: 0px;
    align-items: center;
    justify-content: center;

    text-align: center;
    font-size: 40px;
    font-family: 'Quicksand_600SemiBold';
    color: #34898F;
`

export const InputUser = styled.TextInput.attrs({
    placeholderTextColor: '#33303E',
    multiline: true,
    editable: false,
})`
    height: 54px;
    width: 90%;

    padding-left: 20px;
    
    border-radius: 5px;
    background-color: #F5F3F3;

    font-family: 'MontserratAlternates_500Medium';
`

export const PhotoButton = styled.Image`
    width: 90%;
    height: 111px;

    padding-left: 20px;
    padding-bottom: 0px;
    
    background-color: #F5F3F3;
    border-radius: 5px;
`

export const InputCity = styled(InputUser)`
    width: 165px;
`

export const InputCityEditable = styled(InputCity).attrs({
    editable: true
})`

border: 2px solid #49B3BA;
    border-radius: 5px;
    background-color: #FAFAFA;

    color: #34898F;
    font-family: "MontserratAlternates_600SemiBold";
`

export const InputProntuario = styled(Input)`
    height: 121px;

    padding-bottom: 90px;

    font-family: 'MontserratAlternates_500Medium';
`

export const InputProntuarioNonEditable = styled(InputProntuario).attrs(({ 
    editable: false,
    placeholderTextColor: "#33303E"
     }))`
    background-color: #F5F3F3;
    color: #33303E;
    border: none;
`