import styled from 'styled-components/native';

export const Header = styled.View`
    width: 100%;
    height: ${props => props.theme.headerHeight};
    background-color: ${props => props.theme.headerColor};
    flex-direction: row;
    padding: 0px 20px 0px 20px;
`;

export const IconSection = styled.View`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 10px;
`;

export const BarsIcon = styled.View`
    height: ${props => props.theme.headerHeight};
    width: ${props => props.theme.headerHeight};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ZapIcon = styled.View`
    height: ${props => props.theme.headerHeight};
    width: ${props => props.theme.headerHeight};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const H1Section = styled.View`
    height: ${props => props.theme.headerHeight};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const H1 = styled.Text`
    color: ${props => props.theme.mainColor};
    font-weight: ${props => props.theme.negrito};
    font-size: 23px;
`;

export const Main = styled.View`
    background-color: ${props => props.theme.mainColor};
    display: flex;
    padding: 20px 10px 0 10px;
    padding-bottom: 60px;
`;

export const MainItem = styled.View`
    width: 100%;
    height: 30%;
    background-color: #254A7B;
    border-radius: 5px;
    display: flex;
    justify-content: center;
`;

export const CarIcon = styled.View`
    position: absolute;
    left: 20px;
    bottom: 20px;
`;

export const MajorIcon = styled.View`
    height: 35px;
    width: 35px;
    background-color: ${props => props.theme.mainColor};
    position: absolute;
    left: 20px;
    bottom: 20px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const MajorIconText = styled.Text`
    font-weight: bold;
    font-size: 22px;
    color: #fff;
`;

export const MinorIcon = styled.View``;

export const Descrip = styled.View`
    display: flex;
    
`;

export const DescripNum = styled.Text`
    color: ${props => props.theme.mainColor};
    font-weight: ${props => props.theme.negrito};
    font-size: 22px;
`;

export const DescripText = styled.Text`
    color: ${props => props.theme.mainColor};
    font-weight: ${props => props.theme.negrito};
    font-size: 16px;
`;

export const ButtonVer = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    height: 40px;
    width: 100%;
    background-color: #4576B6;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-left: 10px;
    
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: ${props => props.theme.negrito};
    line-height: 40px;
`;

export const MainSection = styled.View`
    height: 80px;
`;