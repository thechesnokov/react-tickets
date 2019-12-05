import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/ru'

export default function App() {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {

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
    }, []);

    function getHoursFromDuration(duration) {
        let hours = duration / 60 | 0,
            minutes = duration % 60 | 0;

        if (hours === 0) {
            hours = ''
        } else {
            hours = `${hours}ч`
        }

        if (minutes === 0) {
            minutes = ''
        } else {
            minutes = `${minutes}м`
        }

        return `${hours} ${minutes}`
    }

    return (
        <div className="app">
            <div className="app__container">
                {
                    tickets.map(item =>
                        <div className="tickets">
                            <table>
                                <tbody>
                                <tr>
                                    <td colSpan="2">{item.price}&nbsp;&#8381;</td>
                                    <td>
                                        <img src={`//pics.avs.io/99/36/${item.carrier}.png`} alt="logo"/>
                                    </td>
                                </tr>
                                {
                                    item.segments.map(item =>
                                        <tr>
                                            <td>
                                                <div>{item.origin} &ndash; {item.destination}</div>
                                                <div>{moment(item.date).format('LT')} &ndash; {moment(item.date).add(item.duration, 'minutes').format('LT')}</div>
                                            </td>
                                            <td>
                                                <div>в пути</div>
                                                <div>{getHoursFromDuration(item.duration)}</div>
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
