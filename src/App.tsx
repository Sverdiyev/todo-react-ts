import { useContext } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoContext from './store/todo-context';

function App() {
	const todoCtx = useContext(TodoContext);

	return (
		<div>
			<Todos items={todoCtx.items} onRemoveTodo={todoCtx.removeTodo} />
			<NewTodo onAddTodo={todoCtx.addTodo} />
		</div>
	);
}

export default App;
