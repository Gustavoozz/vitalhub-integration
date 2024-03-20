import styled from "styled-components";

export const LinkMedium = styled.Text`
    font-family: MontserratAlternates_500Medium;
    font-size: 14px;
    color: #8C8A97;
    margin-right: 190px;
    text-decoration: underline;
`

export const TextAccount = styled.Text`
    font-family: MontserratAlternates_500Medium;
    font-size: 14px;
    text-align: center;
`

export const TextReenviar = styled(LinkMedium)`
    font-family: 'Quicksand_600SemiBold';
    position: relative;
    left: 100px;
    margin-top: 30px;
    color: #344F8F;
`

export const CancelText = styled(TextReenviar)`
    margin-bottom: 30px;
`