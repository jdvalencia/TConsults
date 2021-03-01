import React from 'react';
import './App.css';
import { NavBarComponent } from './Components/NavBar/NavBarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeComponent } from './Components/Home/HomeComponent';
import { MissionComponent } from './Components/Mission/MissionComponent';
import { SocialMediaComponent } from './Components/Links/SocialMediaComponent';
import { ContactComponent } from './Components/Contact/ContactComponent';
import { ServicesComponent } from './Components/ServicesComponent/ServicesComponent';
import { FooterComponent } from './Components/Footer/FooterComponent';
 

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
        <NavBarComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/mission" component={MissionComponent} />
          <Route path="/photos" component={SocialMediaComponent} />
          <Route path="/contact" component={ContactComponent} />
          <Route path="/services" component={ServicesComponent} />
        </Switch>
        <FooterComponent />
      </Router>
    </div>
    // </ThemeProvider>
  );
}

export default App;
