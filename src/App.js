import './App.css';
import { useEffect } from "react";
import Button from "./Components/Button/Button";
import SelectPlayers from "./Components/SelectPlayers/SelectPlayers";

const tg = window.Telegram.WebApp;

function App () {

    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close()
    }
    return (
        <div className="App">
            <h1>Working</h1>
            <SelectPlayers />
        </div>
    );
}

export default App;
