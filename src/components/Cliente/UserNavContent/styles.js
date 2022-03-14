import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen')

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #35598B;
  justify-content: space-between;
`;
export const Header = styled.View`
  height: ${height * 0.08}px;
`
export const Main = styled.View`
  height: ${height * 0.54}px;
  padding: 0 3% 0 3%;
`
export const ItemContainer = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  justify-content: space-around;
  padding: 0px 10px 0px 10px;
  align-items: center;
  flex-direction: row;
`
export const NavName = styled.Text`
  width: 80%;
  font-size: 16px;
  font-family: "OpenSans-SemiBold";
  color: ${props => props.theme.cliente.text1};
`
export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.cliente.text1};
`
export const SearchInput = styled.TextInput`
  margin-left: 5px;
`
export const VerticalLine = styled.View`
  opacity: 0.4;
  border: 1px solid ${props => props.theme.cliente.marked1};
`
export const BottomContainer = styled.View`
  height: ${height * 0.25}px;
  width: 100%;
  justify-content: flex-end;
`
export const BottomItem = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  width: 100%;
  justify-content: space-around;
`
export const PerfilContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 40%;
  background-color: #2E568A;
`
export const UserImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 10px;
`
export const LargerNavName = styled(NavName)`
  font-size: 18px;
  text-align: right ;
  width: 56%;
`
// export const HorizontalLine = styled.View`
//   width: 105%;
//   left: -3%;
//   border: 0.5px solid ${props => props.theme.cliente.text1};
// `