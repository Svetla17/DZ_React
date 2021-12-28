import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/todoSlice';

const TodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodo({
					title: value,
				})
			);
		}
	};

	return (
		<form onSubmit={onSubmit} className=''>			
			<input
				type='text'
				className=''
				placeholder='Add your new todo'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				+
			</button>
		</form>
	);
};

export default TodoForm;