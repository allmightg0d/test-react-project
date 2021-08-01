// lista d epasos para poder renderizar los detalles
// 1) importar react, hooks: usestate, useEffect...
// 2) importar useParams para poder matchear los id 
// 3) importamos los componentes y base de datos 
// 4) usamos useEfect para poder incluir con USEPARAMS los id  y asi coincidir solo
// un elemento de la base de datos (id - 1 porque no tenemos id 0)
// 5) seteamos el state con la respuesta  de la base de datos y la pasamos al componente ITEMDETAIL




import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import './ItemDetailContainer.css';
// components
import ItemDetail from '../ItemDetail/ItemDetail'
// data base
//import database from '../../DATA/data.json'
import {getFirestore} from '../../FIREBASE/Firebase'

export default function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const [details, setDetails] = useState('')
    const {id} = useParams()

    useEffect(() => {
        const db =  getFirestore();
        const itemCollection = db.collection(`items`);
       
        itemCollection.get().then((querySnapshot)=> {
            // creamos una const asignandole una comparacion que deseemos hacer
            const filter = querySnapshot.docs.find(doc => doc.data().id === parseInt(id));
       
            if(querySnapshot.size === 0 ){
                console.log('sin items');
            }
            else if(filter){
                setItem(filter.data());
                // con este metodo estamos discriminadno en categorias
                // si queremos un item individual debemos comparar los id en lugar de category
                // tenemos que usar el metodo .find en el querySnapshot de {filter} 
            }
           
        }).catch((error) => {
            console.log('Error al buscar item...', error);
        })
        


		}, [id]);

    return (
        <div>
            <div className='ItemDetail-Container'>
                <ItemDetail  param={item} detail={setDetails}/> 

            </div>
            <div className="detail_underCard"> 
                <div className='underCard_container'>
                    <h2>Detalles</h2>
                    <p>{details}</p>
                </div>
            </div>
            <button className='buton_hide' onClick={()=>setDetails('')}>ocultar</button>
        </div>
    )
}