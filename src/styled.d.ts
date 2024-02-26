// import original module declarations
import "styled-components";

// and extend theme !
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    backgroundColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
