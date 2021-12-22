import "styled-components";

interface IColor {
  main: string;
  text?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: IColor;
      secondary: IColor;
      tertiary: IColor;
      buttons: IColor;

      common: {
        black: string;
        white: string;
        gray: string;
        lightGray: string
      }
    }
  }
}
