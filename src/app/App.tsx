import React from 'react'
import { Container, Box, Typography, Theme } from "@material-ui/core";
import { withStyles, WithStyles } from '@material-ui/styles';

const styles = (theme: Theme) => ({
    root: {
    },
    box: {
        background: '#ccc',
        padding: theme.spacing(2)
    }
});

interface Props extends WithStyles<typeof styles> {}

const App = ({classes}: Props) => {
    return (
        <Container maxWidth="lg">
            <Box my={2} className={classes.box}>
                <Typography variant="h4" component="h1">
                    React Boiler example
                </Typography>
            </Box>
        </Container>
    )
};

export default withStyles(styles)(App)