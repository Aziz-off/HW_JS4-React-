import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {Services} from "../../components/services/Services";
import {Title} from "../../components/title/Title";
import News from "../../components/news/News";
import React, {useState} from "react";

function MainPage () {
    const [showNews, setShowNews] = useState(false);

    function newsAppear (e) {
        e.preventDefault();
        setShowNews(!showNews);
    }

    const servicesMain = ["ux/ui", "front-end", "back-end"];

    return (
        <div>
            <Header />
            <Title title="MainPage"/>
            <Services services={servicesMain} />
            {showNews === true ? <News /> : ""}
            <button onClick={newsAppear} style={{background: "lightblue", padding: "10px", cursor: "pointer"}}>SHOW NEWS</button>
            <Footer />
        </div>
    )
}





export default MainPage;


