import React, { useState } from 'react';
import './App.scss';
import axios from 'axios';

export default function App() {

    const [tickets, setTickets] = useState([]);

    useState(() => {

        axios.get('https://front-test.beta.aviasales.ru/search')
            .then(response => {
                let searchId = response.data.searchId;

                axios.get('https://front-test.beta.aviasales.ru/tickets/?searchId=' + searchId)
                    .then((response => {
                        let tickets = response.data.tickets;
                        console.log(tickets);
                        setTickets(tickets);
                    }))
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
                                                        <div>{`${item.stops[0]} ${item.stops[1]}`}</div>
                                                    </td>
                                                    :
                                                    <td></td>

                                                &&

                                                item.stops.length === 3 ?
                                                    <td>
                                                        <div>3 пересадки</div>
                                                        <div>{`${item.stops[0]} ${item.stops[1]} ${item.stops[2]}`}</div>
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
