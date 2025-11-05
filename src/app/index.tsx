import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';
import HomeIcon from 'assets/icons/HomeIcon';
import React from 'react';
import { Text } from 'react-native';
import { Container } from './style';

export default function Index() {

    const [text, onChangeText] = React.useState('')
    return (
        <>
            <Container>

                <Text>Welcome to Todo App</Text>

                <HomeIcon />


            </Container >
            <BottomNavigation />

        </>

    )
}