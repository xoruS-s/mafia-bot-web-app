import React, { useCallback, useEffect, useState } from 'react';
import './SelectPlayers.css';
import Button from "../Button/Button";

const tg = window.Telegram.WebApp;
tg.MainButton.setParams({
    text: 'Готово'
});
tg.MainButton.show();
let test = [];
let tempData = 0;
let in1, in2, in3, in4, in5, in6, in7, in8, in9, in10, in11, in12, in13, in14, in15;
let inputData = [];
const SelectPlayers = (callback, deps) => {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close()
    }
    const count_players = ['', 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const [count, setCount] = useState('');
    const [input, setInput] = useState('')
    const count_inputs = (e) => {
        setCount(e.target.value)
        test = [];
        for (let i = 1; i <= e.target.value; i++) {
            test.push(i);
        }
    }
    const onChangeInput = (e) => {
        setInput(e.target.value)
        switch (e.target.id) {
            case ('1'):
                in1 = e.target.value;
                break
            case ('2'):
                in2 = e.target.value;
                break
            case ('3'):
                in3 = e.target.value;
                break
            case ('4'):
                in4 = e.target.value;
                break
            case ('5'):
                in5 = e.target.value;
                break
            case ('6'):
                in6 = e.target.value;
                break
            case ('7'):
                in7 = e.target.value;
                break
            case ('8'):
                in8 = e.target.value;
                break
            case ('9'):
                in9 = e.target.value;
                break
            case ('10'):
                in10 = e.target.value;
                break
            case ('11'):
                in11 = e.target.value;
                break
            case ('12'):
                in12 = e.target.value;
                break
            case ('13'):
                in13 = e.target.value;
                break
            case ('14'):
                in14 = e.target.value;
                break
            case ('15'):
                in15 = e.target.value;
                break
        }
        inputData = [in1, in2, in3, in4, in5, in6, in7, in8, in9, in10, in11, in12, in13, in14, in15]
    }
    console.log(inputData)

    let list = count_players.map((num, index) => (<option key={index}>{num}</option>));
    let input_list = test.map((item) => (<input type="text" placeholder={item} id={item} onChange={onChangeInput}/>));

    tempData = count;
    const callbackCount = useCallback(() => {
        const data = { tempData, inputData }
        tg.sendData(JSON.stringify(data));
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', callbackCount);
        return () => {
            tg.offEvent('mainButtonClicked', callbackCount);
        }
    }, [])


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
            {/*<Button onClick={callbackCount}>Send</Button>*/}
            {/*<Button onClick={onClose}>Закрыть</Button>*/}
        </div>
    );

    // const [count, setCount] = useState('');
    // const onChangeCountPlayers = (e) => {
    //     setCount(e.target.value)
    // }
    //
    // tempData = count;
    // const callbackData = useCallback(() => {
    //     const data = { tempData };
    //     tg.sendData(JSON.stringify(data))
    // }, []);
    // useEffect(() => {
    //     tg.onEvent('mainButtonClicked', callbackData);
    //     return () => {
    //         tg.offEvent('mainButtonClicked', callbackData)
    //     }
    // }, [])
    //
    // return (
    //     <div>
    //         <select className={'select'} value={count} onChange={onChangeCountPlayers}>
    //             <option value={'1'}>1</option>
    //             <option value={'2'}>2</option>
    //             <option value={'3'}>3</option>
    //             <option value={'4'}>4</option>
    //             <option value={'5'}>5</option>
    //             <option value={'6'}>6</option>
    //         </select>
    //         <Button onClick={callbackData}>Close</Button>
    //     </div>
    // )

    // const [inputData1, setInputData1] = useState('');
    // const [inputData2, setInputData2] = useState('');
    // const [inputData3, setInputData3] = useState('');
    // const [inputData4, setInputData4] = useState('');
    // const [inputData5, setInputData5] = useState('');
    // const [inputData6, setInputData6] = useState('');
    // const [inputData7, setInputData7] = useState('');
    // const [inputData8, setInputData8] = useState('');
    // const [inputData9, setInputData9] = useState('');
    // const [inputData10, setInputData10] = useState('');
    //
    // const onChangeInput1 = (e) => {
    //     setInputData1(e.target.value)
    // }
    // const onChangeInput2 = (e) => {
    //     setInputData2(e.target.value)
    // }
    // const onChangeInput3 = (e) => {
    //     setInputData3(e.target.value)
    // }
    // const onChangeInput4 = (e) => {
    //     setInputData4(e.target.value)
    // }
    // const onChangeInput5 = (e) => {
    //     setInputData5(e.target.value)
    // }
    // const onChangeInput6 = (e) => {
    //     setInputData6(e.target.value)
    // }
    // const onChangeInput7 = (e) => {
    //     setInputData7(e.target.value)
    // }
    // const onChangeInput8 = (e) => {
    //     setInputData8(e.target.value)
    // }
    // const onChangeInput9 = (e) => {
    //     setInputData9(e.target.value)
    // }
    // const onChangeInput10 = (e) => {
    //     setInputData10(e.target.value)
    // }
    //
    // console.log(inputData1)
    //
    // const callbackData = useCallback(() => {
    //     const data = { inputData1, inputData2, inputData3, inputData4, inputData5, inputData6, inputData7, inputData8, inputData9, inputData10 };
    //     tg.sendData(JSON.stringify(data))
    // }, []);
    //
    // return (
    //     <div>
    //         <input value={inputData1} onChange={onChangeInput1}/>
    //         <input value={inputData2} onChange={onChangeInput2}/>
    //         <input value={inputData3} onChange={onChangeInput3}/>
    //         <input value={inputData4} onChange={onChangeInput4}/>
    //         <input value={inputData5} onChange={onChangeInput5}/>
    //         <input value={inputData6} onChange={onChangeInput6}/>
    //         <input value={inputData7} onChange={onChangeInput7}/>
    //         <input value={inputData8} onChange={onChangeInput8}/>
    //         <input value={inputData9} onChange={onChangeInput9}/>
    //         <input value={inputData10} onChange={onChangeInput10}/>
    //
    //         <Button onClick={callbackData}>SEND</Button>
    //     </div>
    // )
};

export default SelectPlayers;