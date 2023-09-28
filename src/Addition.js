import { useState } from 'react';
import './Addition.css';

function Addition(){

    const [ num1, setNum1 ] = useState('');
    const [ num2, setNum2 ] = useState('');
    const [ msg, setMsg ] = useState('');

    const hNum1 = (event) => { setNum1(event.target.value); }
    const hNum2 = (event) => { setNum2(event.target.value); }

    const add = (event) => {
        event.preventDefault();
        if(num1 == '' || num2 == ''){
            alert("Please enter numbers");
            setMsg('');
            return;
        }
        
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        const r = a + b;
        let msg = `Addition of ${num1} + ${num2} = ${r}`;
        setMsg(msg);
    }

    const clear = (event) => {
        event.preventDefault();
        setNum1('');
        setNum2('');
        setMsg('');
    }

    return (
        <>
            <h1>Addition Application</h1>
            <p>Made by Kamal Sir and Sunny Sharma</p>
            <div className="container-main">
                <form onSubmit= {add} >
                    <input className = "text" type="number" step="any" placeholder="Enter the first Number" onChange={ hNum1 } value={ num1 }/>
                    <input className = "text" type = "number" step ="any" placeholder="Enter the second Number" onChange={ hNum2 } value={ num2 } />
                    <div className="container-in">
                        <input className = "button sbtBtn" type = "submit" value="Add"/>
                        <button className ="button clrBtn" onClick={clear}>Clear</button>
                    </div>
                </form>
            </div>
            <p className = "ansArea" id="ans">The Result will be shown below: {msg}</p>
        </>
    );
}

export default Addition;