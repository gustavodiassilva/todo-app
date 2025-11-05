import { DateModalProps } from "@/Models/DateModel";
import AntDesign from "@expo/vector-icons/AntDesign";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Modal, Platform, TouchableHighlight, View } from "react-native";


export default function DatePickerModal({ visible, date, onClose, onDateChange }: DateModalProps) {

    return (
        <Modal visible={visible} backdropColor="#f8f9fa" animationType="slide">
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableHighlight onPress={onClose} underlayColor="#ddd" style={{ padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5, marginBottom: 20, position: 'absolute', top: 60, left: 20 }}>
                    <AntDesign name="close" size={15} color="black" />
                </TouchableHighlight>
                <DateTimePicker
                    value={date}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'inline' : 'default'}
                    onChange={(_, selectedDate) => {
                        if (selectedDate) {
                            onDateChange(selectedDate);
                        }
                        onClose();
                    }}
                />
            </View>
        </Modal>
    );

}
