import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';
import { TodoContext } from './TodoContext';

const AddTodo = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add task"
      />
      <Button
        title="Add"
        onPress={() => {
          if (text.trim()) {
            addTodo(text);
            setText('');
            Keyboard.dismiss(); // hides the keyboard after adding
          }
        }}
        color="#007AFF" // iOS button color, optional for Android as well
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },
});

export default AddTodo;
