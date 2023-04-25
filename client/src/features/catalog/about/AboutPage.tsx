import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import agent from "../../../app/api/agent";
import { useState } from "react";

export default function AboutPage() {
    const [validationErrors, setValidationErrors] = useState<string[]> ([]);

    function getValidationError() {
        agent.TestErrors.getValidationError()
        .then(()=> console.log('should not see this'))
        .catch(error => setValidationErrors(error));
    }

    return (
        <Container>
            <Typography variant="h2">Test bttons</Typography>
            <ButtonGroup fullWidth>
                <Button variant="contained" onClick={()=> agent.TestErrors.get400error()}>get400error</Button>
                <Button variant="contained" onClick={()=> agent.TestErrors.get401error()}>get401error</Button>
                <Button variant="contained" onClick={()=> agent.TestErrors.get404error().catch(error => console.log(error))}>get404error</Button>
                <Button variant="contained" onClick={()=> agent.TestErrors.get500error()}>get500error</Button>
                <Button variant="contained" onClick={getValidationError}>getValidationError</Button>
            </ButtonGroup>
            {validationErrors.length > 0 &&
            <Alert severity="error">
                <AlertTitle>Validation Error </AlertTitle>
                <List>
                    {validationErrors.map(error => (
                        <ListItem key={error}>
                                <ListItemText>
                                    {error}
                                </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Alert>
            }
        </Container>
    )
}