import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleComplete, deleteTodo} from '../redux/todoSlice';



const TodoItem = ({ id, title, cantidad ,completed }) => {
	console.log('Esto es completed(true or false): ', completed)
	const dispatch = useDispatch();
	const handleCompleteClick = () =>{
		dispatch(toggleComplete({id:id, completed: !completed, cantidad: cantidad-2}))
	}

	const handleDeleteClick = ()=>{
		dispatch(deleteTodo({id:id}));
	}
	return (
		/* Recuerda que todo esto que está abajo representa un item en particular */
		/* con sus respectivos id , complete, cantidad */
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input 
						type='checkbox' 
						className='mr-3' 
						checked={completed} /* true or false */
						
						/* no hay e.target por que los valores */
						/* ya fueron pasados a través de ...*/
						/* TodoItem = ({ id, title... */
						onChange={handleCompleteClick}>	
					</input>
						<div>{title} </div> 
					
					<input type="text" style={{textAlign:'center', maxWidth:'50px', marginLeft:'10px'}} value={cantidad} readOnly/> 
				</span>

				<button onClick={handleDeleteClick} className='btn btn-danger' >Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
