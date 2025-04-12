import React from 'react';
import { TodoProvider } from './components/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div style={styles.container}>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
  },
};

export default App;
