import { BaseTheme } from "./BaseTheme";

export class DarkTheme extends BaseTheme {
  colors = {
    action:    '#ff5155',
    bodyText: {
      main: '#fff'
    }
  };

  typography = {
     fontFamily: 'sans-serif',
    fontWeight: '400',
    h1: '4rem',
    h2: '3rem',
    h3: '2rem',
    h4: '1.4rem',
    h5: '1.2rem',
    h6: '0.8rem',
    body: '1rem'
  }

}
