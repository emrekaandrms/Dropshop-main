import { AppBar, Switch, Typography } from "@mui/material";

interface Props {
    mode: boolean;
    handleThemeChange: () => void;
}

export default function Header({mode, handleThemeChange}: Props) {
    return (
        <AppBar position="static">
            <Typography variant="h6">Dropshop</Typography>
            <Switch checked={mode} onChange={handleThemeChange}/>
        </AppBar>

    );

}