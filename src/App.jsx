import React, { useState } from 'react';
import './App.scss';
import axios from 'axios';

export default function App() {

    const [tickets, setTickets] = useState([]);

    useState(() => {

        // axios.get('https://front-test.beta.aviasales.ru/search')
        //     .then(response => {
        //         let searchId = response.data.searchId;
        //         // console.log(searchId);
        //
        //         axios.get('https://front-test.beta.aviasales.ru/tickets/?searchId=' + searchId)
        //             .then(response => setTickets(response.data))
        //     });

        // fetch('https://api.punkapi.com/v2/beers')
        //     .then(response => response.json())
        //     .then(data => setTickets(data))

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
                                    <td colSpan="2">{item.price}</td>
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
                                            <td>
                                                <div>пересадки</div>
                                                <div>{`${item.stops[0]} ${item.stops[1]} ${item.stops[2]}`}</div>
                                            </td>
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
