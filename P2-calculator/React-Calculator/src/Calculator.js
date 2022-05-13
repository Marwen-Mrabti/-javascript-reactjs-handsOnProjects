import React, { useState } from 'react';

function Calculator() {
  const [inputValue, setInputValue] = useState('');

  const display = (value) => {
    setInputValue((prev) => prev + value);
  };
  const onCalculate = () => {
    setInputValue(eval(inputValue));
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="name">js calculator</h1>
        <div className="calc-table">
          <table>
            <tbody>
              <tr className="row">
                <td colSpan="3">
                  <input
                    className="input"
                    id="textarea"
                    type="text"
                    value={inputValue}
                    readOnly
                    // onChange={(e)=>setInputValue(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="clear-btn"
                    value="clear"
                    onClick={() => setInputValue('')}
                  />
                </td>
              </tr>
              <tr className="btn-grid row">
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="1"
                    onClick={() => display('1')}
                  />
                </td>
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="2"
                    onClick={() => display('2')}
                  />
                </td>
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="3"
                    onClick={() => display('3')}
                  />
                </td>
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="/"
                    onClick={() => display('/')}
                  />
                </td>
              </tr>
              <tr className="btn-grid row">
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="4"
                    onClick={() => display('4')}
                  />
                </td>
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="5"
                    onClick={() => display('5')}
                  />
                </td>
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="6"
                    onClick={() => display('6')}
                  />
                </td>
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="*"
                    onClick={() => display('*')}
                  />
                </td>
              </tr>
              <tr className="btn-grid row">
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="7"
                    onClick={() => display('7')}
                  />
                </td>
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="8"
                    onClick={() => display('8')}
                  />
                </td>
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="9"
                    onClick={() => display('9')}
                  />
                </td>
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="-"
                    onClick={() => display('-')}
                  />
                </td>
              </tr>
              <tr className="btn-grid row">
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="."
                    onClick={() => display('.')}
                  />
                </td>
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="0"
                    onClick={() => display('0')}
                  />
                </td>
                <td>
                  <input className="btn" type="button" value="=" onClick={onCalculate} />
                </td>
                <td>
                  <input
                    className="btn"
                    type="button"
                    value="+"
                    onClick={() => display('+')}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
