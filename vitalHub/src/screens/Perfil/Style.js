import styled from "styled-components/native";

export const Content = styled.View`
    width: 100%;

    align-items: center;
    justify-content: center;
`

export const ButtonCamera = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #FBFBFB;
    background-color: #496BBA;
    
    position: absolute;
    right: 10px;
    bottom: 210px;
`

