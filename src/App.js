import { Suspense } from "react";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router />
    </Suspense>
  );
}

export default App;
