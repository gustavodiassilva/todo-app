
import AntDesign from '@expo/vector-icons/AntDesign';
import { NewTask } from "./style";

export default function AddNewTask() {
    return (
        <NewTask>
            <AntDesign name="plus" size={20} color="black" />
        </NewTask>
    );
}