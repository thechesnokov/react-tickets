import React from 'react';
import './Modal.scss';

export default function Modal({ size, title, content }) {
    return(
        <div className="modal">
            <div className="modal__content">
                <img className="modal__close" src="/" alt="Закрыть окно"/>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}