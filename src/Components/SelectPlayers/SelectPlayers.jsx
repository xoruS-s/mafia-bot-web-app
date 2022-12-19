import React, { useEffect, useState } from 'react';
import './SelectPlayers.css';
import Button from "../Button/Button";

const tg = window.Telegram.WebApp;
tg.MainButton.setParams({
    text: 'Готово'
});
tg.MainButton.show();
let test = [];
const SelectPlayers = () => {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close()
    }
    const count_players = ['', 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const [count, setCount] = useState('');

    const count_inputs = (e) => {
        setCount(e.target.value)
        test = [];
        for (let i = 1; i <= e.target.value; i++) {
            test.push(i);
        }
    }
    console.log(test)
    let list = count_players.map((num, index) => (<option key={index}>{num}</option>));
    let input_list = test.map((item) => (<input type="text" placeholder={item}/>));
    console.log(input_list)

    return (
        <div className={'form'}>
            <h1>Жители города</h1>
            <div className={'select_form'}>
                <div className={'cnt_players_div'}>
                    <p className={'count_players'}>Выберите кол-во игроков</p>
                    <select className={'select'} value={count} onChange={count_inputs}>{list}</select>
                </div>
                <div className={'input'}>{input_list}</div>
            </div>
            {/*<Button onClick={onClose}>Закрыть</Button>*/}
        </div>
    );
};

export default SelectPlayers;