import React from 'react';
import "./style.css";

const Form = (props) => (
    <form className="form">
        <input className="form__input" type="text" placeholder="Co jest do zrobienia?" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;