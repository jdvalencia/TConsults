import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import './SocialMediaComponent.css'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        marginTop: '1em',
        marginBottom: '1em'
    }
})

export const SocialMediaComponent: FunctionComponent<any> = () => {

const classes = useStyles();

return (
    <div className="main-photos">
            <div className="container">
                <div className="home">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography>
                                Photos/Links
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
)
}