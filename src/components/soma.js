import React from 'react';
import './soma.css';

const Soma = () => {
    const [soma, setSoma] = React.useState('');
    const [number1Value, setNumber1Value] = React.useState('');
    const [number2Value, setNumber2Value] = React.useState('');
    
    const handleChangeInput1 = event => {
        setNumber1Value(event.target.value);        
    }

    const handleChangeInput2 = event => {
        setNumber2Value(event.target.value);        
    }

    const result = () => {
        let r = parseInt(number1Value) + parseInt(number2Value);
        console.log(r);
        setSoma(r);
    }

    return(
        <div className="container">
                <h1 className="title">{process.env.REACT_APP_TITLE|| "Erro"}</h1>
                <div className="number01">
                    <input type="number" className="input_numb" onChange={handleChangeInput1}></input>
                
                    <input type="number" className="input_numb" onChange={handleChangeInput2}></input>
                </div>
                <input type="button" value="+" alt="Add" className="button" onClick={result}>
                
                </input>
                <h2 className="result_sum">{soma}</h2>
            </div>
    );
}

export default Soma;