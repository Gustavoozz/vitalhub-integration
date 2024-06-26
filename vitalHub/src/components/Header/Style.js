import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

export const BoxUser = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ImageUser = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const DataUser = styled.View``;

export const DataUser2 = styled.View`
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;


export const TextDefault = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_500Medium";
`;

export const NameUser = styled.Text`
  color: #fbfbfb;
  font-size: 16px;
  margin-top: 5px;
  font-family: "MontserratAlternates_600SemiBold";
`;

export const ContainerHeader = styled(LinearGradient).attrs({
  colors: ["#60BFC5", "#496BBA"],
  start: { x: -0.05, y: 1.08 },
  end: { x: 1, y: 0 },
  
})`
  width: 100%;
  padding: 20px;
  padding-top: 35px;
  padding-bottom: 22px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px 4px 15px #00000014;
`;