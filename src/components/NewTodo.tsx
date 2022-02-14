import React, { useRef } from 'react';

function NewTodo({ onAddTodo }: { onAddTodo: (todoText: string) => void }) {
	const todoRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const enteredText = todoRef.current!.value;

		if (enteredText.trim() === '') return;

		onAddTodo(enteredText);
		todoRef.current!.value = '';
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor='text'> Add To Do</label>
			<input type='text' id='text' ref={todoRef} />
			<button> Add ToDo</button>
		</form>
	);
}

export default NewTodo;
