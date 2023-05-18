import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {ROUTER.map((pages) => {
            return (
              <Route
                exact
                path={pages.url}
                element={<pages.component />}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
