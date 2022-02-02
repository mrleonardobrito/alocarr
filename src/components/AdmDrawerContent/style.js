import styled from 'styled-components/native';

export const DrawerContainer = styled.View`
`;

export const DrawerHeader = styled.View`
    padding: 0 20px 0 15px;
    height: 60px;
    background-color: #f1f1f1;
    justify-content: center;
`;

export const DrawerMain = styled.View`
    padding: 15px 10px 0px 20px;
`;

export const DrawerFooter = styled.View`
    height: 80px;
    background-color: ${props => props.theme.corTitulo};
    
`;  

export const DrawerHeaderTitle = styled.View`
    display: flex;
    flex-direction: row;
`;

export const CloseIcon = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    top: 0;
    height: 60px;
    align-items: center;
    justify-content: center;
    width: 60px;
    color: ${props => props.theme.corTitulo};
`;

export const SearchContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`;

export const SearchInput = styled.TextInput`
    width: 80%;
    height: 45px;
    background-color: ${props => props.theme.corTitulo};
    border-bottom-right-radius: 13px;
    border-top-right-radius: 13px;
    font-weight: bold;
    padding: 0px 10px 0 10px;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 20%;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.corTitulo};
    border-bottom-left-radius: 13px;
    border-top-left-radius: 13px;
    color: #fff;
`;

export const ItemsContainer = styled.View``;

export const ItemMain = styled.TouchableOpacity`
    height: 45px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    border-radius: 13px;
`;

export const ItemText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.corTitulo};
    margin-left: 12px;

`;
export const ItemIcon = styled.View`
    margin-left: 6%;
    width: 15%;
`;

export const FooterIcon = styled.View`
    position: absolute;
    right: 20px;
    top: 23px;
`;

export const FooterImage = styled.View`
    height: 60px;
    width: 60px;
    border-radius: 50px;
    background-color: #fff;
    position: absolute;
    top: 10px;
    left: 15px;
`;

export const FooterUserName = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    position: absolute;
    left: 85px;
    line-height: 80px;
`;

export const ItemHelpMain = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    height: 40px;
    padding: 0 0 0 11%;
`;
export const DrawerFooterContainer = styled.View`
    position: relative;
    bottom: -15.5%;
`;
export const ItemIconFooter = styled.View`
    
`;

export const Luffy = styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 50px;
`;





