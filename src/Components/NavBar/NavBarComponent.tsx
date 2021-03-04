import React, { FunctionComponent } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../assets/TC.png';
import './NavBarComponent.css'
import { useHistory } from 'react-router-dom';
import { IconButton, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MediaQuery from 'react-responsive'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  nav_button: {
    marginRight: '1em'
  },
  toolbar: {
    justifyContent: 'flex-end',
    padding: '0'
  },
  link_button: {
    marginRight: '1.5em'
  }
})

export const NavBarComponent: FunctionComponent<any> = () => {

  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const home = () => {
    history.push("/")
  }

  const redirect = (e: any) => {
    switch (e.target.innerText) {
      case "MISSION":
        setAnchorEl(null);
        history.push("/mission")
        break;
      case "SERVICES":
        setAnchorEl(null);
        history.push("/services")
        break;
      case "LINKS":
        setAnchorEl(null);
        history.push("/photos")
        break;
      case "CONTACT":
        setAnchorEl(null);
        history.push("/contact")
        break;
      default:
        setAnchorEl(null);
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
          <MediaQuery minWidth={900}>
            <Toolbar className={classes.toolbar}>
              <Button className={classes.nav_button} onClick={redirect}>Home</Button>
              <Button className={classes.nav_button} onClick={redirect}>Mission</Button>
              <Button className={classes.nav_button} onClick={redirect}>Services</Button>
              {/* <Button className='nav-button' onClick={redirect}>Links</Button> */}
              <Button className={classes.nav_button} onClick={redirect}>Contact</Button>
            </Toolbar>
          </MediaQuery>
          <MediaQuery maxWidth={899}>
            <div>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon/>
      </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <li><Button className={classes.nav_button} onClick={redirect}>Home</Button></li>
                <li><Button className={classes.nav_button} onClick={redirect}>Mission</Button></li>
                <li><Button className={classes.nav_button} onClick={redirect}>Services</Button></li> 
                <li><Button className={classes.nav_button} onClick={redirect}>Contact</Button></li>
                <li><IconButton edge="start" style={{marginLeft: "0.1em"}}  onClick={() => window.open("https://www.facebook.com/tiaracsingh", "_blank")}><FacebookIcon /></IconButton>
                    <IconButton edge="start"  onClick={() => window.open("https://www.instagram.com/tc.travels/", "_blank")}><InstagramIcon /></IconButton>
                    <IconButton edge="start"  onClick={() => window.open("https://twitter.com/tctakestheworld", "_blank")}><TwitterIcon /></IconButton></li>
              </Menu>
            </div>
          </MediaQuery>
        </div>
        <div className="link-column">
          <MediaQuery minWidth={500}>
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" className={classes.link_button} onClick={() => window.open("https://www.facebook.com/tiaracsingh", "_blank")}><FacebookIcon /></IconButton>
            <IconButton edge="start" className={classes.link_button} onClick={() => window.open("https://www.instagram.com/tc.travels/", "_blank")}><InstagramIcon /></IconButton>
            <IconButton edge="start" className={classes.link_button} onClick={() => window.open("https://twitter.com/tctakestheworld", "_blank")}><TwitterIcon /></IconButton>
          </Toolbar>
          </MediaQuery>
        </div>
      </div>
    </>
  );
}