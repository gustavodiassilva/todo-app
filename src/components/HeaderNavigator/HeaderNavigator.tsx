
import AntDesign from '@expo/vector-icons/AntDesign';
import AppIcon from 'assets/icons/AppIcon';
import { Container, Header, HeaderItem } from './style';


export default function HeaderNavigator() {
    return (
        <Container>
            <Header>
                <HeaderItem>
                    <AntDesign name="menu" size={24} color="black" />
                </HeaderItem>
                <HeaderItem>
                    <AppIcon />
                </HeaderItem>
                <HeaderItem>
                    <AntDesign name="user" size={24} color="black" />
                </HeaderItem>
            </Header>
        </Container>
    );
}