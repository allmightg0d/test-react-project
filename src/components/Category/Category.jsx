import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

export default function Category({ param }) {
    // console.log(param)
    return (
        <div className='category_container'>
            {/* <h1>{param.title}</h1> */}
            <div className="category_title">
                <h2>{param}</h2>
            </div>
            {/* <h2>{param}</h2> */}
            <Link to={`/category/${param}`}>
                <button className="category_button">ver más</button>
            </Link>
        </div>
    )
}
