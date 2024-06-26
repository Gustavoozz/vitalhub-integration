import styled, { css } from "styled-components";

export const ContainerCard = styled.TouchableOpacity`
    width: 320px;
    height: 84px;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 15px;

    background-color: #FFF;
    elevation: 5;
    border-radius: 5px;

    border: ${(props) => props.selected == true ?
        "5px solid #60BFC5"
        :
        "none"
    };
`

export const TitleCard = styled.Text`
    color: #33303E;
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
`

export const TextCard = styled.Text`
    color: #4E4B59;
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
`

export const ContentCard = styled.View`
    gap: 10px;
`

export const ExtraContainer = styled.View`
    width: 100%;

    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`