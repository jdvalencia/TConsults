import React from 'react';
import './App.css';
import { NavBarComponent } from './Components/NavBar/NavBarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeComponent } from './Components/Home/HomeComponent';
import { AboutComponent } from './Components/About/AboutComponent';
import { SocialMediaComponent } from './Components/Photos/SocialMediaComponent';
import { ContactComponent } from './Components/Contact/ContactComponent';


// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#0cbab9',
//     },
//     secondary: {
//       main: '#ea609e',
//     },
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div className="App"> 
      
      <Router>
      <NavBarComponent/>
        <Switch>
          <Route exact path="/" component={HomeComponent}/>
          <Route path="/about" component={AboutComponent}/>
          <Route path="/photos" component={SocialMediaComponent}/>
          <Route path="/contact" component={ContactComponent}/>
        </Switch>
      </Router>
    </div>
    // </ThemeProvider>
  );
}

export default App;
