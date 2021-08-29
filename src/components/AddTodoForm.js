import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const [cantv, setCantv] = useState('');
	
	const dispatch = useDispatch();


	const onSubmit = (event) => {
		event.preventDefault();
		/* title sería el payload */
		dispatch(addTodo({
			title: value,
			cantidad: cantv
		}));
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			>
			</input>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				style={{ textAlign: 'center' }}
				placeholder='Cantidad...'
				value={cantv}
				onChange={(event) => setCantv(event.target.value)}
			>
			</input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;
