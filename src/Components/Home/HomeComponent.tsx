import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import './HomeComponent.css'
//@ts-ignore
import video from '../../assets/homepage_video2.mp4'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        marginTop: '1em',
        marginBottom: '48em'
    }
})

export const HomeComponent: FunctionComponent<any> = () => {

    const classes = useStyles();

    return (
        <div className="main-home">
            <div className="container-home">
                <video playsInline autoPlay muted loop className="home-video">
                    <source src={video} type="video/mp4" />
                </video>
                <header className="home-header">
                    <h1>
                        Welcome to TConsults
                </h1>
                </header>
            </div>
            <div className="about_me">
                <p>My name is Tiara Singh</p>
                <p>My name is Tiara Singh</p>
                <p>My name is Tiara Singh</p>
            </div>

        </div>
    );
}