import Entypo from '@expo/vector-icons/Entypo';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddNewTask from "../AddNewTask/AddNewTask";
import { BottomNavContainer, BottomNavItem, BottomNavItemTouch } from "./style";



export default function BottomNavigation() {
    return (
        <SafeAreaView>
            <BottomNavContainer>
                <BottomNavItemTouch>
                    <Entypo name="home" size={24} color="black" />
                    <Text>Home</Text>
                </BottomNavItemTouch>
                <BottomNavItem>
                    <AddNewTask />
                </BottomNavItem>
                <BottomNavItemTouch>
                    <Text>Home</Text>
                </BottomNavItemTouch>
            </BottomNavContainer>
        </SafeAreaView>
    );
}