import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChecklistIcon from '@mui/icons-material/Checklist';

export default function Navbar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <ChecklistIcon/>
                    </IconButton>
                    <Button color="inherit">Mobile React Todos</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}