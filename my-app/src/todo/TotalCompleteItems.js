import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {  deleteTodo } from './redux/todoSlice';


const TotalCompleteItems = () => {
	const todos = useSelector((state) =>
		state.todos)

	const dispatch = useDispatch();

	const handleDeleteClick = () => {
			dispatch(deleteTodo());
		};	

	return (
	<>
		<h4 >You have {todos.length} pending tasks</h4>
			<button onClick={handleDeleteClick}>
					Clear all
				</button>
				
	</>
	)};

export default TotalCompleteItems;