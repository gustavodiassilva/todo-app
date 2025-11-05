import AntDesign from '@expo/vector-icons/AntDesign';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddNewTask from "../AddNewTask/AddNewTask";
import { BottomNavContainer, BottomNavItem, BottomNavItemTouch } from "./style";



export default function BottomNavigation() {
    return (
        <SafeAreaView>
            <BottomNavContainer>
                <BottomNavItemTouch>
                    <AntDesign name="home" size={24} color="black" />
                    <Text>Home</Text>
                </BottomNavItemTouch>
                <BottomNavItem>
                    <AddNewTask />
                </BottomNavItem>
                <BottomNavItemTouch>
                    <AntDesign name="setting" size={24} color="black" />
                </BottomNavItemTouch>
            </BottomNavContainer>
        </SafeAreaView>
    );
}