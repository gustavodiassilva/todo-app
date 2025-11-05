
import styled from 'styled-components/native';

export const InputCustom = styled.TextInput`
 background-color: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  font-size: 15px;
  color: #333;
  border: 1px solid #e0e0e0;
  width: 100%;
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

export const Description = styled.TextInput`
    background-color: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  font-size: 15px;
  color: #333;
  min-height: 120px;
  text-align-vertical: top;
  border: 1px solid #e0e0e0;
  width: 100%;

`;


export const ContainerIcons = styled.View`
    width:100%;
    align-items: center;
    background-color: #f8f9fa;
    height: 45px;
    border-radius: 5px;
    top: 20px;
    padding: 10px 35px;
    flex-direction: row;
    justify-content: space-between;
`;

export const IconsItem = styled.TouchableOpacity`
    
`;

export const ContainerDate = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const DatePickerModal = styled.Modal``;

export const ContainerButton = styled.View`
    position: absolute;
    bottom: 50px;
    width: 100%;
    align-items: center;
`;

export const NewTaskButton = styled.TouchableOpacity`
    background-color: #007BFF;
    padding: 10px 20px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;
