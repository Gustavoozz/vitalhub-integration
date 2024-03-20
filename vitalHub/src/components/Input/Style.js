import styled from "styled-components";

export const Input = styled.TextInput`
    width: 90%;
    border: 2px solid #49B3BA;
    height: 60px;
    border-radius: 5px;
    margin-bottom: 15px;
    color: #34898F;
    padding: 16px;
    background-color: #FAFAFA;
`

export const InputVerify = styled(Input)`
    width: 20%;
    font-size: 40px;
    height: 75px;
    padding: 0px;
    text-align: center;
    align-items: center;
    justify-content: center;
`

export const InputUser = styled.TextInput.attrs({
    placeholderTextColor: '#33303E',
    multiline: true,
})`
    width: 90%;
    background-color: #F5F3F3;
    border-radius: 5px;

    height: 54px;
    padding-left: 20px;
`

export const PhotoButton = styled.TouchableOpacity`
    width: 90%;
    background-color: #F5F3F3;
    border-radius: 5px;
    height: 111px;
    font-family: 'MontserratAlternates_500Medium';
    padding-bottom: 0px;

    height: 54px;
    padding-left: 20px;
`

export const InputCity = styled(InputUser)`
    width: 165px;
`

export const InputProntuario = styled(Input)`
    height: 121px;
    padding-bottom: 90px;
`