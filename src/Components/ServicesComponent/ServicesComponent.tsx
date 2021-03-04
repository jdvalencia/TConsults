import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import './ServicesComponent.css'

const useStyles = makeStyles({
    root: {
        marginTop: '1em',
        marginBottom: '48em',
        backgroundColor: '#f2f2',
    },
    body: {
        textAlign: 'justify'
    }
})

export const ServicesComponent: React.FunctionComponent<any> = () => {

    const classes = useStyles();

    return (
        <div className="main-services">
            <div className="container-services">
                <div className="content-services">
                    <h4>Marketing Services</h4>
                    <br />
                    <p>
                        Instagram - no paid ads - organic only
                                <br />
                        <br />
                                Hashtag research included for all plans
                                <br />
                        <br />
                        <span style={{ color: '#a36700' }}>Bronze</span> - $350 per month - 3 posts weekly - 1 Reel/IGTV
                                <br />
                        <br />
                        <span style={{ color: '#8a8a8a' }}>Silver</span> - $750 per month - 5 posts weekly - 2 Reel/IGTV
                                <br />
                        <br />
                        <span style={{ color: '#fcca00' }}>Gold</span> - $1250 per month - 7 posts weekly - 4 Reel/IGTV -
                                DM outreach to potential clients
                                </p>

                </div>
            </div>
        </div>
    );
}