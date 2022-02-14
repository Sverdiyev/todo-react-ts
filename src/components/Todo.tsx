import React from 'react';

interface PropTypes {
	children: React.ReactNode;
}
function Todo({ children }: PropTypes) {
	return <li>{children}</li>;
}

export default Todo;
