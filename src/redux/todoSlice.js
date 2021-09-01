import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async ()=>{
        const response = await fetch('http://localhost:7000/todos');
        if(response.ok){
            const todos = await response.json();
            return {todos}
        }
    }
)

export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:7000/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: payload.title,  cantidad: payload.cantidad}),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

const todoSlice = createSlice({

    name: "todos",
    initialState:[],
    reducers:{
        addTodo:(state, action)=>{
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                cantidad: action.payload.cantidad,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleComplete:(state,action)=>{
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
            state[index].cantidad = action.payload.cantidad;
        },
        deleteTodo: (state,action)=>{
            
           return state.filter((todo)=> todo.id !== action.payload.id);
           
        },
    },
    extraReducers:{
        [getTodosAsync.pending]:(state, action) =>{
            console.log('Obteniendos datos...')
        },
        [getTodosAsync.fulfilled]:(state,action) =>{
            console.log('Datos obtenidos exitosamente!')
            return action.payload.todos;
            
        },
        [addTodoAsync.fulfilled]: (state, action) => {
			state.push(action.payload.todo);
		},
    },
});

export const {addTodo, toggleComplete, deleteTodo} = todoSlice.actions

export default todoSlice.reducer;