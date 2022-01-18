import styled from "styled-components/native";

export const ExcluirHeader = styled.View`
    background-color: #ECECEC;
    height: 15%;
`;

export const ExcluirHeaderButton = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    height: 100%;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ExcluirMain = styled.View`
    padding: 10px 5px 10px 5px;
    background-color: white;
`;

export const ExcluirMainInput = styled.TextInput`
    border: 2px;
    border-radius: 5px;
    width: 120px;
    height: 40px;
`;

export const ExcluirFooter = styled.View`
    background-color: #ECECEC;
    height: 17%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
`;

export const ExcluirFooterButtonConfirm = styled.TouchableOpacity`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgreen;
    width: 90px;
    border-radius: 3px;
`;

export const ExcluirFooterButtonCancel = styled.TouchableOpacity`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    width: 90px;
    border-radius: 3px;
`;

