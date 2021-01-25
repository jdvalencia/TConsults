import { Card, CardContent,  makeStyles, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import './HomeComponent.css'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        marginTop: '1em',
        marginBottom: '48em'
    }
})

export const HomeComponent:FunctionComponent<any> = () => {

    const classes = useStyles();

    return(
        <div className="main-home">
            <div className="container">
                <div className="home">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography>
                                My name is Tiara Christina Singh
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}