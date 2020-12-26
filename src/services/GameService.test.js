import data from "../data/dictionary.json";
import GameService from "./GameService";

describe("Tests Game Service", () => {

  beforeEach(() => {
    sessionStorage.clear();
  });

  test("should have the functions", () => {
    // const gameService = new GameService();
    expect(typeof GameService.getNewword).toEqual("function");
    expect(typeof GameService.getTimerValue).toEqual("function");
    expect(typeof GameService.getCurrentDifficultyFactor).toEqual("function");
    expect(typeof GameService.updatedDifficultyFactor).toEqual("function");
    expect(typeof GameService.getGames).toEqual("function");
  });

  test("should get a random string from data", () => {
    const newWord = GameService.getNewword("EASY");
    expect(typeof newWord).toEqual("string");
    expect(data.includes(newWord)).toEqual(true);
  });

  test("should get timer value for various difficulty levels", () => {
    const newWord = GameService.getNewword("EASY");
    const wordLength = newWord.length;
    expect(GameService.getTimerValue(newWord, 1.0)).toEqual(wordLength * 1000);
  });

  test("should get timer value for various difficulty levels", () => {
    const newWord = GameService.getNewword("EASY");
    const wordLength = newWord.length;
    expect(GameService.getTimerValue(newWord, 1.0)).toEqual(wordLength * 1000);
  });

  test("should update timer value", () => {
    sessionStorage.setItem("difficulty", "EASY");
    GameService.updatedDifficultyFactor(1.6);
    expect(sessionStorage.getItem("difficulty")).toEqual("MEDIUM");

    GameService.updatedDifficultyFactor(2.1);
    expect(sessionStorage.getItem("difficulty")).toEqual("HARD");

    sessionStorage.setItem("difficulty", "EASY");
    GameService.updatedDifficultyFactor(2.1);
    expect(sessionStorage.getItem("difficulty")).toEqual("HARD");
  });

  test("Get stored games", () => {
    expect(GameService.getGames().length).toEqual(0);

    sessionStorage.setItem("games", JSON.stringify([{ word: "new" }]));
    expect(GameService.getGames().length).toEqual(1);
  });

  test("Get from session", () => {
    expect(GameService.getFromSession()).toEqual(null);
    sessionStorage.setItem("difficulty", "HARD");
    expect(GameService.getFromSession()).toEqual("HARD");

    sessionStorage.setItem("difficulty", "EASY");
    expect(GameService.getFromSession()).toEqual("EASY");
  });

  test("Gets data from session storage", () => {
    expect(GameService.getDataFromSession().difficulty).toEqual("EASY");
    sessionStorage.setItem("difficulty", "MEDIUM");
    sessionStorage.setItem("name", "Test");

    expect(GameService.getDataFromSession().difficulty).toEqual("MEDIUM");
    expect(GameService.getDataFromSession().name).toEqual("Test");
  });

  test("Get Background color", () => {
    expect(GameService.getBgColor(10, 40)).toEqual("rgb(30, 225, 0, 1)");
    expect(GameService.getBgColor(1, 254)).toEqual("rgb(253, 2, 0, 1)");
  });

});