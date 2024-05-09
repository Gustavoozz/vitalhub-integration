import styled from "styled-components";

export const ModelBack = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
`

export const ModalContent = styled.View`
    width: 90%;

    padding: 30px 30px 10px;
    align-items: center;
    
    border-radius: 10px;
    background-color: #FFF;
`

export const ModalText = styled.Text`
    width: 90%;

    margin-bottom: 20px;

    font-family: 'Quicksand_500Medium';
    font-size: 16px;
    text-align: center;
`

export const ModalTextMini = styled(ModalText)`
    font-size: 14px;
    color: #4E4B59;
    text-align: left;
`

export const ModalTextBig = styled(ModalText)`
    margin-bottom: 0px;

    font-family: 'Quicksand_600SemiBold';
    color: #33303E;
    text-align: left;   
`