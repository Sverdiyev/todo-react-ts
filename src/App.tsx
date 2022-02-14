import React from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoClass from './models/todoClass';

function App() {
	const todos = [
		new TodoClass('1', 'asd'),
		new TodoClass('2', 'asdw'),
		new TodoClass('3', '3'),
	];
	return (
		<div>
			<Todos items={todos} />
			<NewTodo></NewTodo>
		</div>
	);
}

export default App;
