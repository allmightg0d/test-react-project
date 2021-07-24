import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ param }) {
    // console.log(param)
    return (
        <div className='item_Card_container'>
            {/* <h1>{param.title}</h1> */}
            <div className="item_title">
                <h2>{param.title}</h2>
                <div className="item_img">
                    <img src={`${param.img}`} alt="" />
                </div>
            </div>
            {/* <h2>{param}</h2> */}
            <Link to={`/item/${param.id}`}>
                <button>ver más</button>
            </Link>
        </div>
    )
}
