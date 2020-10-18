import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import StartGame from "./components/startgame/StartGame";
import Game from "./components/game/Game";
import GameOver from "./components/gameover/GameOver";
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './components/themes/LightTheme'
import { DarkTheme } from './components/themes/DarkTheme'


const App = () => {

  //const theme = localStorage.get('theme') === 'Dark' ? DarkTheme : LightTheme;
  const theme = new DarkTheme();
  const themeChanger = () => {

  }

  return (
    <Router>
      <ThemeProvider theme={theme} >

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
