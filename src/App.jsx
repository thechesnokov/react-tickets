import React from 'react';
import './App.scss';
import axios from 'axios';

axios.get('https://front-test.beta.aviasales.ru/search')
    .then(response => {
        let searchId = response.data.searchId;
        // console.log(searchId);

        axios.get('https://front-test.beta.aviasales.ru/tickets/?searchId=' + searchId)
            .then(response => {
                console.log(response.data);
            });
    });

export default function App() {
    return (
        <div className="app">
            <div className="app__container">
                <div className="tickets">
                    <table>
                        <tbody>
                        <tr>
                            <td colSpan="2">13 400 p</td>
                            <td>logo</td>
                        </tr>
                        <tr>
                            <td>
                                <div>mow-hkt</div>
                                <div>10:45 - 08:45</div>
                            </td>
                            <td>
                                <div>в пути</div>
                                <div>21ч 15м</div>
                            </td>
                            <td>
                                <div>2 пересадки</div>
                                <div>hkg, jnb</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>mow-hkt</div>
                                <div>10:45 - 08:45</div>
                            </td>
                            <td>
                                <div>в пути</div>
                                <div>21ч 15м</div>
                            </td>
                            <td>
                                <div>2 пересадки</div>
                                <div>hkg, jnb</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
