import { IconButton, makeStyles } from '@material-ui/core'
import React from 'react'
import './FooterComponent.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MediaQuery from 'react-responsive';

const useStyles = makeStyles({
    nav_button: {
        marginLeft: '0.5em'
    }
})

export const FooterComponent: React.FC<any> = () => {
    const classes = useStyles();
    return (
        <div className="container-footer">
            <MediaQuery maxWidth={767}>
            <footer className="footer">
                <p>561-267-5558 | &copy; Copyright 2021</p><p> - TConsults. All rights reserved.</p>
                <IconButton edge="start" className={classes.nav_button} onClick={() => window.open("https://www.facebook.com/tiaracsingh", "_blank")}><FacebookIcon/></IconButton>
                <IconButton edge="start" className={classes.nav_button} onClick={() => window.open("https://www.instagram.com/tc.travels/", "_blank")}><InstagramIcon/></IconButton>
                <IconButton edge="start" className={classes.nav_button} onClick={() => window.open("https://twitter.com/tctakestheworld", "_blank")}><TwitterIcon/></IconButton>
            </footer>
            </MediaQuery>
            <MediaQuery minWidth={768}>
            <footer className="footer">
                <span>561-267-5558 | &copy; Copyright 2021 - TConsults. All rights reserved.</span>
                <IconButton edge="start" className={classes.nav_button} onClick={() => window.open("https://www.facebook.com/tiaracsingh", "_blank")}><FacebookIcon/></IconButton>
                <IconButton edge="start" className={classes.nav_button} onClick={() => window.open("https://www.instagram.com/tc.travels/", "_blank")}><InstagramIcon/></IconButton>
                <IconButton edge="start" className={classes.nav_button} onClick={() => window.open("https://twitter.com/tctakestheworld", "_blank")}><TwitterIcon/></IconButton>
            </footer>
            </MediaQuery>
        </div>
    )
}