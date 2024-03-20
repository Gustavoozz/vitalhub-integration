import styled, { css } from "styled-components";

export const ButtonTypeStyle = styled.TouchableHighlight`
    padding: 12px 14px;
    border-radius: 5px;
    width: 100px;
    ${props => props.clickButton ? css`
    background-color: #34898F;
    ` : css`
    background-color: #FBFBFB;
    border: 2px solid #34898F;
    `}
`

export const ButtonTextStyleAppointment = styled.Text`
    font-size: 12px;
    font-family: 'MontserratAlternates_600SemiBold';
    text-align: center;
    ${props => props.clickButton ? css`
    color: #FBFBFB;
    ` : css`
    color: #34898F;
    `}
`