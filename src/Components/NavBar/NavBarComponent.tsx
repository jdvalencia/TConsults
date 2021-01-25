import React, { FunctionComponent } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../assets/TC.png';
import './NavBarComponent.css'
import { useHistory } from 'react-router-dom';


export const NavBarComponent: FunctionComponent<any> = () => {

  const history = useHistory();

  const redirect = (e:any)=>{
    switch(e.target.innerText){
      case "HOME":
        history.push("/")
        break;
      case "ABOUT":
        history.push("/about")
        break;
      case "PHOTOS":
        history.push("/photos")
        break;
      case "CONTACT ME":
        history.push("/contact")
        break;
      default:
        history.push("/")
    }
  }

  return (
      <div className='nav-grid'>
          <div className='left-column'>
            <Toolbar className='toolbar-align'>
            <Button className='nav-button' onClick={redirect}>Home</Button>
            <Button className='nav-button' onClick={redirect}>About</Button>
            </Toolbar>
          </div>
          <div className='middle-column'>
            <img src={logo} alt=""/>
          </div>
          <div className='right-column'>
          <Toolbar className='toolbar-align'>
            <Button className='nav-button' onClick={redirect}>Photos</Button>
            <Button className='nav-button' onClick={redirect}>Contact Me</Button>
            </Toolbar>
          </div>
      </div>
  );
}