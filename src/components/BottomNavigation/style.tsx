import { styled } from 'styled-components/native';

export const BottomNavContainer = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background-color: #363636;
    width: 100%;
    height: 60px;
    position:absolute;
    bottom: 0;
`;

export const BottomNavItem = styled.View`
    flex: 1;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const BottomNavItemTouch = styled.TouchableOpacity`
    flex: 1;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

