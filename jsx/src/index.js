import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = "🍕 (Pizza)";

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'grey', color: 'white'}}>{buttonText}</button>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));