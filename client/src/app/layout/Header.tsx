import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midlinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]

const rightlinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },]

interface Props {
    mode: boolean;
    handleThemeChange: () => void;
}

const navStyles = {
    display: 'inline-flex',
    color: 'inherit',
    typography: 'h6',
    width: 'auto',
    justifyItems: 'flex-end',
    '&:hover': { color: 'grey.500' },
    '&.active': { color: 'text.secondary' }

}

export default function Header({ mode, handleThemeChange }: Props) {
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent:'space-between' , alignItems:'center'}} >
                <Box display='flex' alignItems='center'>
                <Typography variant="h6" sx={{ color: 'inherit', textDecoration: "none" }} component={NavLink} to="/">Dropshop</Typography>
                <Switch checked={mode} onChange={handleThemeChange} />
                </Box>
                <Box display='flex' alignItems='center'>
                <List sx={{ display: 'flex', justifyContent: 'center' }} >
                    {midlinks.map(({ title, path }) => (
                        <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>

                    ))}

                </List>
                </Box>
                <Box display='flex' alignItems='center'>
                <List sx={{ width: '100%', justifyContent: 'flex-end', justifyItems: 'flex-end' }} >
                    <IconButton size="large" edge="start" color="inherit" >
                        <Badge badgeContent="4" color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    {rightlinks.map(({ title, path }) => (
                        <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>

                    ))}

                </List>
                </Box>

            </Toolbar>
        </AppBar>

    );

}