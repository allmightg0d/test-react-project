import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ param }) {
    return (
        <div className='item_Card_container'>
            <div className="item_title">
                <h2>{param.title}</h2>
                <div className="item_img">
                    <img src={`${param.img}`} alt="" />
                </div>
            </div>
            <Link to={`/item/${param.id}`} >
                <button className='enlace_verMas'>ver más</button>
            </Link>
        </div>
    )
}
