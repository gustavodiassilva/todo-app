import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Index() {

    const [text, onChangeText] = React.useState('')
    return (
        <View>

            <Text>Todo App</Text>

            <Text>Your tasks</Text>


            <View>
                <TextInput value={text} onChangeText={onChangeText} />

                <TouchableOpacity>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}