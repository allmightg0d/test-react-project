import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";

import ItemList from "../ItemList/ItemList";
// base de datos
// import database from '../../DATA/data.json'
import { getFirestore } from "../../FIREBASE/Firebase";

export default function ItemListContainer() {


  const [data, setData] = useState([]);

  //    usamos use efect para asignarle la data a nuestro estado y asi poder mapear
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("sin items");
        }
        setData(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error al buscar item...", error);
      });
  }, []);

  return (
    <>
      <ItemList param={data} />
    </>
  );
}