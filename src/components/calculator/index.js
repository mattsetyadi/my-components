import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [value, setValue] = useState('');
  const [total, setTotal] = useState('');

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operators = ['*', '/', '-', '+'];

  //   function equal(val) {}
  function clickedValue(val) {
    setValue(value + val);
  }

  function equal() {
    const tot = eval(value);
    setTotal(tot);
  }

  function clear() {
    setTotal('');
    setValue('');
  }

  return (
    <div className='calculator'>
      <div className='calculator-wrapper'>
        {total ? (
          <div className='display'>{total}</div>
        ) : (
          <div className='display'>{value === '' ? '0' : value}</div>
        )}

        <div className='button-calculator'>
          <div className='numbers'>
            {numbers.map((number, id) => {
              return (
                <div
                  key={id}
                  className='number'
                  onClick={() => clickedValue(number)}
                >
                  {number}
                </div>
              );
            })}
          </div>
          <div className='operators'>
            {operators.map((operator, id) => {
              return (
                <div
                  key={id}
                  className='operator'
                  onClick={() => clickedValue(operator)}
                >
                  {operator}
                </div>
              );
            })}
          </div>
        </div>
        <div className='bot-operator'>
          <div className='equal' onClick={clear}>
            clear
          </div>
          <div className='equal' onClick={() => equal()}>
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
