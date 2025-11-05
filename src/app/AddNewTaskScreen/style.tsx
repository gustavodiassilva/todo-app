
import styled from 'styled-components/native';

export const InputCustom = styled.TextInput`
    height: 40px;
    border-color: gray;
    border-width: 1px;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: black;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content:center;
    align-items: center;
    padding:10px;
`;

export const Header = styled.View`
    height: 60px;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
`;

export const Body = styled.View`
    flex: 1;
    justify-content:flex-start;
    align-items:center;
    padding: 10px;
    gap: 15px;
    width: 100%;
`;

export const BackButton = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 5px;
`;


