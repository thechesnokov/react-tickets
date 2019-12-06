import React from 'react';
import './App.scss';
import 'moment/locale/ru'
import Tickets from "./components/Tickets/Tickets";
import Filters from "./components/Filters/Filters";
import Modal from "./components/Modal/Modal";


export default function App() {
    return(
        <div className="app">
            <div className="app__container app__container--flex">
                <div className="app__filters">
                    <Filters/>
                </div>
                <div className="app__tickets">
                    <Tickets/>
                </div>
            </div>
            <Modal title={'Произошла ошибка'} content={'Попробуйте еще раз'}/>
        </div>
    )
}
