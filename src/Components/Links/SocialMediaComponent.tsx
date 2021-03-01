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
    <div className="main-social">
            <div className="container">
                
                    <Card className={classes.root}>
                        <CardContent>
                            <div className="social-media">
                            <h3>Social Media</h3>
                            <ul className="link-list">
                                <li className="fb">Facebook</li>
                                <li className="ig">Instagram</li>
                                <li className="tt">Twitter</li>
                            </ul>
                            <h3>Additional Services / Other Links</h3>
                            <ul>
                                <li>TC Travel Blogs</li>
                                <li></li>
                                <li></li>
                            </ul>
                            </div>
                        </CardContent>
                    </Card>
                
            </div>
        </div>
)
}