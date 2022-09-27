import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./theme/globalStyle"
import Header from "./components/Header"
import Home from "./components/Home"
import Cores from "./components/Cores"
import Sobre from "./components/Sobre"
import Footer from "./components/Footer"

function App() {
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cores" element={<Cores/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App