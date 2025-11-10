
import DatePickerModal from '@/components/DatePickerModal/DatePickerModal';
import { HorizontalCarrousel } from '@/components/HorizontalComponent/HorizontalComponent';
import { items } from '@/items';
import { notifier } from '@/lib/notifier';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { BackButton, Body, Container, ContainerButton, ContainerDate, ContainerIcons, Description, Header, IconsItem, InputCustom, NewTaskButton, Title } from './style';



export default function AddNewTask() {
    const [startDate, setStartDate] = useState(new Date());
    const [openStartDate, setOpenStartDate] = useState(false);
    const [endDate, setEndDate] = useState(new Date());
    const [openEndDate, setOpenEndDate] = useState(false);
    const [description, setDescription] = useState('');
    const maxLength = 200;

    const route = useRouter();

    
const handleItemPress = (): void => {
    return;
}

const handleTaskAdd = async ():Promise<T> => {
    await notifier.promise(fakeSave(), {
        loading: 'Salvando tarefa...',
        success: () => 'Tarefa salva com sucesso!',
        error: () => 'Erro ao salvar a tarefa.',
    })
}
    return (
        <Container>
            <FlashMessage position="top" floating statusBarHeight={20} />
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
                <HorizontalCarrousel 
                items={items}
                snapInterval={80}
                onItemPress={handleItemPress}
                />
                <ContainerButton>
                    <NewTaskButton onPress={() => { handleTaskAdd()}}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Task</Text>
                    </NewTaskButton>
                </ContainerButton>
            </Body>

        </Container>
    );
}

async function fakeSave() {
  return new Promise((resolve) => {
    console.log('Fake save operation started');
    setTimeout(() => resolve(true), 2000);
    console.log('Fake save operation completed');
  });
}