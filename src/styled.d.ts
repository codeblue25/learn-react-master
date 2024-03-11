// import original module declarations
import "styled-components";

// and extend theme !
declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    boardColor: string;
    cardColor: string;
  }
}
