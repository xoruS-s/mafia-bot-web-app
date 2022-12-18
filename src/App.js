import './App.css';
import { useEffect } from "react";
import Button from "./Components/Button/Button";

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
            <Button onClick={onClose}>Закрыть</Button>
        </div>
    );
}

export default App;
