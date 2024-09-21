import {InputAdornment, TextField} from "@mui/material";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import {Create} from "@mui/icons-material";

export default function TodoForm({addTodo}) {
    const [text, setText] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
        if (e.target.value.trim() === '') {
            setError(true);
        } else {
            setError(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') {
            setError(true);
        } else {
            addTodo(text);
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField sx={{mt: 3}} id="outlined-basic" label="Add Todo" variant="outlined" onChange={handleChange}
                       value={text}
                       error={error}
                       helperText={error ? "Type something you should do!" : ""}
                       fullWidth
                       slotProps={{
                           input: {
                               endAdornment:
                                   <InputAdornment position="end">
                                       <IconButton
                                           aria-label="create todo"
                                           edge="end"
                                           type="submit"
                                       >
                                           <Create/>
                                       </IconButton>
                                   </InputAdornment>
                           }
                       }}
            />
        </form>
    );
}