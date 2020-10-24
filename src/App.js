import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartGame from "./components/startgame/StartGame";
import Game from "./components/game/Game";
import GameOver from "./components/gameover/GameOver";
import { LightTheme } from './components/themes/LightTheme'
import { DarkTheme } from './components/themes/DarkTheme'
import { GlobalStyles } from "./GlobalStyles";
import './App.css';
import Toggle from "./Toggle";

const App = () => {

  const [theme, setTheme] = useState(new DarkTheme());

  const toggleTheme = () => setTheme(theme.name === 'dark' ? new LightTheme() : new DarkTheme());

  return (
    <Router>
      <ThemeProvider theme={theme} >
        <GlobalStyles />

        <div className="toggle-container">
          <Toggle className="toggle-button" theme={theme} toggleTheme={toggleTheme}></Toggle>
        </div>
        <div className="App">
          <Route exact path="/" component={StartGame}></Route>
          <Route exact path="/game" component={Game}></Route>
          <Route exact path="/result" component={GameOver}></Route>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
