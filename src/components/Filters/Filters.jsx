import React from 'react';
import './Filters.scss';
import Checkbox from "../Checkbox/Checkbox";

export default function Filters() {
    return(
        <div className="filters">
            <div className="filters__title">Количество пересадок</div>
            <Checkbox/>
        </div>
    );
}