import { BrowserRouter } from "react-router-dom";
import Router from "./components/router";
import GlobalStyle from "./common/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
