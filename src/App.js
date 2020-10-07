import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import StartGame from "./components/startgame/startgame";
import Game from "./components/game/Game";
import GameOver from "./components/gameover/GameOver";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={StartGame}></Route>
        <Route exact path="/game" component={Game}></Route>
        <Route exact path="/result" component={GameOver}></Route>
      </div>
    </Router>
  );
}

export default App;
