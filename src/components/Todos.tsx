import React from 'react';
import TodoClass from '../models/todoClass';
import Todo from './Todo';

interface PropTypes {
	items: TodoClass[];
}
function Todos({ items }: PropTypes) {
	return (
		<ul>
			{items.map((todo) => (
				<Todo key={todo.id}> {todo.text}</Todo>
			))}
		</ul>
	);
}

export default Todos;
