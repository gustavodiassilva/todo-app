
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { NewTask } from "./style";

export default function AddNewTask() {
    const route = useRouter();
    return (
        <NewTask onPress={() => { route.navigate('/AddNewTaskScreen/AddNewTask') }}>
            <AntDesign name="plus" size={20} color="black" />
        </NewTask>
    );
}