
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage.jsx";
import LoginForm from "./LoginForm.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="*" element={<div>404 (not found)</div> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App
