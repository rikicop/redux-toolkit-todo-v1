import React,{useEffect} from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';

const TodoList = () => {
	
	const dispatch = useDispatch();

	const todos = useSelector((state) => state.todos)
	console.log('Todos de todos list: ',todos)
	
	useEffect(()=>{
		dispatch(getTodosAsync())
	},[dispatch])

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem 
				    key={todo.id} id={todo.id} title={todo.title} 
				    cantidad={todo.cantidad} completed={todo.completed} 
				/>
			))}
		</ul>
	);
};

export default TodoList;
