import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    width:100%;
    height: 60px;
    position: absolute;
    top: 0;
`;

export const Header = styled.View`
    flex: 1; 
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    width: 100%;
`;

export const HeaderItem = styled.TouchableOpacity`
    height: 60px;
    justify-content: center;
    padding: 10px;
`;