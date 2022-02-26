import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 3%;
  background-color: ${props => props.theme.cliente.secondary};
  justify-content: space-between;
`;
export const Main = styled.View`
  height: 50%;
`
export const ItemContainer = styled.TouchableOpacity`
  height: 70px;
  width: 100%;
  margin-top: 5px;
  align-items: center;
  margin-bottom: 5px;
  flex-direction: row;
`
export const NavName = styled.Text`
  font-size: 16px;
  margin-left: 7px;
  color: ${props => props.theme.cliente.text1};
`
export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.cliente.background2};
`
export const SearchInput = styled.TextInput`
  margin-left: 5px;
`
export const VerticalLine = styled.View`
  opacity: 0.4;
  border: 1px solid ${props => props.theme.cliente.marked1};
`
export const BottomContainer = styled.View`
  height: 25%;
  justify-content: flex-end;
`
export const BottomItem = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
`
export const PerfilContainer = styled.View`
  height: 11%;
  width: 107%;
  left: -10px;
  bottom: -10px;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.cliente.primary};
`
export const UserImage = styled.Image`
  height: 100%;
  width: 75px;
`
export const LargerNavName = styled(NavName)`
  font-size: 18px;
`
export const HorizontalLine = styled.View`
  width: 105%;
  left: -3%;
  border: 0.5px solid ${props => props.theme.cliente.text1};
`