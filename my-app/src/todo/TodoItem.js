import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from './redux/todoSlice';

	const TodoItem = ({ id, title }) => {
	const dispatch = useDispatch();
	

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id }));
	};

   

	return (
		<li >
			<div className='list' >
				<span className='spanList'>					
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>
					<img src="https://img.icons8.com/small/16/000000/trash--v1.png"/>
				</button>
			</div>
		</li>
	);
};



export default TodoItem;
