import MainPage from "./pages/mainPage/MainPage";
import BlogPage from "./pages/blogPage/BlogPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Routes, Route} from "react-router-dom";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
