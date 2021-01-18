import { BrowserRouter } from "react-router-dom";

import PageRoute from "./PageRoute";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;
