import { Suspense } from "react";
import "./App.css";
import Router from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router />
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
