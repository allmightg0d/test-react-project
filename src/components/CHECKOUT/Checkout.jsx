import React, { useContext, useState } from "react";

import { getFirestore } from "../../FIREBASE/Firebase";

import { CartContext } from "../../Context/Context";

function Checkout() {
  const checkout = {
    titles: "",
    prices: null,
    client: "",
    email: "",
    gender: "",
    tel: "",
  };
  const [cart, setCart] = useContext(CartContext);
  const [patata, setPatata] = useState(checkout);
  const [tick, setTicket] = useState();
  const [disabled, setDisabled] = useState(true)

  const db = getFirestore();
  // const order = db.collection('purchase_order');
  // console.log(patata);

  function generateTicket() {
    let titl = cart.map((item) => item.category);
    let pric = cart.map((item) => item.price);
    

    setPatata({ ...patata, titles: titl, prices: pric });
    setDisabled(false)
  }
  const ticket = async (object) => {
    console.log(object);
    await db
      .collection("patata")
      .add(object)
      .then(({ id }) => {
        setTicket(id);
      });

  };

  // const verticket = async () => {
  //   db.collection("patata")
  //     .get()
  //     .then((snapshot) => {
  //       console.log(snapshot.docs);
  //       snapshot.docs.forEach((doc) => {
  //         console.log(doc.id, doc.price, doc.title);
  //       });
  //     });
  // };

  let totalPrice = cart.map(item => item.price * item.quantity)

  return (
    <div>
      <h1>Checkout Component (-_-)</h1>
      <div>
      {cart.map(item => <h2>{item.title} // <span> ${item.price} </span> </h2>)}
      
      
    

      <b> Tu precio total es:  ${totalPrice.reduce((a, b) => a + b, 0)} </b>
      <hr />
      </div>
      <button onClick={() => generateTicket()}>Generar ticket Garantía</button>
      <br />
      <button disabled={disabled} onClick={() => ticket(patata)}>Obtener mi ticket de compra</button>


      <h4>tu ticket es  {tick}</h4>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <button onClick={()=>verticket()}>ver mi compra</button> */}
    </div>
  );
}

export default Checkout;
