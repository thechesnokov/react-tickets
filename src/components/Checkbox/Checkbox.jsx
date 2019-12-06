import React from 'react';
import './Checkbox.scss';

export default function Checkbox() {
    return(
        <>
            <label className="checkbox">
                <input className="checkbox__input" type="checkbox"/>
                <span className="checkbox__text">Все</span>
            </label>
            <label className="checkbox">
                <input className="checkbox__input" type="checkbox"/>
                <span className="checkbox__text">Без пересадок</span>
            </label>
            <label className="checkbox">
                <input className="checkbox__input" type="checkbox"/>
                <span className="checkbox__text">1 пересадка</span>
            </label>
            <label className="checkbox">
                <input className="checkbox__input" type="checkbox"/>
                <span className="checkbox__text">2 пересадки</span>
            </label>
            <label className="checkbox">
                <input className="checkbox__input" type="checkbox"/>
                <span className="checkbox__text">3 пересадки</span>
            </label>
        </>
    );
}