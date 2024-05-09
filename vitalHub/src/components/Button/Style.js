import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    background-color: #496BBA;
    width: 90%;
    height: 44px;

    align-items: center;
    border-radius: 5px;
    margin-top: 40px;

    padding: 10px;
`

export const ButtonUnusable = styled.View`
    width: 90%;
    height: 44px;

    align-items: center;
    border-radius: 5px;
    margin-top: 40px;
    padding: 10px;

    background-color: #717171;
`

export const ButtonUser = styled(Button)`
        width: 50%;
        background-color: #ACABB7;
        margin-bottom: 40px;    
`

export const ButtonEdit = styled(Button)`
        background-color: #ACABB7;
`

export const ButtonGoogle = styled.TouchableOpacity`
    background-color: #FAFAFA;
    border: 1px solid #496BBA;
    width: 90%;

    border-radius: 5px;
    margin-top: 20px;
    height: 44px;
    
    align-items: center;
    padding: 10px;
    flex-direction: row; 

    justify-content: center;
    gap: 20px;
`

export const SelectButton = styled.TouchableOpacity`
    width: 30%;
    height: 45px;
    border-radius: 5px;

    background-color: #496BBA;
    border: 1px solid #496BBA;
    align-items: center;

    margin-top: 20px;
    justify-content: center;
`

export const WhiteSelectButton = styled(SelectButton)`
    background-color: #FBFBFB;
    border: 2px solid #607EC5;
`

export const SendPhotoButton = styled.TouchableOpacity`
    width: 192px;
    background-color: #49B3BA;
    border: 1px solid #49B3BA;

    height: 44px;
    border-radius: 5px;
    flex-direction: row;
    
    gap: 15px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const ButtonBack = styled.TouchableOpacity`
    background-color: transparent;
    width: 80%;
    align-items: center;
    justify-content: center;
`