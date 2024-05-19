import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'


import {
  RouterProvider
} from "react-router-dom";

import Router from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
