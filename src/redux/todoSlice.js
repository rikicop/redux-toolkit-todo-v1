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

const todoSlice = createSlice({

    name: "todos",
    initialState:[
        {id:1,title:'todo1', cantidad: 2 ,completed:false},
        {id:2,title:'todo2', cantidad: 4,completed:false},
        {id:3,title:'todo3',cantidad: 11,completed:true},
        {id:4,title:'todo4',cantidad: 8,completed:true},
    ],
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
        [getTodosAsync.fulfilled]:(state,action) =>{
            return action.payload.todos;
        },
    },
});

export const {addTodo, toggleComplete, deleteTodo} = todoSlice.actions

export default todoSlice.reducer;