
import DatePickerModal from '@/components/DatePickerModal/DatePickerModal';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from 'react-native';
import { BackButton, Body, Container, ContainerButton, ContainerDate, ContainerIcons, Description, Header, IconsItem, InputCustom, NewTaskButton, Title } from './style';



export default function AddNewTask() {
    const [startDate, setStartDate] = useState(new Date());
    const [openStartDate, setOpenStartDate] = useState(false);
    const [endDate, setEndDate] = useState(new Date());
    const [openEndDate, setOpenEndDate] = useState(false);
    const [description, setDescription] = useState('');
    const maxLength = 200;

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
                <InputCustom
                    placeholder='Insira o Titulo da sua tarefa'
                    placeholderTextColor="#999"
                />
                <Description
                    placeholder="Descreva sua tarefa..."
                    placeholderTextColor="#999"
                    multiline
                    numberOfLines={5}
                    value={description}
                    onChangeText={setDescription}
                    maxLength={maxLength}
                />

                <ContainerIcons>
                    <IconsItem onPress={() => setOpenStartDate(true)}>
                        <Text> Start Date</Text>
                        <ContainerDate>
                            <MaterialIcons name="date-range" size={24} color="black" />
                            <Text>{startDate.toLocaleDateString()}</Text>
                        </ContainerDate>
                        <DatePickerModal
                            visible={openStartDate}
                            date={startDate}
                            onClose={() => setOpenStartDate(false)}
                            onDateChange={setStartDate} />
                    </IconsItem>
                    <IconsItem onPress={() => setOpenEndDate(true)}>
                        <Text> End Date</Text>
                        <ContainerDate>
                            <MaterialIcons name="date-range" size={24} color="black" />
                            <Text>{endDate.toLocaleDateString()}</Text>
                        </ContainerDate>
                        <DatePickerModal
                            visible={openEndDate}
                            date={endDate}
                            onClose={() => setOpenEndDate(false)}
                            onDateChange={setEndDate} />
                    </IconsItem>
                </ContainerIcons>
                <ContainerIcons carrousel snapInterval={80}>
                    <IconsItem>
                        <Text>priority</Text>
                    </IconsItem>
                    <IconsItem>
                        <Text>priority</Text>
                    </IconsItem>
                    <IconsItem>
                        <Text>priority</Text>
                    </IconsItem>
                    <IconsItem>
                        <Text>priority</Text>
                    </IconsItem>
                    <IconsItem>
                        <Text>priority</Text>
                    </IconsItem>
                    <IconsItem>
                        <Text>priority</Text>
                    </IconsItem>
                    <IconsItem>
                        <Text>priority</Text>
                    </IconsItem>
                </ContainerIcons>
                <ContainerButton>
                    <NewTaskButton onPress={() => { /* Add task logic here */ }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Task</Text>
                    </NewTaskButton>
                </ContainerButton>
            </Body>

        </Container>
    );
}