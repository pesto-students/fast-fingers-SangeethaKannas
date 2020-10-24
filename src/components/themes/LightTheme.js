import { BaseTheme } from "./BaseTheme";

export class LightTheme extends BaseTheme {
  name = 'light';

  colors = {
    action: '#ff5155',
    bodyText: {
      main: '#000',
      background: '#fff'
    },
    body: {
      gradient: 'linear-gradient(#fff,rgba(203, 220, 223, 0.8));'
    }
  }
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
