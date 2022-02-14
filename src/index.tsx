import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodosContextProvider } from './store/todo-context';

ReactDOM.render(
	<React.StrictMode>
		<TodosContextProvider>
			<App />
		</TodosContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
