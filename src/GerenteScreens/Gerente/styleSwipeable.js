import styled from 'styled-components/native';

export const SwipeableDiv = styled.View`
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 120px;
    border-radius: 6px;
    background-color: #32cd32;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`;

export const SwipeableLeftDiv = styled.View`
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 120px;
    border-radius: 6px;
    background-color: #c3453f;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    display: flex;
    flex: 1;
`;

export const SwipeableButton = styled.TouchableOpacity`
    
`;
export const SwipText = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${props => props.theme.corTitulo}
`;
export const SwipIcon = styled.View`
`;