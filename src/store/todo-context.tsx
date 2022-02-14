import React, { createContext, useState } from 'react';
import TodoClass from '../models/todoClass';

const TodoContext = createContext<{
	items: TodoClass[];
	addTodo: (todoText: string) => void;
	removeTodo: (todoId: string) => void;
}>({
	items: [],
	addTodo: (todotext: string) => {},
	removeTodo: (id: string) => {},
});

export const TodosContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [todos, setTodos] = useState<TodoClass[]>([]);

	const onAddTodoHandler = (todoText: string) => {
		const newTodo = new TodoClass(todoText);
		setTodos((prevState) => [...prevState, newTodo]);
	};
	const onRemoveTodoHandler = (todoId: string) => {
		setTodos((prevState) => prevState.filter((el) => el.id !== todoId));
	};

	const state = {
		items: todos,
		removeTodo: onRemoveTodoHandler,
		addTodo: onAddTodoHandler,
	};
	return <TodoContext.Provider value={state}>{children}</TodoContext.Provider>;
};

export default TodoContext;
