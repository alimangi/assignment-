import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
  const { todos, toggleTodo } = useContext(TodoContext);

  return (
    <div style={styles.container}>
      {todos.map(todo => (
        <div
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={styles.todo}
        >
          <span style={todo.completed ? styles.completed : styles.text}>
            {todo.text}
          </span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '10px',
  },
  todo: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    cursor: 'pointer',
  },
  text: {
    fontSize: '16px',
  },
  completed: {
    fontSize: '16px',
    textDecorationLine: 'line-through',
    color: 'gray',
  },
};

export default TodoList;
