import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoClass from './models/todoClass';

function App() {
	const [todos, setTodos] = useState([
		new TodoClass('1', 'asd'),
		new TodoClass('2', 'asdw'),
		new TodoClass('3', '3'),
	]);

	const onAddTodoHandler = (todoText: string) => {
		const newTodo = new TodoClass(todoText);
		setTodos((prevState) => [...prevState, newTodo]);
	};
	const onRemoveTodoHandler = (todoId: string) => {
		setTodos((prevState) => prevState.filter((el) => el.id !== todoId));
	};

	return (
		<div>
			<Todos items={todos} onRemoveTodo={onRemoveTodoHandler} />
			<NewTodo onAddTodo={onAddTodoHandler} />
		</div>
	);
}

export default App;
