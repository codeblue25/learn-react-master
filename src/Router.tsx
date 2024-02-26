import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface IRouterProps {
  toggleTheme: () => void;
  isDark: boolean;
}

function Router({ toggleTheme, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark}></Coin>
        </Route>

        <Route path="/">
          <Coins toggleTheme={toggleTheme}></Coins>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
