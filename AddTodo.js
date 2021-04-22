import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';

export const AddTodo = ({ onSublit }) => {
    const [value, setValue] = useState("");

    const pressHandler = () => {
    if (value.trim()) {
        onSublit(value);
        setValue("");
    }else{
        Alert.alert('Укажите название');
    }
};

return (
    <View style={styles.impuit}>
    <TextInput
    style={styles.impuit}
    onChangeText={setValue}
    value={value}
    placeholder="Напишите задачу"
    />
    <Button title = "Добавить" onPress={pressHandler} />
    </View>
    );
};
const styles = StyleSheet.create({
    block: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 15
    },
    impuit: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
});