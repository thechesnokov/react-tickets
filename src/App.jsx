import React, { useState } from 'react';
import './App.scss';
import axios from 'axios';
import moment from 'moment';

export default function App() {

    const [tickets, setTickets] = useState([]);

    useState(() => {

        axios.get('https://front-test.beta.aviasales.ru/search')
            .then(response => {
                return response.data.searchId;
            })
            .then(searchId => {
                return axios.get('https://front-test.beta.aviasales.ru/tickets/?searchId=' + searchId)
            })
            .then(response => {
                console.log(response.data.tickets);
                setTickets(response.data.tickets);
            })
            .catch(error => {
                console.log(error);
            })
    });

    return (
        <div className="app">
            <div className="app__container">
                {
                    tickets.map(item =>
                        <div className="tickets">
                            <table>
                                <tbody>
                                <tr>
                                    <td colSpan="2">{item.price}&nbsp;P</td>
                                    <td>
                                        <img src={`//pics.avs.io/99/36/${item.carrier}.png`} alt="logo"/>
                                    </td>
                                </tr>
                                {
                                    item.segments.map(item =>
                                        <tr>
                                            <td>
                                                <div>{item.origin} {item.destination}</div>
                                                <div>{item.date}</div>
                                                <div></div>
                                            </td>
                                            <td>
                                                <div>в пути</div>
                                                <div>{item.duration}</div>
                                            </td>
                                            {
                                                item.stops.length === 0 ?
                                                    <td>
                                                        <div>без пересадок</div>
                                                        <div>{item.stops}&nbsp;</div>
                                                    </td>
                                                    :
                                                    <td></td>

                                                &&

                                                item.stops.length === 1 ?
                                                    <td>
                                                        <div>1 пересадка</div>
                                                        <div>{item.stops[0]}</div>
                                                    </td>
                                                    :
                                                    <td></td>

                                                &&

                                                item.stops.length === 2 ?
                                                    <td>
                                                        <div>2 пересадки</div>
                                                        <div>{`${item.stops.join(', ')}`}</div>
                                                    </td>
                                                    :
                                                    <td></td>

                                                &&

                                                item.stops.length === 3 ?
                                                    <td>
                                                        <div>3 пересадки</div>
                                                        <div>{`${item.stops.join(', ')}`}</div>
                                                    </td>
                                                    :
                                                    <td></td>
                                            }
                                        </tr>)
                                }
                                </tbody>
                            </table>
                        </div>)
                }
            </div>
        </div>
    );
}
