import styled from 'styled-components/native';

export const DrawerContainer = styled.View`
    height: 100%;
    background-color: red;
`;

export const DrawerHeader = styled.View`
    padding: 0 20px 0 15px;
    height: 10%;
    background-color: #f1f1f1;
    justify-content: center;
`;

export const DrawerMain = styled.View`
    padding: 15px 10px 0px 20px;
    height: 77%;
`;

export const DrawerFooter = styled.View`
    background-color: ${props => props.theme.corTitulo};
    height: 13%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;  

export const DrawerHeaderTitle = styled.View`
    display: flex;
    flex-direction: row;
`;

export const CloseIcon = styled.TouchableOpacity`
    height: 60px;
    align-items: center;
    justify-content: center;
    width: 89%;
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

`;

export const FooterImage = styled.View`
    height: 60px;
    width: 60px;
    border-radius: 50px;
    background-color: #fff;
    position: absolute;
    top: 50px;
    left: 15px;
`;

export const FooterUserName = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 15px;
`;

export const ItemHelpMain = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px; 
`;
export const ItemIconFooter = styled.View`
    
`;

export const Luffy = styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 50px;
    margin-right: 10px;
`;





