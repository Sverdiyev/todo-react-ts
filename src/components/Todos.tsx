import React from 'react';
import TodoClass from '../models/todoClass';
import Todo from './Todo';

interface PropTypes {
	items: TodoClass[];
	onRemoveTodo: (todoId: string) => void;
}
function Todos({ items, onRemoveTodo }: PropTypes) {
	const onClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
		// const value = (e.target as HTMLLIElement).value;
		const value = e.currentTarget.id;
		onRemoveTodo(value);
	};

	return (
		<ul>
			{items.map((todo) => (
				<Todo id={todo.id} key={todo.id} onClick={onClickHandler}>
					{todo.text}
				</Todo>
			))}
		</ul>
	);
}

export default Todos;
