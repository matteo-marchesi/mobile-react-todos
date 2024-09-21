import {CssBaseline} from "@mui/material";
import TodoList from "./TodoList.jsx";
import Navbar from "./Navbar.jsx";

function App() {

    return (
        <>
            <CssBaseline/>
            <Navbar/>
            <TodoList/>
        </>
    );
}

export default App