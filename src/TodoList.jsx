import {useEffect, useState} from "react";
import List from '@mui/material/List';
import TodoItem from "./TodoItem.jsx";
import TodoForm from "./TodoForm.jsx";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (!data) {
        return [];
    } else {
        return data;
    }
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => {
                return todo.id !== id;
            });
        });
    }

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo;
                }
            });
        });
    }

    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {id: crypto.randomUUID(), text: text, completed: false}];
        });
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', m: 3}}>
            <Typography variant="h2" color="inherit" component="h1">
                Todo List
            </Typography>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} removeTodo={() => removeTodo(todo.id)}
                                     toggleTodo={() => toggleTodo(todo.id)}/>
                })}
                <TodoForm addTodo={addTodo}/>
            </List>
        </Box>
    );
}