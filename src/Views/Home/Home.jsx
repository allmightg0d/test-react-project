import React from 'react'
import './Home.css'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Home() {
    return (
        <div>
            <div className="home">
                <ItemListContainer />
            </div>
        </div>
    )
}

export default Home