import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Cores from "./components/Cores"
import Sobre from "./components/Sobre"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
    const [theme, setTheme] = useState("black")

    function changeTheme(e) {
        setTheme(e.target.value)
    }

    return(
        <BrowserRouter>
            <div className="App" id={theme}>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cores" element={<Cores changeTheme={changeTheme}/>}/>
                        <Route path="/sobre" element={<Sobre/>}/>
                    </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App