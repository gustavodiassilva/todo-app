
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Container } from '../style';
import { BackButton, Body, Header, InputCustom, Title } from './style';
export default function AddNewTask() {
    const route = useRouter();

    return (
        <Container>
            <Header>
                <BackButton onPress={() => { route.back() }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </BackButton>
            </Header>

            <Body>
                <Title>Adicionar nova task</Title>
                <InputCustom />
            </Body>

        </Container>
    );
}