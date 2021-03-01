import React, { FunctionComponent } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../assets/TC.png';
import './NavBarComponent.css'
import { useHistory } from 'react-router-dom';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  nav_button: {
    marginRight: '2em'
  },
  toolbar: {
    justifyContent: 'flex-end',
    padding: '0'
  }
})

export const NavBarComponent: FunctionComponent<any> = () => {

  const history = useHistory();
  const classes = useStyles();

  const home = () => {
    history.push("/")
  }

  const redirect = (e: any) => {
    switch (e.target.innerText) {
      case "MISSION":
        history.push("/mission")
        break;
      case "SERVICES":
        history.push("/services")
        break;
      case "LINKS":
        history.push("/photos")
        break;
      case "CONTACT":
        history.push("/contact")
        break;
      default:
        history.push("/")
    }
  }

  return (
    <>
      <div className='nav-grid'>
        <div className='left-column'>
          <Toolbar className="logo">


            <a onClick={home}><img src={logo} alt="" /></a>
          </Toolbar>
        </div>
        <div className='middle-column'>

        </div>
        <div className='right-column'>
          <Toolbar className={classes.toolbar}>
            <Button className={classes.nav_button} onClick={redirect}>Home</Button>
            <Button className={classes.nav_button} onClick={redirect}>Mission</Button>
            <Button className={classes.nav_button} onClick={redirect}>Services</Button>
            {/* <Button className='nav-button' onClick={redirect}>Links</Button> */}
            <Button className={classes.nav_button} onClick={redirect}>Contact</Button>
          </Toolbar>
        </div>
        <div className="link-column">
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" className={classes.nav_button} onClick={() => window.open("https://www.facebook.com/tiaracsingh", "_blank")}><FacebookIcon /></IconButton>
            <IconButton edge="start" className={classes.nav_button} onClick={() => window.open("https://www.instagram.com/tc.travels/", "_blank")}><InstagramIcon /></IconButton>
            <IconButton edge="start" className={classes.nav_button} onClick={() => window.open("https://twitter.com/tctakestheworld", "_blank")}><TwitterIcon /></IconButton>
          </Toolbar>
        </div>
      </div>
    </>
  );
}