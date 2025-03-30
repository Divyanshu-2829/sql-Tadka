import { BrowserRouter, Routes, Route } from "react-router-dom";

import SQLEditor from "./pages/SQLEditor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SQLEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
