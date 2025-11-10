import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';
import HeaderNavigator from '@/components/HeaderNavigator/HeaderNavigator';
import HomeIcon from 'assets/icons/HomeIcon';
import React from 'react';
import { Text } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Container } from './style';


export default function Index() {
    return (
        <>
            <Container>
                <FlashMessage position="top" floating statusBarHeight={20} />
                <HeaderNavigator />

                <Text>Welcome to Todo App</Text>

                <HomeIcon />


            </Container >
            <BottomNavigation />

        </>

    )
}