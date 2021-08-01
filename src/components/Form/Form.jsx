import React, { useContext, useState } from "react";
import "./Form.css";
// import { useState } from "react";
import "./Form.css";
import { getFirestore } from "../../FIREBASE/Firebase";

import { CartContext } from "../../Context/Context";

export default function Register() {
  // --
  const checkout = {
    titles: "",
    prices: null,
    client: "",
    email: "",
  };
  const [cart] = useContext(CartContext);
  const [patata, setPatata] = useState(checkout);
  const [tick, setTicket] = useState();
  const [disabled, setDisabled] = useState(true);
  const [showTicket, setShowTicket] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const db = getFirestore();

  function generateTicket() {
    let titl = cart.map((item) => item.category);
    let pric = cart.map((item) => item.price);
    let customer = name;
    let mail = email;
    setPatata({
      ...patata,
      titles: titl,
      prices: pric,
      client: customer,
      email: mail,
    });
    setDisabled(false);
  }

  const ticket = async (object) => {
    console.log(object);
    await db
      .collection("patata")
      .add(object)
      .then(({ id }) => {
        setTicket(id);
      });
    setShowTicket(true);
  };
  let totalPrice = cart.map((item) => item.price * item.quantity);
  // --

  return (
    <>
      <div className="formContainer">
        <div className="formCard">
          <div className="formItems">
            <div className="formItemsLeft">
              <ul>
                {cart.map((item) => (
                  <li>
                    {item.title} - <span> ${item.price * item.quantity} </span>{" "}
                  </li>
                ))}
              </ul>
              <b>
                {" "}
                Tu precio total es: ${totalPrice.reduce(
                  (a, b) => a + b,
                  0
                )}{" "}
              </b>
            </div>
            <div className="formItemsRigth">
              <form className="formInputs" onSubmit={generateTicket}>
                <input
                  type="text"
                  className="form-control mb-4 p-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ingresa tu nombre"
                  required
                />
                <input
                  type="email"
                  className="form-control mb-4 p-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu email"
                  required
                />
              </form>
              <button onClick={() => generateTicket()}>
                Generar ticket Garantía
              </button>
              <br />
              <button disabled={disabled} onClick={() => ticket(patata)}>
                Obtener mi ticket de compra
              </button>
            </div>
          </div>

          <hr />
        </div>
      </div>

      {showTicket ? (
        <>
          {" "}
          <h4>Hola, tu ticket es {tick}</h4>
          <h3>
            {" "}
            <b> Nombre: {name} </b>
          </h3>
          <h3>Email: {email} </h3>
          <h3>Total: {totalPrice.reduce((a, b) => a + b, 0)} </h3>
        </>
      ) : (
        <> </>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
    </>
  );
}
