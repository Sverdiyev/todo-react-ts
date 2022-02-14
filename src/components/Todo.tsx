import React from 'react';

interface PropTypes {
	children: React.ReactNode;
	onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
	id: string;
}
function Todo({ children, onClick, id }: PropTypes) {
	return (
		<li id={id} onClick={onClick}>
			{children}
		</li>
	);
}

export default Todo;
