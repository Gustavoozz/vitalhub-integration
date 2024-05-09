import styled from "styled-components";
import { Button } from "../Button/Style";

export const PatientModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
`


export const ModalContent = styled.View`
    padding: 30px 30px 10px;
    width: 90%;
    border-radius: 10px;
    background-color: #FFF;
    align-items: center;
`

export const ModalText = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 16px;
    width: 90%;
    text-align: center;
`

export const ModalButton = styled(Button)`
    width: 100%;
`