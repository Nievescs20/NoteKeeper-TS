import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Test Path</h1>}></Route>
    </Routes>
  );
}

export default App;
